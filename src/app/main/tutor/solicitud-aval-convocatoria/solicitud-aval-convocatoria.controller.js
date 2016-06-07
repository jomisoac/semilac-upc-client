(function () {
    'use strict';

    angular
            .module('app.tutor.solicitudAvalConvocatoria')
            .controller('SolicitudAvalConvocatoriaController', SolicitudAvalConvocatoriaController);

    /** @ngInject */
    function SolicitudAvalConvocatoriaController(Restangular, $mdToast, authService) {
        //console.log("RegistrarInvitacionController");
        var vm = this;
       // vm.semillero = {};
        //vm.semilleros = [];
       // vm.convocatoria = {};
       // vm.convocatorias = [];
        vm.solicitud_aval = {};
        vm.solicitudes_aval = [];
        vm.respuesta = 'enviar';
        vm.enviar = enviar;
        vm.limpiar = limpiar;

        var solicitudes = Restangular.all('/solicitud-aval-convocatoria');
        var convocatorias = Restangular.all('/convocatorias/convocatoria-abierta').getList().$object;

        function enviar() {
            var solicitud = {
                'convocatoria_id': vm.convocatoria_id_seleccionado,
                'semillero_id': vm.semillero_id_seleccionado
            };
            solicitudes.post(solicitud).then(
                    function (d) {
                        message(d.mensaje);
                        solicitud = {};
                    },
                    function (error) {
                        var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';

                    }
            );
        }

        cargarSemilleros();
        function cargarSemilleros() {
            var tutor_id = authService.currentUser().datos.id;
            vm.semilleros = Restangular.all('/tutores/' + tutor_id + '/semilleros').getList().$object;
        }
        
        cargarConvocatorias();
        function cargarConvocatorias(){
            vm.convocatoria= convocatorias;
        }
        
        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }
        function limpiar(form) {
            vm.linea = {};
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
        }
    }
})();







