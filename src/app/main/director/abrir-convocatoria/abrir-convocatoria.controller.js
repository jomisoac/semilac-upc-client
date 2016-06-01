(function () {
    'use strict';

    angular
        .module('app.director.abrirConvocatoria')
        .controller('AbrirConvocatoriaController', AbrirConvocatoriaController);


    /** @ngInject */
    function AbrirConvocatoriaController(Restangular, $mdToast, $state, $stateParams, $timeout, authService) {
        //Variables privadas
        var vm = this;
        var convocatoria = Restangular.all('/convocatorias');
        var hoy = new Date();
        //Variables y funciones públicas
        vm.cambioFechaFinal = cambioFechaFinal;
        vm.cambioFechaInicial = cambioFechaInicial;
        vm.guardar = guardar;

        //Declaración de funciones
        function activate() {
            vm.convocatoria = {};
            //La fecha inicial mínima siempre será el día actual...
            //...porque no se puede abrir convocatorias para días que ya pasaron.
            vm.fechaInicialMin = hoy;
            vm.fechaFinalMin = hoy;
        }

        function cambioFechaInicial() {
            //La fecha final de la convocatoria debe ser como mínimo el mismo día en que se abre la convocatoria, es decir, la convocatoria cierra el mismo día.
            if (vm.convocatoria.fechainicial) {
                vm.fechaFinalMin = vm.convocatoria.fechainicial;
            } else {
                vm.fechaFinalMin = hoy;
            }
        }

        function cambioFechaFinal() {
            if (vm.convocatoria.fechafinal) {
                vm.fechaInicialMax = vm.convocatoria.fechafinal;
            } else {
                vm.fechaInicialMax = undefined;
            }
        }

        function guardar() {
            vm.convocatoria.usuario_id = JSON.parse(sessionStorage.usuario).id;
            console.log(vm.convocatoria.acta);
            vm.convocatoria.usuario_id = authService.currentUser().usuario_id
            convocatoria.post(vm.convocatoria)
                .then(
                function (d) {
                    if (vm.convocatoria.acta) {
                        var formData = new FormData();
                        formData.append("acta", vm.convocatoria.acta);
                        Restangular.all('/convocatorias/' + d.convocatoria.id + '/acta')
                            .withHttpConfig({ transformRequest: angular.identity })
                            .customPOST(formData, undefined, undefined,
                            { 'Content-Type': undefined })
                            .then(function (respuestaActa) {
                                message(d.mensaje);
                                $timeout(function () {
                                    $state.transitionTo($state.current, $stateParams, {
                                        reload: true,
                                        inherit: false,
                                        notify: true
                                    });
                                }, 3000);
                            },
                            function (error) {
                                var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';
                                message(mensajeError);
                            }
                            );
                    }
                },
                function (error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';
                    message(mensajeError);
                }
                );
            activate();
        }

        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }

        //Llamadas a las funciones
        activate();
    }
})();