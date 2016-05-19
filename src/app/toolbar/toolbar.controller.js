(function ()
{
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $state, authService, $mdSidenav, $mdToast)
    {
        var vm = this;

        // Data
        $rootScope.global = {
            search: ''
        };

        vm.bodyEl = angular.element('body');
        //
        vm.logout = logout;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
        vm.toggleSidenav = toggleSidenav;
        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            loadUser();
        }

        function loadUser(){
            var usuario = authService.currentUser();
            if(usuario) {
                vm.userId = usuario.usuario_id;
                vm.userNombre = usuario.email;
                vm.userRol = authService.getSelectedRol();
                if(usuario.datos){
                    vm.fullName = usuario.datos.nombres + ' ' + usuario.datos.apellidos;
                    vm.datosId = usuario.datos.id;
                }
            }
        };
        /**
         * Logout Function
         */
        function logout()
        {
            sessionStorage.clear();
            $state.go('app.pages_autenticacion_login');
        }

        /**
         * Change Language
         */

        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu()
        {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

    }

})();
