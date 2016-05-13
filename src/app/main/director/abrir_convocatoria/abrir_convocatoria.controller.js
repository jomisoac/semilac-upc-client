(function () {
    'use strict';

    angular
        .module('app.director.abrir_convocatoria')
        .controller('abrirConvocatoriaController', abrirConvocatoriaController);


    /** @ngInject */
    function abrirConvocatoriaController() {
        var vm = this;
        vm.convocatoria = {};
        var convovatorias = [];


        vm.guardar = guardar;

        function guardar() {
            console.log()
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