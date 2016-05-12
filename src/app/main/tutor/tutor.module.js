(function () {
    'use strict';

    angular
        .module('app.tutor', [
            'app.tutor.registrar_tutor'
        ])
        .config(config);

    function config(msNavigationServiceProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('uni', {
            title: 'UNIVERSIDAD POPULAR DEL CESAR',
            group: true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('uni.gestionar_tutor', {
            title: 'Gestionar tutor',
            icon: 'icon-tile-four',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('uni.gestionar_tutor.registrar', {
            title: 'Registrar tutor',
            state: 'app.registrar_tutor'
        });

        msNavigationServiceProvider.saveItem('uni.gestionar_tutor.consultar', {
            title: 'Consultar tutor',
            state: ''
        });
    }
})();