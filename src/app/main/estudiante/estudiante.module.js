(function () {
    'use strict';
    angular
        .module('app.estudiante', [
            'app.estudiante.enviarSolicitudSemillero'
        ])
        .config(config);
    function config(msNavigationServiceProvider, authProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('estudiante', {
            title : 'ESTUDIANTE',
            group : true,
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['ESTUDIANTE']);
            }
        });

        msNavigationServiceProvider.saveItem('estudiante.enviar-solicitud-semillero', {
            title: 'Enviar Solicitud ',
            icon: 'icon-tile-four',
            state: 'app.enviar_solicitud_semillero',
            /*stateParams: {
             'param1': 'page'
             },*/
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['ESTUDIANTE']);
            }
        });
    }
})();