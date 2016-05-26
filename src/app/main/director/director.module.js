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
            title: 'DIRECTOR',
            group: true,
            weight: 1,
            hidden: function () {
                return authProvider.checkUser(['DIRECTOR']);
            }
        });

        msNavigationServiceProvider.saveItem('director.gestionar_requisitos', {
            title: 'Gestionar requisitos',
            state: 'app.registrar_requisito',
            icon: 'icon-tile-four',
            weight: 1,
            hidden: function () {
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
            hidden: function () {
                return authProvider.checkUser(['DIRECTOR']);
            }
        });

        msNavigationServiceProvider.saveItem('director.registrar-grupo', {
            title: 'Registrar grupo de investigación',
            state: 'app.registrar-grupo',
            icon: 'icon-tile-four',
            weight: 1,
            hidden: function () {
                return authProvider.checkUser(['DIRECTOR']);
            }
        });
    }
})();