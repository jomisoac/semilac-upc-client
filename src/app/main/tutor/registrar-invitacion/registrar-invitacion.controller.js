(function () {
    'use strict';

    angular
        .module('app.tutor.registrarInvitacion')
        .controller('RegistrarInvitacionController', RegistrarInvitacionController);

    /** @ngInject */
    function RegistrarInvitacionController(Restangular, $mdToast, authService) {
        //console.log("RegistrarInvitacionController");
        var vm = this;
        var invitaciones = Restangular.all('/invitaciones');
        vm.registrar = registrar;
        vm.limpiar = limpiar;

        init();
        function init() {
            vm.invitacion= {};
            vm.invitaciones = [];
            semilleros();
        }

        function  semilleros() {
            vm.semilleros = semilleros;
        }

        function registrar() {
            vm.invitaciones.tutor_id = authService.currentUser().datos.id;
            invitaciones.post(vm.invitacion).then(function (d) {
                message(d);
                vm.invitacion = '';
            }), function (error) {
                var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';
                message(mensajeError);
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

        function limpiar() {
            init();
        }
    }
})();


