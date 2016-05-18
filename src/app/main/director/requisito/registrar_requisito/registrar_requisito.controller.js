(function () {
    'use strict';

    angular
        .module('app.requisitos.registrar')
        .controller('RequisitoController', RequisitoController);

    /** @ngInject */
    function RequisitoController(Restangular, $mdToast, $mdDialog) {
        var vm = this;
        var requisitos = Restangular.all('/requisitos');

        vm.guardar = guardar;
        vm.limpiar = limpiar;
        vm.modalModificar = modalModificar;
        vm.elminar = eliminar;

        init();
        function init() {
            vm.requisito = {};
            vm.requisitos = [];
            cargarRequisitos();
        }

        function cargarRequisitos() {
            vm.requisitos = requisitos.getList().$object;
        }

        function guardar() {
            requisitos.post(vm.requisito).then(function (d) {
                message(d);
                vm.requisito = '';
                init();
            }), function (error) {
                var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
                message(mensajeError);
            }
        }

        function modalModificar($event, requisito) {
            $mdDialog.show({
                controller: angular.noop,
                controllerAs: 'vm',
                bindToController: true,
                templateUrl: 'app/main/director/requisito/registrar_requisito/modal_modificar_requisito.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: true,
                locals: {
                    requisito : requisito,
                    cancelar : function(){
                        cargarRequisitos();
                        $mdDialog.cancel();
                    },
                    modificar : function(requisito) {
                        var r = Restangular.one('requisitos',requisito.id);
                        r = requisito;
                        r.put().then(function (d) {
                            message(d);
                            vm.requisito = '';
                            init();
                            $mdDialog.cancel();
                        }), function (error) {
                            var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
                            message(mensajeError);
                        }
                    }
                }
            });
        }

        function eliminar($event, requisito_id) {
            var confirm = $mdDialog.confirm()
                .title('Seguro quieres eliminar este requisito?')
                .textContent('Sera eliminado permanentemente.')
                .ariaLabel('Eliminar')
                .targetEvent($event)
                .clickOutsideToClose(true)
                .parent(angular.element(document.body))
                .ok('Aceptar')
                .cancel('Cancelar');
            $mdDialog.show(confirm).then(function() {
                Restangular.one('requisitos', requisito_id).remove().then(function (d) {
                    message(d);
                    init();
                    $mdDialog.cancel();
                }), function (error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
                    message(mensajeError);
                };
            });
        };

        function limpiar() {
            vm.requisito = '';
        }

        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 4000,
                position: 'top right',
                parent: '#content'
            });
        }
    }
})();


