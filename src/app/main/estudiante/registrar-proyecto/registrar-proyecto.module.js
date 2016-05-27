/**
 * Created by Jose Soto
 * on 24/05/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.estudiante.registrarProyecto', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.registrar_proyecto', {
                url: '/estudiante/registrar-proyecto',
                views: {
                    'content@app': {
                        templateUrl : 'app/main/estudiante/registrar-proyecto/registrar-proyecto.html',
                        controller : 'RegistrarProyectoController',
                        controllerAs : 'vm'
                    }
                },
                data: {
                    onlyAccess: ['ESTUDIANTE']
                }
            });
    }
})();
