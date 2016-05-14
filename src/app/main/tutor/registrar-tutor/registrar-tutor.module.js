(function () {
    'use strict';

    angular
        .module('app.tutor.registrarTutor', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.registrar_tutor', {
                url: '/registrar-tutor',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/registrar-tutor/registrar-tutor.html',
                        controller: 'RegistrarTutorController as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR', 'SUPER_ADMIN']
                }
            });
    }
})();
