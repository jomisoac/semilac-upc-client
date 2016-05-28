(function ()
{
    'use strict';

    angular
        .module('app.pages.consultas-publicas.consultar-requisitos', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('app.consultar-requisitos', {
                url    : '/consultar-requisitos',
                views    : {
                    'main@'                          : {
                        templateUrl: 'app/core/layouts/content-only.html',
                        controller : 'MainController as vm'
                    },
                    'content@app.consultar-requisitos': {
                        templateUrl: 'app/main/pages/consultas-publicas/consultar-requisitos/consultar-requisitos.html',
                        controller: 'ConsultarRequisitosController as vm'
                    }
                },
                data  : {
                    noRequiresLogin: true
                }
            });

    }
})();

