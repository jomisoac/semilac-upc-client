(function ()
{
    'use strict';

    angular
        .module('app.sample2.registrar_director', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('app.registrar_director', {
                url    : '/registrar_director',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/sample2/registrar_director/registrar_director.html',
                        controller : 'SampleController as vm'
                    }
                },
                data   : {
                  onlyAccess: ['SUPER_ADMIN']
                }
            });

    }
})();
