(function ()
{
    'use strict';

    angular
        .module('app.pages.autenticacion.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.pages_autenticacion_login', {
            url      : '/autenticacion/login',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_autenticacion_login': {
                    templateUrl: 'app/main/pages/autenticacion/login/login.html',
                    controller : 'LoginController as vm'
                }
            },
            data  : {
              noRequiresLogin: true
            },
            bodyClass: 'login'
        });

        // Navigation
        // msNavigationServiceProvider.saveItem('pages.autenticacion.login', {
        //     title : 'Login',
        //     state : 'app.pages_autenticacion_login',
        //     weight: 2
        // });
    }

})();
