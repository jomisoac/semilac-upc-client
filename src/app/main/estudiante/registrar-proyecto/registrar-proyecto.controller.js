/**
 * Created by Jose Soto
 * on 24/05/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.estudiante.registrarProyecto')
        .controller('RegistrarProyectoController', RegistrarProyectoController);

    function RegistrarProyectoController($mdDialog, Restangular,  $mdToast, authService) {
        var vm = this;
        var proyectos = Restangular.all('/estudiantes/nuevo_proyecto');
        vm.companero = {};
        vm.proyectoN  = {};

        vm.guardar = guardar;
        vm.showCompaneros = showCompaneros;
        function showCompaneros(ev) {
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
                    vm.companero.companero_id = answer.id;
                    vm.nombres = answer.nombres + " " + answer.apellidos;
                }, function () {
                    vm.status = 'You cancelled the dialog.';
                });
        };

        function guardar(form) {
            vm.proyectoN.estudiates = {
                mi_id : authService.currentUser().datos.id,
                companero_id : vm.companero.companero_id

            }

            proyectos.post(vm.proyectoN).then(function (d) {
                if(d.ok != 'false'){
                    message(d);
                    limpiar(form);
                }else{
                    message(d.mensaje);
                }
            }), function (error) {
                var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
                message(mensajeError);
            }
        }

        function limpiar(form) {
            vm.proyectoN = {};
            vm.companero = {};
            vm.nombres = '';
            if(form){
                form.$setPristine();
                form.$setUntouched();
            }
        }

        function message(body) {
            $mdToast.show({
                template : '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position : 'top center',
                parent   : '#content'
            });
        }
    }
})();
