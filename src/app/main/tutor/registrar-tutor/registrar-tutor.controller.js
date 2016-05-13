(function () {
    'use strict';

    angular
        .module('app.tutor.registrarTutor')
        .controller('RegistrarTutorController', RegistrarTutorController);

    /** @ngInject */
    function RegistrarTutorController() {
        var vm = this;
        vm.tutor = {};
        var tutores = [];

        vm.Aceptar = Aceptar;
        function Aceptar() {
            console.log()
            if (tutores.push(vm.tutor)) {
                alert('Se registro el tutor correctamente');
                vm.tutor = {};
                console.log(tutores);
            } else {
                alert('No se pudo registrar el tutor');
            }
        }
    }
})();
