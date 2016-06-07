(function() {
    'use strict';

    angular
        .module('app.tutor.registrarLineaInvestigacion')
        .controller('RegistrarLineaInvestigacionController', RegistrarLineaInvestigacionController);

    /** @ngInject */
    function RegistrarLineaInvestigacionController(Restangular, $mdToast, authService) {
        //console.log("RegistrarInvitacionController");
        var vm = this;
        var lineas = Restangular.all('/lineas');
        var grupos = Restangular.all('/tutores/' + authService.currentUser().datos.id + '/grupo').getList().$object;
        vm.guardar = guardar;
        vm.limpiar = limpiar;

        init();

        function init() {
            vm.linea = {};
            vm.lineas = [];
            cargarGrupos();
        }

        function cargarGrupos() {
            vm.grupos = grupos;
        }

        function guardar(form) {
            lineas.post(vm.linea).then(function(d) {
                    message(d);
                    limpiar(form);
                }),
                function(error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';
                    message(mensajeError);
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

        function limpiar(form) {
            vm.linea = {};
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
        }
    }
})();