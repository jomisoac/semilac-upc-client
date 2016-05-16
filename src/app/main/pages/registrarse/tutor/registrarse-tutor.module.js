(function () {
    'use strict';

    angular
        .module('app.pages.registrarse.tutor', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.registrarse-tutor', {
                url: '/registrarse-tutor',
                views    : {
                    'main@'                          : {
                        templateUrl: 'app/core/layouts/content-only.html',
                        controller : 'MainController as vm'
                    },
                    'content@app.registrarse-tutor': {
                        templateUrl: 'app/main/pages/registrarse/tutor/registrarse-tutor.html',
                        controller: 'RegistrarseTutorController as vm'
                    }
                },
                data  : {
                    noRequiresLogin: true
                }
            });
    }
})();
