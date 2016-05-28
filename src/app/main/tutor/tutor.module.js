(function () {
    'use strict';

    angular
        .module('app.tutor', [
            'app.tutor.registrarSemillero',
            'app.tutor.registrarInvitacion'
        ])
        .config(config);

    function config(msNavigationServiceProvider, authProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('tutor', {
            title: 'TUTOR',
            group: true,
            weight: 1,
            hidden: function () {
                return authProvider.checkUser(['TUTOR']);
            }
        });

        msNavigationServiceProvider.saveItem('tutor.registrar-semillero', {
            title: 'Semilleros de investigacion',
            icon: 'icon-tile-four',
            state: 'app.registrar_semillero',
            weight: 1,
            hidden: function () {
                return authProvider.checkUser(['TUTOR']);
            }
        });

        // msNavigationServiceProvider.saveItem('tutor.registrar-invitacion', {
        //     title: 'Invitaciones',
        //     icon: 'icon-tile-four',
        //     state: 'app.registrar_invitacion',
        //     weight: 1,
        //     hidden: function(){
        //         return authProvider.checkUser(['TUTOR']);
        //     }
        // });
    }
})();