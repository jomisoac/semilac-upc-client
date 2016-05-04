(function ()
{
    'use strict';

    angular
        .module('app.pages.autenticacion.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(Restangular, $state, authService)
    {
      var vm = this;
      var login = Restangular.all('/login');
      vm.usuario = {};
      vm.mensajeError = '';

      vm.iniciarSesion = iniciarSesion;

        if(authService.currentUser())
            redirectRoles();

        function iniciarSesion(){
            login.post(vm.usuario).then(function (p) {
                var usuario = authService.storeUser(p.token);
                redirectRoles();
            }), function () {
                vm.mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
            }
        }

        function redirectRoles(){
            $state.go('app.pages_autenticacion_roles');
        }

    }
})();
