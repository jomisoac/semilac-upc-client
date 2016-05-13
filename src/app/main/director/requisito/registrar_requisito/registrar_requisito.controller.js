(function () {
    'use strict';

    angular
        .module('app.director.requisitos')
        .controller('RequisitoController', RequisitoController);

    /** @ngInject */
    function RequisitoController() {
        var vm = this;
        vm.requisito = {};
        vm.requisitos = [];


        vm.registrar = function () {
            cargar();
        };

        function cargar() {

        }

    }
})();


