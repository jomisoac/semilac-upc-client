(function () {
    'use strict';

    angular
        .module('app.pages.consultas-publicas.consultar-requisitos')
        .controller('ConsultarRequisitosController', ConsultarRequisitosController);

    /** @ngInject */
    function ConsultarRequisitosController(Restangular, $mdToast, $mdDialog, $state) {
        var vm = this;
        var requisitos = Restangular.all('/requisitos');
        vm.atras = atras;


        init();
        function init() {
            vm.requisito = {};
            vm.requisitos = [];
            cargarRequisitos();
        }
        function atras() {
            $state.go('app.pages_autenticacion_login');
        }

        function cargarRequisitos() {
            vm.requisitos = requisitos.getList().$object;
        }

    }
})();


