(function () {
    'use strict';
    
    angular
        .module('app.director.requisito', [
            'app.director.requisito.registrar_requisito'
        ])
        .config(config);

    function config(msNavigationServiceProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('uni', {
            title : 'UNIVERSIDAD POPULAR DEL CESAR',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('uni.gestionar_requisito', {
            title : 'Gestionar requisito',
            icon  : 'icon-tile-four',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('uni.gestionar_requisito.registrar', {
            title: 'Registrar requisito',
            state: 'app.registrar_requisito'
        });    
    }
})();


