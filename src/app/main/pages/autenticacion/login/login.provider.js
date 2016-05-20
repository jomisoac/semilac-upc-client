(function() {
    'use strict';

    angular
        .module('app.pages.autenticacion.login')
        .provider('auth', authProvider);
    function authProvider() {
        var service = this;
        service.checkUser = checkUser;
        service.getSelectedRol = getSelectedRol;

        function getSelectedRol() {
            return sessionStorage.getItem('selectedRol');
        }

        function checkUser(roles) {
            // for (var i = 0; i < stateRolesC.length; i++){
                if (roles.indexOf(getSelectedRol()) != -1){
                    return false
                }else{
                    return true
                }
            // }
        }

        /* ----------------- */
        /* Service           */
        /* ----------------- */

        this.$get = function ()
        {
            var service = {
                checkUser           : checkUser,
                getSelectedRol      : getSelectedRol
            };

            return service;
        };
    }
})();
