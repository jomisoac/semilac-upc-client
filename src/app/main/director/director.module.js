(function () {
    'use strict';
    angular
        .module('app.director', [
            'app.director.requisitos',
            'app.director.abrirConvocatoria',
            'app.director.registrarGrupo'
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

        msNavigationServiceProvider.saveItem('director.abrir-convocatoria', {
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

        msNavigationServiceProvider.saveItem('director.gestionar-grupo', {
            title : 'Gestionar grupos',
            icon  : 'icon-tile-four',
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['DIRECTOR']);
            }
        });

        msNavigationServiceProvider.saveItem('director.gestionar-grupo.registrar', {
            title: 'Registrar grupo',
            state: 'app.registrar-grupo',
            hidden: function(){
                return authProvider.checkUser(['DIRECTOR']);
            }
        });
    }
})();