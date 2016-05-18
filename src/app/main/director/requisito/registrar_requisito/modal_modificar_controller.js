/**
 * Created by Jose Soto
 * on 18/05/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.requisitos.registrar')
        .controller('modificarRequisitoController', modificarRequisitoController);

    function modificarRequisitoController($mdDialog, requisito) {
        var vm = this;
        vm.cancelar = cancelar;
        vm.requisito = requisito;

        function cancelar() {
            $mdDialog.cancel();
        }

    }
})();
