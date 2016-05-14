(function () {
    'use strict';

    angular
        .module('app.director.abrirConvocatoria', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.abrir_convocatoria', {
                url: '/abrir-convocatoria',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/director/abrir-convocatoria/abrir-convocatoria.html',
                        controller: 'AbrirConvocatoriaController as vm'
                    }
                },
                data: {
                    onlyAccess: ['DIRECTOR']
                }
            });
    }
})();
