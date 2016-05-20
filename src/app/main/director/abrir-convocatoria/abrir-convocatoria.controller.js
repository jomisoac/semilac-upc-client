(function () {
    'use strict';

    angular
        .module('app.director.abrirConvocatoria')
        .controller('AbrirConvocatoriaController', AbrirConvocatoriaController);


    /** @ngInject */
    function AbrirConvocatoriaController(Restangular, $mdToast) {
        var vm = this;
        vm.convocatoria = {};
        var convocatoria = Restangular.all('/convocatorias');

        vm.guardar = guardar;

        function guardar() {            
            vm.convocatoria.usuario_id = JSON.parse(sessionStorage.usuario).id;
            convocatoria.post(vm.convocatoria).then(function (d) {
                message(d);
                vm.convocatoria = '';
            }), function (error) {
                var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
                message(mensajeError);
            }
        };

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