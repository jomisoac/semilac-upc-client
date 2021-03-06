(function() {
    'use strict';

    angular
        .module('app.pages.autenticacion.login')
        .service('authService', authService)

    function authService(jwtHelper){

        this.storeUser = function (jwt) {
            sessionStorage.setItem('jwt', jwt);
            var usuario = jwtHelper.decodeToken(jwt).usuario;
            sessionStorage.setItem('usuario',JSON.stringify(usuario));
            return usuario;
        }

        this.currentUser = function(){
            return JSON.parse(sessionStorage.getItem('usuario'));
        }

        this.storeSelectRol = function (selectRol) {
            sessionStorage.setItem('selectedRol',selectRol);
        }

        this.getSelectedRol = function () {
            return sessionStorage.getItem('selectedRol');
        }

        this.stateRoles = function (roles) {
            sessionStorage.setItem('stateRoles',JSON.stringify(roles));
        }
    }
})();
