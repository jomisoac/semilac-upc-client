(function () {
    'use strict';

    angular
        .module('app.director.registrarGrupo')
        .controller('RegistrarGrupoController', RegistrarGrupoController);


    /** @ngInject */
    function RegistrarGrupoController(Restangular, $mdToast) {
        var vm = this;
        vm.grupo = {};
        var grupo = Restangular.all('/grupo');


        vm.guardar = guardar;
        vm.limpiar = limpiar;

        function guardar(){
            vm.grupo.usuario_id = JSON.parse(sessionStorage.usuario).id;
            console.log( vm.grupo.usuario_id);
            console.log(vm.grupo);
            grupo.post(vm.grupo).then(function (d) {
                message(d);
                vm.grupo = '';
            }), function (error) {
                var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
                message(mensajeError);
            }
        }

        function limpiar() {
            vm.grupo = '';
        }
        function message(body) {
            $mdToast.show({
                template : '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position : 'top right',
                parent   : '#content'
            });
        }
    }
})();