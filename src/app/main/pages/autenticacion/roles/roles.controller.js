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

        // aca redirecciona cuando tiene un rol unico
        function redirectRol(rol){
            for(var i = 0; i < rol.length; i++){
                if (rol[i].nombre == 'SUPER_ADMIN') {
                    authService.storeSelectRol('SUPER_ADMIN');
                   $state.go('app.superadmin_registrar_director');
                } else if (rol[i].nombre == 'DIRECTOR') {
                    authService.storeSelectRol('DIRECTOR');
                    $state.go('app.registrar_requisito');
                } else if (rol[i].nombre == 'TUTOR') {
                    authService.storeSelectRol('TUTOR');
                    $state.go('app.registrar_tutor');
                } else if (rol[i].nombre == 'LIDER') {
                    authService.storeSelectRol('LIDER');
                    // $state.go('app.centrales_turnos');
                } else if (rol[i].nombre == 'ESTUDIANTE') {
                    authService.storeSelectRol('ESTUDIANTE');
                    // $state.go('app.centrales_turnos');
                }
            }
        }
        
        
        // aca redirecciona cuando se selecciona un rol en especifico
        function seleccionarRol(rol) {
            if (rol == 'SUPER_ADMIN') {
                authService.storeSelectRol(rol);
                $state.go('app.superadmin_registrar_director');
            } else if (rol == 'DIRECTOR') {
                authService.storeSelectRol(rol);
                $state.go('app.registrar_requisito');
            } else if (rol == 'TUTOR') {
                authService.storeSelectRol(rol);
                $state.go('app.registrar_tutor');
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
