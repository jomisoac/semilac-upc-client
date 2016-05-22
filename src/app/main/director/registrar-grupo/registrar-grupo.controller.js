(function () {
    'use strict';

    angular
        .module('app.director.registrarGrupo')
        .controller('RegistrarGrupoController', RegistrarGrupoController);


    /** @ngInject */
    function RegistrarGrupoController(Restangular, $mdToast, $mdDialog, $mdMedia) {
        var vm = this;
        vm.grupo = {};
        vm.status = '  ';
        //vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        var grupo = Restangular.all('/grupo');

        vm.guardar = guardar;
        vm.limpiar = limpiar;

        function guardar() {
            vm.grupo.usuario_id = JSON.parse(sessionStorage.usuario).usuario_id;
            grupo.post(vm.grupo).then(
                function (d) {
                    message(d);
                    vm.grupo = {};
                },
                function (error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';
                    message(mensajeError);
                }
            );
        }

        function limpiar() {
            vm.director = {};
        }

        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }
        vm.showAdvanced = function (ev) {
            //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
            var useFullScreen = false;
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'app/main/director/registrar-grupo/dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
                .then(function (answer) {
                    console.log(answer);
                    vm.grupo.lider = answer;
                    vm.status = 'You said the information was "' + answer + '".';
                }, function () {
                    vm.status = 'You cancelled the dialog.';
                });
        };
    }
})();