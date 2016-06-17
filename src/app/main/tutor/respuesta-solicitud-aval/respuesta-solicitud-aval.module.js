(function () {
    'use strict';

    angular
        .module('app.tutor.RespuestaSolicitudAval', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.respuesta-solicitud-aval', {
                url: '/respuesta-solicitud-aval',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/respuesta-solicitud-aval/respuesta-solicitud-aval.html',
                        controller: 'RespuestaSolicitudAval as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR']
                }
            });
    }
})();
