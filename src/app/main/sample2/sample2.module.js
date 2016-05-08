(function () {
    'use strict';
    
    angular
        .module('app.sample2', [
            'app.sample2.registrar_director'
        ])
        .config(config);

    function config(msNavigationServiceProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('uni', {
            title : 'UNIVERSIDAD POPULAR DEL CESAR',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('uni.gestionar_director', {
            title : 'Gestionar director',
            icon  : 'icon-tile-four',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('uni.gestionar_director.registrar', {
            title: 'Registrar director',
            state: 'app.registrar_director'
        });

        msNavigationServiceProvider.saveItem('uni.gestionar_director.consultar', {
            title: 'Consultar director',
            state: ''
        });
    }
})();