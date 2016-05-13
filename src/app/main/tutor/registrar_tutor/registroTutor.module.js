(function () {
    'use strict';

    angular
        .module('app.tutor.registrar_tutor', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider) {
        // State
        $stateProvider
            .state('app.registrar_tutor', {
                url: '/registrar_tutor',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/tutor/registrar_tutor/registroTutor.html',
                        controller: 'TutorController as vm'
                    }
                },
                data: {
                    onlyAccess: ['TUTOR', 'SUPER_ADMIN']
                }
            });


        /* // Navigation
         msNavigationServiceProvider.saveItem('fuse', {
         title : 'EJEMPLO',
         group : true,
         weight: 1
         });

         msNavigationServiceProvider.saveItem('fuse.tutor', {
         title    : 'Registro de Tutor',
         icon     : 'icon-tile-four',
         state    : 'app.tutor',
         /*stateParams: {
         'param1': 'page'
         },
         weight   : 1
         });*/
    }
})();
