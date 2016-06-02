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
        vm.dtOptions = {
            dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth: false,
            responsive: true,
            language: {
                sEmptyTable: "No hay datos disponibles en la tabla",
                sInfo: "Mostrando _START_ a _END_ de _TOTAL_ registros",
                sInfoEmpty: "Mostrando 0 a 0 de 0 registros",
                sInfoFiltered: "(filtrado desde _MAX_ registros)",
                sInfoPostFix: "",
                sInfoThousands: ",",
                sLengthMenu: "Mostrar _MENU_ registros",
                sLoadingRecords: "Cargando...",
                sProcessing: "Procesando...",
                sSearch: "Buscar:",
                sZeroRecords: "No se encontraron registros que coincidar con la busqueda",
                oPaginate: {
                    sFirst: "Primero",
                    sLast: "Último",
                    sNext: "Siguiente",
                    sPrevious: "Anterior"
                },
                oAria: {
                    sSortAscending: ": activar para ordenar las columnas ascendente",
                    sSortDescending: ": activar para ordenar las columnas descendente"
                }
            }
        };


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


