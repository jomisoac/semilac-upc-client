(function () {
    'use strict';

    angular
        .module('app.tutor.semilleroSolicitaEstudiante', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.semillero-solicita-estudiante', {
                url: '/semillero-solicita-estudiante',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/semillero-solicita-estudiante/semillero-solicita-estudiante.html',
                        controller: 'SemilleroSolicitaEstudiante as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR']
                }
            });
    }
})();
