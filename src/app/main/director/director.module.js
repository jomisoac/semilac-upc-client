(function () {
    'use strict';
    angular
        .module('app.director', [
            'app.director.requisitos',
            'app.director.abrir_convocatoria'
        ])
        .config(config);
    function config(msNavigationServiceProvider, authProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('director', {
            title : 'DIRECTOR',
            group : true,
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['DIRECTOR']);
            }
        });

        msNavigationServiceProvider.saveItem('director.gestionar_requisito', {
            title : 'Gestionar requisitos',
            icon  : 'icon-tile-four',
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['DIRECTOR']);
            }
        });

        msNavigationServiceProvider.saveItem('director.gestionar_requisito.registrar', {
            title: 'Registrar requisito',
            state: 'app.registrar_requisito',
            hidden: function(){
                return authProvider.checkUser(['DIRECTOR']);
            }
        });
        console.log('director '+ authProvider.checkUser(['DIRECTOR']))

        msNavigationServiceProvider.saveItem('director.abrir_convocatoria', {
            title: 'Abrir convocatoria',
            icon: 'icon-tile-four',
            state: 'app.abrir_convocatoria',
            /*stateParams: {
             'param1': 'page'
             },*/
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['DIRECTOR']);
            }
        });
    }
})();