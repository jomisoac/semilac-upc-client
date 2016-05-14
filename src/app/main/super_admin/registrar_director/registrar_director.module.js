(function ()
{
    'use strict';

    angular
        .module('app.superadmin.registrarDirector', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('app.superadmin_registrar_director', {
                url    : '/registrar_director',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/super_admin/registrar_director/registrar_director.html',
                        controller : 'registrarDirectorController as vm'
                    }
                },
                data    :{
                    onlyAcces : ['SUPER_ADMIN']
                }
            });
    }
})();
