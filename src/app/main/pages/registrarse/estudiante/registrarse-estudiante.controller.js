/**
 * Created by Jose Soto
 * on 16/05/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.registrarse.estudiante')
        .controller('RegistrarseEstudianteController', RegistrarseEstudianteController);

    function RegistrarseEstudianteController(Restangular, $mdToast, $state, $timeout) {
        //Declaracion de variables y funciones en orden alfabetico
        //Privadas
        var vm = this;
        var estudiantes = Restangular.all('/estudiantes');
        var programas = Restangular.all('/programas').getList().$object;
        // publicas
        vm.programas = [];
        vm.cambiarFechaExpedicionMin = cambiarFechaExpedicionMin;
        vm.cambiarFechaNacimientoMax = cambiarFechaNacimientoMax;
        vm.registrarse = registrarse;
        vm.atras = atras;

        init();
        function init() {
            var hoy = new Date();
            vm.fechaNacimientoMax = new Date(
                hoy.getFullYear() - 18,
                hoy.getMonth(),
                hoy.getDate()
            );
            vm.fechaExpedicionMax = hoy;
            vm.estudiante = {};
            cargarProgramas();
        }

        function cambiarFechaExpedicionMin() {
            //La fecha de expedicion de la cedula es por lo menos 18 anios despues del nacimiento.
            if (vm.estudiante.fecha_nacimiento) {
                vm.fechaExpedicionMin = new Date(
                    vm.estudiante.fecha_nacimiento.getFullYear() + 18,
                    vm.estudiante.fecha_nacimiento.getMonth(),
                    vm.estudiante.fecha_nacimiento.getDate()
                );
            }
        }
        function cambiarFechaNacimientoMax() {
            //La fecha de nacimiento debe ser 18 anios menos que la fecha de expedicion de la cedula.
            if (vm.estudiante.fecha_expedicion) {
                vm.fechaNacimientoMax = new Date(
                    vm.estudiante.fecha_expedicion.getFullYear() - 18,
                    vm.estudiante.fecha_expedicion.getMonth(),
                    vm.estudiante.fecha_expedicion.getDate()
                );
            }
        }

        function cargarProgramas() {
            vm.programas = programas;
        }

        function registrarse(form) {
            estudiantes.post(vm.estudiante).then(function (d) {
                if(d.ok != 'false'){
                    message(d);
                    limpiar();
                    if(form){
                        form.$setPristine();
                        form.$setUntouched();
                    }
                    $timeout(atras, 4000)
                }else{
                    message(d.mensaje);
                }
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