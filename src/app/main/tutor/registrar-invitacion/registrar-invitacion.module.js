(function () {
    'use strict';

    angular
        .module('app.tutor.registrarInvitacion', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider
            .state('app.registrar_invitacion', {
                url: '/registrar-invitacion',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/registrar-invitacion/registrar-invitacion.html',
                        controller: 'RegistrarInvitacionController as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR', 'SUPER_ADMIN']
                }
            });
    }
})();

