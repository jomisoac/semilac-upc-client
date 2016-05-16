/**
 * Created by Jose Soto
 * on 16/05/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.registrarse.estudiante')
        .controller('RegistrarseEstudianteController', RegistrarseEstudianteController);

    function RegistrarseEstudianteController(Restangular, $mdToast, $state) {
        //Declaracion de variables y funciones en orden alfabetico
        //Privadas
        var vm = this;
        var estudiantes = Restangular.all('/estudiantes');
        // publicas
        vm.registrarse = registrarse;

        init();
        function init() {
            vm.estudiante = {}
        }

        function registrarse() {
            estudiantes.post(vm.estudiante).then(function (d) {
                message(d);
                limpiar();
                atras();
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
        function atras() {
            $state.go('app.pages_autenticacion_login');
        }
    }
})();