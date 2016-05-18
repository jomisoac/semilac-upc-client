(function () {
    'use strict';

    angular
        .module('app.pages.autenticacion.perfil', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.perfil_usuario', {
                url: '/perfil/:id',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/autenticacion/perfil/perfil.html',
                        controller: 'perfilController',
                        controllerAs: 'vm'
                    }
                },
            });
    }
})();
