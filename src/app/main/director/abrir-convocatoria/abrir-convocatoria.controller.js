(function () {
    'use strict';

    angular
        .module('app.director.abrirConvocatoria')
        .controller('AbrirConvocatoriaController', AbrirConvocatoriaController);


    /** @ngInject */
    function AbrirConvocatoriaController() {
        var vm = this;
        vm.convocatoria = {};
        var convovatorias = [];


        vm.guardar = guardar;

        function guardar() {
            if (convovatorias.push(vm.convocatoria)) {
                alert('se registro la convocatoria correctamente');
                vm.convocatoria = {};
                console.log(convovatorias);
            } else {
                alert('no se pudo registrar la convocatoria');
            }
        }
    }
})();