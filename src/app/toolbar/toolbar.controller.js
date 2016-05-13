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
            if(authService.currentUser()) {
                vm.userNombre = authService.currentUser().email
                vm.userRol = authService.getSelectedRol().selectedRol;
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
