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
            //jwt
            'angular-jwt',
            //restangular
            'restangular',
            // Navigation
            'app.navigation',
            // Toolbar
            'app.toolbar',
            // Sample
            'app.sample',
            //autenticacion
            'app.pages.autenticacion',
            'app.sample2',
            //requisito
            'app.director.requisito',
            'app.abrir_convocatoria',
            'app.tutor'

        ]);
})();
