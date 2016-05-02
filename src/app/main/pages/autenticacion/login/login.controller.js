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

        if(authService.currentUser()) redirect(authService.currentUser().rol);

        function iniciarSesion(){
            login.post(vm.usuario).then(function (p) {
                var usuario = authService.storeUser(p.token);
                console.log(usuario)
                redirect(usuario.rol);
            }), function () {
                vm.mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
            }
        }

        function redirect(rol){
            if (rol == 'SUPER_ADMIN') {
                $state.go('app.sample');
            } else if (rol == 'DIRECTOR') {
                // $state.go('app.modules.director.principal');
            } else if (rol == 'TUTOR') {
                // $state.go('app.modules.tutor.principal');
            } else if (rol == 'ESTUDIANTE'){
                // $state.go('app.modules.estudiantes.principal');
            }
        }

    }
})();
