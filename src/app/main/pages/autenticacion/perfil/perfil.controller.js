(function () {
    'use strict';
    
    angular
        .module('app.pages.autenticacion.perfil')
        .controller('perfilController', perfilController)
    
    function perfilController(Restangular, $stateParams) {
        var vm = this;
        var perfilUsuario = Restangular.all('/perfil/usuario');

        cargarDatosPerfil();
        function cargarDatosPerfil() {
            vm.datos = perfilUsuario.get($stateParams.id).$object;
            console.log(vm.datos)
        }
        

    }
})();