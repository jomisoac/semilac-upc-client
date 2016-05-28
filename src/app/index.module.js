(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [
            // Core
            'app.core',

            //commons
            //jwt
            'angular-jwt',
            //restangular
            'restangular',
            // material datapickper
            'mdPickers',
            //end commons
            // Navigation
            'app.navigation',
            // Toolbar
            'app.toolbar',
            //autenticacion
            'app.pages.autenticacion',
            'app.pages.registrarse',
            //consultas publicas
            'app.pages.consultas-publicas',
            //superadmin
            'app.superadmin',
            //director
            'app.director',
             // tuto
            'app.tutor',
            //estudiante
            'app.estudiante',
            //datatables
            'datatables',
            'datatables.bootstrap',
            'datatables.buttons',
        ]);
})();
