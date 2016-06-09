(function () {
    'use strict';

    angular
        .module('app.tutor.aceptarSolicitudesEstudiantesSemilleros', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.aceptar-solicitudes-estudiantes-semilleros', {
                url: '/solicitudes-estudiantes-semilleros',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/aceptar-solicitudes-estudiantes-semilleros/aceptar-solicitudes-estudiantes-semilleros.html',
                        controller: 'AceptarSolicitudesEstudiantesSemilleros as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR']
                }
            });
    }
})();
