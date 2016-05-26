(function () {
    'use strict';

    angular
            .module('app.tutor.registrarSemillero')
            .controller('RegistrarSemilleroController', RegistrarSemilleroController);

    /** @ngInject */
    function RegistrarSemilleroController(Restangular, $mdToast, authService) {
        //console.log("Entró a RegistrarSemilleroController");
        var vm = this;
        var semilleros = Restangular.all('/semilleros');
        var programas = Restangular.all('/programas').getList().$object;
        var grupos = Restangular.all('/grupo').getList().$object;
        vm.registrar = registrar;
        vm.limpiar = limpiar;

        init();
        function init() {
            vm.semillero = {};
            vm.semilleros = [];
            cargarProgramas();
            cargarGrupos();
        }
        
        function cargarGrupos() {
            vm.grupos = grupos;
        }

        function cargarProgramas() {
            vm.programas = programas;
        }
        
        function registrar() {
            vm.semillero.tutor_id = authService.currentUser().datos.id;
            semilleros.post(vm.semillero).then(function (d) {
                message(d);
                vm.semillero = '';
            }), function (error) {
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
        
        function limpiar() {
            init();
        }
    }
})();


