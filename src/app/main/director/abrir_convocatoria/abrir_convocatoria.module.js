(function () {
    'use strict';

    angular
        .module('app.director.abrir_convocatoria', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.abrir_convocatoria', {
                url: '/abrir_convocatoria',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/director/abrir_convocatoria/abrir_convocatoria.html',
                        controller: 'abrirConvocatoriaController as vm'
                    }
                },
                data: {
                    onlyAccess: ['DIRECTOR']
                }
            });
    }
})();
