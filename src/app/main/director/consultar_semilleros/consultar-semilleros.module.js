(function () {
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
                        templateUrl: 'app/main/director/consultar_semilleros/consultar-semilleros.html',
                        controller: 'ConsultarSemilleros as vm'
                    }
                },
                data: {
                    onlyAccess: ['DIRECTOR']
                }
            });
    }
})();
