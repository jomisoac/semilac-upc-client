(function () {
    'use strict';

    angular
        .module('app.superadmin.registrarDirector')
        .controller('registrarDirectorController', registrarDirectorController);

    function registrarDirectorController(Restangular, $mdToast, $timeout) {
        var vm = this;
        vm.director = {};
        var director = Restangular.all('/director');

        vm.fechaIngresoMax = new Date();
        vm.guardar = guardar;
        vm.limpiar = limpiar;

        function guardar(form) {
            director.post(vm.director).then(function (d) {
                if (d.ok != 'false') {
                    message(d);
                    limpiar(form);
                    //$timeout(atras, 4000)
                } else {
                    message(d.mensaje);
                }
            }), function (error) {
                var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
                message(mensajeError);
            }
        };

        function limpiar(form) {
            vm.director.usuario = {};
            vm.director = {};
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
        }

        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }
    }
})();
