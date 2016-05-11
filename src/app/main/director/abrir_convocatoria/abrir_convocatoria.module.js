(function ()
{
    'use strict';

    angular
        .module('app.abrir_convocatoria', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.abrir_convocatoria', {
                url    : '/abrir_convocatoria',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/director/abrir_convocatoria/abrir_convocatoria.html',
                        controller : 'AbrirConvocatoriaController as vm'
                    }
                },
                data   : {
                    onlyAccess: ['SUPER_ADMIN']
                }
            });


        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'ABRIR CONVOCATORIA',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.abrir_convocatoria', {
            title    : 'Abrir convocatoria',
            icon     : 'icon-tile-four',
            state    : 'app.abrir_convocatoria',
            /*stateParams: {
             'param1': 'page'
             },*/
            weight   : 1    
        });
    }
})();
