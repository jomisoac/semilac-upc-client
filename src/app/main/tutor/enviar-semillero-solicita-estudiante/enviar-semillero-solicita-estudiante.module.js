(function () {
    'use strict';

    angular
        .module('app.tutor.enviarSemilleroSolicitaEstudiante', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.enviar-semillero-solicita-estudiante', {
                url: '/semillero-solicita-estudiante',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/enviar-semillero-solicita-estudiante/enviar-semillero-solicita-estudiante.html',
                        controller: 'EnviarSemilleroSolicitaEstudiante as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR']
                }
            });
    }
})();
