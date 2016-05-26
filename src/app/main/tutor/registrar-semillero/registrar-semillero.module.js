(function () {
    'use strict';

    angular
            .module('app.tutor.registrarSemillero', [])
            .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
                .state('app.registrar_semillero', {
                    url: '/registrar-semillero',
                    views: {
                        'content@app': {
                            templateUrl: 'app/main/tutor/registrar-semillero/registrar-semillero.html',
                            controller: 'RegistrarSemilleroController as vm'
                        }
                    },
                    data: {
                        onlyAccess: ['TUTOR', 'SUPER_ADMIN']
                    }
                });
    }
})();

