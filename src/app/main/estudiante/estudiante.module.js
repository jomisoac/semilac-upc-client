/**
 * Created by Jose Soto
 * on 24/05/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.estudiante', [
            'app.estudiante.registrarProyecto',
            'app.estudiante.enviarSolicitudSemillero',
            'app.estudiante.aceptarSolicitudesSemilleros'
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

        msNavigationServiceProvider.saveItem('estudiante.registrar_proyecto', {
            title : 'Registrar nuevo proyecto',
            state : 'app.registrar_proyecto',
            weight : 1,
            icon  : 'icon-tile-four',
            hidden: function () {
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
        msNavigationServiceProvider.saveItem('estudiante.aceptar-solicitudes-semilleros', {
            title: 'Solicitudes',
            icon: 'icon-tile-four',
            state: 'app.aceptar_solicitudes_semilleros',
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