(function () {
    'use strict';

    angular
        .module('app.director.registrarGrupo', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.registrar-grupo', {
                url: '/registrar-grupo',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/director/registrar-grupo/registrar-grupo.html',
                        controller: 'RegistrarGrupoController as vm'
                    }
                },
                data: {
                    onlyAccess: ['DIRECTOR']
                }
            });
    }
})();