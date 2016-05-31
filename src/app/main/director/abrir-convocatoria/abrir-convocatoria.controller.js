(function () {
    'use strict';

    angular
        .module('app.director.abrirConvocatoria')
        .controller('AbrirConvocatoriaController', AbrirConvocatoriaController);


    /** @ngInject */
    function AbrirConvocatoriaController(Restangular, $mdToast, $state, $stateParams, $timeout, authService) {
        var vm = this;
        vm.convocatoria = {};
        var convocatoria = Restangular.all('/convocatorias');

        vm.fechaValida = fechaValida;
        vm.guardar = guardar;
        
        function fechaValida() {
            if(vm.convocatoria.fechainicial.getFullYear() <= vm.convocatoria.fechafinal.getFullYear()){
                if(vm.convocatoria.fechainicial.getMonth() <= vm.convocatoria.fechafinal.getMonth() ){
                    if(vm.convocatoria.fechainicial.getDate() < vm.convocatoria.fechafinal.getDate()){
                    }else{
                        alert("la fecha final debe ser mayo que la fecha inicial...");
                    }
                }else{
                    alert("la fecha final debe ser mayo que la fecha inicial...");
                }
            }else{
                alert("la fecha final debe ser mayo que la fecha inicial...");
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
                                .withHttpConfig({transformRequest: angular.identity})
                                .customPOST(formData, undefined, undefined,
                                    {'Content-Type': undefined})
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
        }

        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }
    }
})();