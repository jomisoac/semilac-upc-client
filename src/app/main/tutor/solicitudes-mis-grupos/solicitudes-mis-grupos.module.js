(function () {
    'use strict';

    angular
        .module('app.tutor.SolicitudesMisGrupos', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.solicitudes-mis-grupos', {
                url: '/solicitudes-mis-grupos',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/solicitudes-mis-grupos/solicitudes-mis-grupos.html',
                        controller: 'SolicitudesMisGrupos as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR']
                }
            });
    }
})();
