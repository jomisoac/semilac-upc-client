(function () {
    'use strict';

    angular
        .module('app.pages.autenticacion.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(Restangular, $state, authService, $mdToast) {
        var vm = this;
        var login = Restangular.all('/login');

        vm.usuario = {};
        vm.mensajeError = '';

        vm.iniciarSesion = iniciarSesion;
        vm.registrarTutor = registrarTutor;
        vm.registrarEstudiante = registrarEstudiante;
        vm.consultarRequisitos=consultarRequisitos;

        if (authService.currentUser())
            redirectRoles();

        function iniciarSesion() {
            vm.mensajeError = '';
            login.post(vm.usuario).then(success, error);

            function success(p) {
                
                var usuario = authService.storeUser(p.token);
                redirectRoles();
            }

            function error(error) {
                vm.mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado';
                var mensaje = vm.mensajeError;
                $mdToast.show({
                    template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + mensaje + '</div></md-toast>',
                    hideDelay: 4000,
                    position: 'top right',
                    parent: '#content'
                });
            }
        }

        function redirectRoles() {
            $state.go('app.pages_autenticacion_roles');
        }

        function registrarTutor() {
            $state.go('app.registrarse-tutor');
        }

        function registrarEstudiante() {
            $state.go('app.registrarse-estudiante');
        }

        function consultarRequisitos() {
            $state.go('app.consultar-requisitos');
        }


    }
})();
