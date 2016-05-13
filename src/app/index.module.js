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
            // ejemplos
            // 'app.sample',
            // 'app.sample2',
            //autenticacion
            'app.pages.autenticacion',
            //director
            'app.director',
            // tuto
            'app.tutor'

        ]);
})();
