(function ()
{
    'use strict';

    angular
            .module('app.requisitos.registrar')
            .controller('RequisitoController', RequisitoController);

    /** @ngInject */
    function RequisitoController(Restangular, $mdToast) {
        var vm = this;
        vm.requisito = {};
        var requisito = Restangular.all('/requisitos');

        vm.guardar = guardar;
        vm.limpiar = limpiar;

        function guardar() {
            requisito.post(vm.requisito).then(function (d) {
                message(d);
                vm.requisito = '';
            }), function (error) {
                var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
                message(mensajeError);
            }
        };

        function limpiar() {
            vm.requisito = '';
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


