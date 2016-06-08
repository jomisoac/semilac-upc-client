(function() {
    'use strict';

    angular
        .module('app.tutor.solicitudAvalConvocatoria')
        .controller('SolicitudAvalConvocatoriaController', SolicitudAvalConvocatoriaController);

    /** @ngInject */
    function SolicitudAvalConvocatoriaController(Restangular, $mdToast, authService) {
        //Según las buenas prácticas de @johnpapa, todo se organiza alfabéticamente y de la siguiente manera:

        //1. Variables privadas
        var vm = this;
        var solicitudes = Restangular.all('/solicitud-aval-convocatoria');
        var convocatoriaAbierta = Restangular.one('/convocatorias/convocatoria-abierta');

        //2. Variables y funciones públicas
        vm.convocatoriaAbierta = {};
        vm.enviar = enviar;
        vm.estaCargando = true;
        vm.hayConvocatoriaAbierta = false;
        vm.limpiar = limpiar;
        vm.semilleros = [];

        //3. Declaración de las funciones
        function cargarConvocatoriaAbierta() {
            convocatoriaAbierta.get().then(
                function(response) {
                    vm.estaCargando = false;
                    vm.hayConvocatoriaAbierta = !jQuery.isEmptyObject(response);
                    if (vm.hayConvocatoriaAbierta) {
                        vm.convocatoriaAbierta = response;
                    }
                    // console.log(response, vm.hayConvocatoriaAbierta, vm.convocatoriaAbierta);
                },
                function(error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error                    inesperado.';
                    message(mensajeError);
                }
            );
        }

        function cargarSemilleros() {
            var tutor_id = authService.currentUser().datos.id;
            vm.semilleros = Restangular.all('/tutores/' + tutor_id + '/semilleros').getList().$object;
        }

        function enviar(form) {
            var solicitud = {
                'convocatoria_id': 1,
                'semillero_id': vm.semillero_id_seleccionado,
                'tutor_id': authService.currentUser().datos.id
            };

            solicitudes.post(solicitud).then(
                function(d) {
                    message(d.mensaje);
                    solicitud = {};
                },
                function(error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error                    inesperado.';
                }
            );
        }

        function limpiar(form) {
            vm.linea = {};
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
        }

        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }

        //4. El resto del código: Llamadas a la funciones, etc.
        cargarConvocatoriaAbierta();
        cargarSemilleros();
    }
})();