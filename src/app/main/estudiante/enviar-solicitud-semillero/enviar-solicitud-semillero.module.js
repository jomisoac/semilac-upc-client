(function () {
    'use strict';

    angular
        .module('app.estudiante.enviarSolicitudSemillero', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.enviar_solicitud_semillero', {
                url: '/estudiantes/solicitudes-semilleros',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/estudiante/enviar-solicitud-semillero/enviar-solicitud-semillero.html',
                        controller: 'EnviarSolicitudSemillero as vm'
                    }
                },
                data: {
                    onlyAccess: ['ESTUDIANTE']
                }
            });
    }
})();
