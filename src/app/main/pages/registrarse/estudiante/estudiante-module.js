/**
 * Created by Jose Soto
 * on 16/05/2016.
 */
(function () {
    'use strict';
    
    angular
        .module('app.pages.registrarse.estudiante', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.registrarse-estudiante', {
                url: '/registrarse-estudiante',
                views    : {
                    'main@'                          : {
                        templateUrl: 'app/core/layouts/content-only.html',
                        controller : 'MainController as vm'
                    },
                    'content@app.registrarse-estudiante': {
                        templateUrl: 'app/main/pages/registrarse/estudiante/registrarse-estudiante.html',
                        controller: 'RegistrarseEstudianteController as vm'
                    }
                },
                data  : {
                    noRequiresLogin: true
                }
            });
    }
})();
