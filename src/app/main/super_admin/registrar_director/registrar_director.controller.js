(function ()
{
    'use strict';

    angular
        .module('app.superadmin.registrarDirector')
        .controller('registrarDirectorController', registrarDirectorController);   
           
    function registrarDirectorController(Restangular, $mdToast) {
        var vm = this;
        //var vm = this;
        vm.director = {};
        var director = Restangular.all('/director');
        
        vm.guardar = guardar;
        vm.limpiar = limpiar;
        
        function guardar(){
            director.post(vm.director).then(function (d) {
                message(d);
                vm.director = '';
            }), function (error) {
                var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un error inesperado';
                message(mensajeError);
            }
        };

        function limpiar() {
            vm.director = '';
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
