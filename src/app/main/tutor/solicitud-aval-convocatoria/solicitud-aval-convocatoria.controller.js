(function () {
    'use strict';

    angular
            .module('app.tutor.solicitudAvalConvocatoria')
            .controller('SolicitudAvalConvocatoriaController', SolicitudAvalConvocatoriaController);

    /** @ngInject */
    function SolicitudAvalConvocatoriaController(Restangular, $mdToast, authService) {
        //console.log("RegistrarInvitacionController");
        var vm = this;
        vm.semillero = {};
        vm.semilleros = [];
        vm.convocatoriaAbierta = {};
        vm.solicitudes_aval = [];
        vm.enviar = enviar;
        vm.limpiar = limpiar;


        var solicitudes = Restangular.all('/solicitud-aval-convocatoria');
        var convocatoriaAbierta = Restangular.one('/convocatorias/convocatoria-abierta').$object;
        vm.convocatoriaAbierta = convocatoriaAbierta;
        cargarSemilleros();
        function cargarSemilleros() {
            var tutor_id = authService.currentUser().datos.id;
            vm.semilleros = Restangular.all('/tutores/' + tutor_id + '/semilleros').getList().$object;
        }

        // cargarConvocatoria();
        //function cargarConvocatoria() {
        //   vm.convocatorias = convocatorias;
        // }

        function enviar(form) {
            var solicitud = {
                'convocatoria_id': 1,
                'semillero_id': vm.semillero_id_seleccionado
            };

            solicitudes.post(solicitud).then(
                    function (d) {
                        message(d.mensaje);
                        solicitud = {};
                    },
                    function (error) {
                        var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error                    inesperado.';
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
        function limpiar(form) {
            vm.linea = {};
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
        }
    }
})();







