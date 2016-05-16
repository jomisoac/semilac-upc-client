(function () {
    'use strict';

    angular
        .module('app.tutor.registrarTutor')
        .controller('RegistrarTutorController', RegistrarTutorController);

    /** @ngInject */
    function RegistrarTutorController(Restangular, $mdToast) {
        console.log("Entró a RegistrarTutorController");
        //Declaracion de variables y funciones en orden alfabetico
        //Privadas
        var vm = this;
        var tutores = Restangular.all('/tutores');
        //Publicas 
        vm.cambiarFechaExpedicionMin = cambiarFechaExpedicionMin;
        vm.cambiarFechaNacimientoMax = cambiarFechaNacimientoMax;
        vm.limpiar = limpiar;
        vm.registrar = registrar;

        //Implementacion de funciones en orden alfabetico.
        function activate() {
            //Funcion para inicializar los datos.
            var hoy = new Date();
            vm.fechaNacimientoMax = new Date(
                hoy.getFullYear() - 18,
                hoy.getMonth(),
                hoy.getDate()
            );
            vm.fechaExpedicionMax = hoy;
            vm.tutor = {};
        }
        function cambiarFechaExpedicionMin() {
            //La fecha de expedicion de la cedula es por lo menos 18 anios despues del nacimiento.
            if (vm.tutor.fecha_nacimiento) {
                vm.fechaExpedicionMin = new Date(
                    vm.tutor.fecha_nacimiento.getFullYear() + 18,
                    vm.tutor.fecha_nacimiento.getMonth(),
                    vm.tutor.fecha_nacimiento.getDate()
                );
                console.log(vm.fechaExpedicionMin);
            }
        }
        function cambiarFechaNacimientoMax() {
            //La fecha de nacimiento debe ser 18 anios menos que la fecha de expedicion de la cedula.
            if (vm.tutor.fecha_expedicion) {
                vm.fechaNacimientoMax = new Date(
                    vm.tutor.fecha_expedicion.getFullYear() - 18,
                    vm.tutor.fecha_expedicion.getMonth(),
                    vm.tutor.fecha_expedicion.getDate()
                );
                console.log(vm.fechaNacimientoMax);
            }
        }
        function limpiar() {
            activate();
        }
        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }
        function registrar() {
            console.log(vm.tutor);
            tutores.post(vm.tutor).then(function (d) {
                message(d);
                activate();
            }), function (error) {
                var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';
                message(mensajeError);
            }
        }

        //Inicializar los datos.
        activate();
    }
})();
