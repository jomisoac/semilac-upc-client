(function ()
{
    'use strict';

    angular
        .module('app.pages.autenticacion.roles', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.pages_autenticacion_roles', {
            url      : '/autenticacion/roles',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_autenticacion_roles': {
                    templateUrl: 'app/main/pages/autenticacion/roles/roles.html',
                    controller : 'RolesController as vm'
                }
            },
            bodyClass: 'boards'
        });
    }

})();
