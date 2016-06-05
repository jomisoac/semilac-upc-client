(function () {
    'use strict';

    angular
        .module('app.estudiante.aceptarSolicitudesSemilleros', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.aceptar_solicitudes_semilleros', {
                url: '/estudiantes/aceptar-solicitudes-semilleros',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/estudiante/aceptar-solicitudes-semilleros/aceptar-solicitudes-semilleros.html',
                        controller: 'AceptarSolicitudesSemilleros as vm'
                    }
                },
                data: {
                    onlyAccess: ['ESTUDIANTE']
                }
            });
    }
})();
