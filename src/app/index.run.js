(function ()
{
    'use strict';

    angular
        .module('fuse')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state, authService, jwtHelper)
    {
        // Activate loading indicator
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function (e, to)
        {
            $rootScope.loadingProgress = true;
            if (!to.data || !to.data.noRequiresLogin || to.data.noRequiresLogin == false) {
                var jwt = sessionStorage.getItem('jwt');
                if (!jwt || jwtHelper.isTokenExpired(jwt)) {
                    e.preventDefault();
                    $state.go('app.pages_autenticacion_login');
                }else if(to.data && to.data.onlyAccess){
                    var rol = authService.getSelectedRol();
                    // console.log('o: '+window.location.hash+'|d: '+to.url+'user_rol: '+rol);
                    if (!(!to.data.onlyAccess || to.data.onlyAccess.indexOf(rol) > -1 || to.data.onlyAccess.toLowerCase == 'all')) {
                        e.preventDefault();
                        $state.go('app.pages_autenticacion_login');
                    }
                }
            }
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
        {
            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });
    }
})();
