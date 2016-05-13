(function ()
{
    'use strict';

    angular
        .module('app.director.requisitos', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
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

