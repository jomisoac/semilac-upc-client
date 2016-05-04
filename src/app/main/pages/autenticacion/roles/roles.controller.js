(function ()
{
    'use strict';

    angular
        .module('app.pages.autenticacion.roles')
        .controller('RolesController', RolesController);

    /** @ngInject */
    function RolesController($state, authService)
    {
        var vm = this;
        // funciones
        vm.seleccionarRol = seleccionarRol;
        // variables
        vm.roles = [];
        var usuario = authService.currentUser();

        cargarRolesUsuario();
        function cargarRolesUsuario() {
            if(usuario.roles.length == 1){
                redirectRol(usuario.roles);
            }else{
                for(var i = 0; i < usuario.roles.length; i++){
                    vm.roles.push(usuario.roles[i]);
                }
            }
        }

        function redirectRol(rol){
            for(var i = 0; i < rol.length; i++){
                if (rol[i].nombre == 'SUPER_ADMIN') {
                    authService.storeSelectRol('SUPER_ADMIN');
                    $state.go('app.sample');
                } else if (rol[i].nombre == 'EMPRESA') {
                    // $state.go('app.empresas_gestion_conductores');
                } else if (rol[i].nombre == 'CENTRAL_EMPRESA') {
                    // $state.go('app.centrales_turnos');
                }
            }
        }
        
        function seleccionarRol(rol) {
            if (rol == 'SUPER_ADMIN') {
                authService.storeSelectRol(rol);
                $state.go('app.sample');
            } else if (rol == 'DIRECTOR') {
                authService.storeSelectRol(rol);
                // $state.go('app.empresas_gestion_conductores');
            } else if (rol == 'TUTOR') {
                authService.storeSelectRol(rol);
                // $state.go('app.centrales_turnos');
            } else if (rol == 'LIDER') {
                authService.storeSelectRol(rol);
                // $state.go('app.centrales_turnos');
            } else if (rol == 'ESTUDIANTE') {
                authService.storeSelectRol(rol);
                // $state.go('app.centrales_turnos');
            }
        }
        

    }
})();
