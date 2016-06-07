(function() {
    'use strict';

    angular
        .module('app.director.consultar_semilleros', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.consultar_semilleros', {
                url: '/consultar-semilleros',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/director/semilleros-solicitando-aval/semilleros-solicitando-aval.html',
                        controller: 'ConsultarSemilleros as vm'
                    }
                },
                data: {
                    onlyAccess: ['DIRECTOR']
                }
            });
    }
})();