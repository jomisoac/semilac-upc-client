/**
 * Created by Jose Soto
 * on 24/05/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.estudiante.registrarProyecto')
        .controller('RegistrarProyectoController', RegistrarProyectoController);

    function RegistrarProyectoController($mdDialog) {
        var vm = this;

        vm.showCompaneros = function (ev) {
            //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
            var useFullScreen = false;
            $mdDialog.show({
                controller: DialogEstudiantesController,
                controllerAs: 'vm',
                templateUrl: 'app/main/estudiante/registrar-proyecto/dialog-estudiantes.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
                .then(function (answer) {
                    vm.grupo.tutor_id = answer.id;
                    vm.grupo.lider = answer.nombres + " " + answer.apellidos;
                    vm.status = 'You said the information was "' + answer + '".';
                }, function () {
                    vm.status = 'You cancelled the dialog.';
                });
        };
    }
})();
