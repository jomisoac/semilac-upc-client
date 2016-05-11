(function ()
{
    'use strict';

    angular
        .module('app.abrir_convocatoria')
        .controller('AbrirConvocatoriaController', AbrirConvocatoriaController);


    /** @ngInject */
    function AbrirConvocatoriaController()
    {
        var vm = this;
        vm.convocatoria={};
        var convocatorias = Restangular.all('/convocatorias');
    }
})();