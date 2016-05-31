(function () {
    'use strict';

    angular
        .module('app.tutor.registrarLineaInvestigacion', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.registrar_linea_investigacion', {
                url: '/linea-investigacion',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/linea-investigacion/registrar-linea-investigacion.html',
                        controller: 'RegistrarLineaInvestigacionController as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR', 'SUPER_ADMIN']
                }
            });
    }
})();


