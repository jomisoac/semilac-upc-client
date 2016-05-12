(function ()
{
    'use strict';

    angular
        .module('app.director.requisito.registrar_requisito', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.registrar_requisito', {
                url    : '/registrar_requisito',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/director/requisito/registrar_requisito/registrar_requisito.html',
                        controller : 'RequisitoController as vm'
                    }
                },
                data   : {
                  onlyAccess: ['DIRECTOR']
                }
            });

    }
})();

