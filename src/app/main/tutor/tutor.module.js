(function () {
    'use strict';

    angular
        .module('app.tutor', [
            'app.tutor.registrarTutor'
        ])
        .config(config);

    function config(msNavigationServiceProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('uni', {
            title: 'UNIVERSIDAD POPULAR DEL CESAR',
            group: true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('uni.gestionar-tutor', {
            title: 'Gestionar tutor',
            icon: 'icon-tile-four',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('uni.gestionar-tutor.registrar', {
            title: 'Registrar tutor',
            state: 'app.registrar-tutor'
        });

        msNavigationServiceProvider.saveItem('uni.gestionar-tutor.consultar', {
            title: 'Consultar tutor',
            state: ''
        });
    }
})();