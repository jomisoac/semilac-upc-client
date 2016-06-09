(function () {
    'use strict';

    angular
        .module('app.tutor', [
            'app.tutor.registrarSemillero',
            'app.tutor.semilleroSolicitaEstudiante',
            'app.tutor.registrarLineaInvestigacion',
            'app.tutor.solicitudAvalConvocatoria',
            'app.tutor.SolicitudesMisGrupos',
            'app.tutor.aceptarSolicitudesEstudiantesSemilleros'
        ])
        .config(config);

    function config(msNavigationServiceProvider, authProvider) {
        // Navigation
        msNavigationServiceProvider.saveItem('tutor', {
            title: 'TUTOR',
            group: true,
            weight: 1,
            hidden: function () {
                return authProvider.checkUser(['TUTOR']);
            }
        });

        msNavigationServiceProvider.saveItem('tutor.registrar-semillero', {
            title: 'Semilleros de investigacion',
            icon: 'icon-tile-four',
            state: 'app.registrar_semillero',
            weight: 1,
            hidden: function () {
                return authProvider.checkUser(['TUTOR']);
            }
        });

         msNavigationServiceProvider.saveItem('tutor.semillero-solicita-estudiante', {
             title: 'Enviar solicitud de semillero',
             icon: 'icon-tile-four',
             state: 'app.semillero-solicita-estudiante',
             weight: 1,
             hidden: function(){
                 return authProvider.checkUser(['TUTOR']);
          }
         });

          msNavigationServiceProvider.saveItem('tutor.linea-investigacion', {
             title: 'Lineas de investigación',
             icon: 'icon-tile-four',
             state: 'app.registrar_linea_investigacion',
             weight: 1,
             hidden: function(){
                 return authProvider.checkUser(['TUTOR']);
          }
         });

        msNavigationServiceProvider.saveItem('tutor.aceptar-solicitudes-estudiantes-semilleros', {
            icon: 'icon-tile-four',
            state: 'app.aceptar-solicitudes-estudiantes-semilleros',
            weight: 1,
            hidden: function(){
                return authProvider.checkUser(['TUTOR']);
            }
        });
         
          msNavigationServiceProvider.saveItem('tutor.solicitud-aval-convocatoria', {
             title: 'Convocatorias',
             icon: 'icon-tile-four',
             state: 'app.solicitud_aval_convocatoria',
             weight: 1,
             hidden: function(){
                 return authProvider.checkUser(['TUTOR']);
          }
         });
          msNavigationServiceProvider.saveItem('tutor.solicitudes-mis-grupos', {
             title: 'Mis grupos de investigación',
             icon: 'icon-tile-four',
             weight: 1,
             hidden: function(){
                 return authProvider.checkUser(['TUTOR']);
          }
         }); 
         
          msNavigationServiceProvider.saveItem('tutor.solicitudes-mis-grupos.solicitudes', {
             title: 'Solicitudes',
             icon: 'icon-tile-four',
             state: 'app.solicitudes-mis-grupos',
             weight: 1,
             hidden: function(){
                 return authProvider.checkUser(['TUTOR']);
          }
         });                  
    }
})();
