(function () {
    'use strict';

    angular
        .module('app.pages.registrarse.tutor')
        .controller('RegistrarseTutorController', RegistrarseTutorController);

    /** @ngInject */
    function RegistrarseTutorController(Restangular, $mdToast, $state, $timeout) {
        //Declaracion de variables y funciones en orden alfabetico
        //Privadas
        var vm = this;
        var tutores = Restangular.all('/tutores');
        //Publicas 
        vm.cambiarFechaExpedicionMin = cambiarFechaExpedicionMin;
        vm.cambiarFechaNacimientoMax = cambiarFechaNacimientoMax;
        vm.limpiar = limpiar;
        vm.registrarse = registrarse;
        vm.atras = atras;

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
        
        function registrarse(form) {
            tutores.post(vm.tutor).then(function (d) {
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

        function atras() {
            $state.go('app.pages_autenticacion_login');
        }

        //Inicializar los datos.
        activate();
    }
})();
