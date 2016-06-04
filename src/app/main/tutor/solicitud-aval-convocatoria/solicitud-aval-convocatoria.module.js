(function () {
    'use strict';

    angular
        .module('app.tutor.solicitudAvalConvocatoria', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.solicitud-aval-convocatoria', {
                url: '/solicitud-aval-convocatoria',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/solicitud-aval-convocatoria/solicitud-aval-convocatoria.html',
                        controller: 'SolicitudAvalConvocatoriaController as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR']
                }
            });
    }
})();



