(function () {
    'use strict';

    angular
        .module('app.tutor', [
            'app.tutor.registrarTutor',
            'app.tutor.registrarSemillero'
        ])
        .config(config);

    function config(msNavigationServiceProvider, authProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('tutor', {
            title: 'TUTOR',
            group: true,
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['TUTOR']);
            }
        });
        msNavigationServiceProvider.saveItem('tutor.gestionar_tutor', {
            title: 'Gestionar tutor',
            icon: 'icon-tile-four',
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['TUTOR']);
            }
        });

        msNavigationServiceProvider.saveItem('tutor.gestionar_tutor.registrar', {
            title: 'Registrar tutor',
            state: 'app.registrar_tutor',
            hidden: function(){
                return authProvider.checkUser(['TUTOR']);
            }
        });

        msNavigationServiceProvider.saveItem('tutor.gestionar_tutor.consultar', {
            title: 'Consultar tutor',
            state: '',
            hidden: function(){
                return authProvider.checkUser(['TUTOR']);
            }
        });
        
        msNavigationServiceProvider.saveItem('tutor.registrar-semillero', {
            title: 'Semilleros de investigacion',
            icon: 'icon-tile-four',
            state: 'app.registrar_semillero',
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['TUTOR']);
            }
        });
    }
})();