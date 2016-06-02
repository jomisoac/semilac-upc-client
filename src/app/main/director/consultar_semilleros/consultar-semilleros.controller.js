(function () {
    'use strict';

    angular
        .module('app.director.consultar_semilleros')
        .controller('ConsultarSemilleros', ConsultarSemilleros);


    /** @ngInject */
    function ConsultarSemilleros(Restangular, $mdToast, DTOptionsBuilder, authService) {
        var vm = this;
        vm.semillero = {};
        vm.semilleros = [];
        vm.tutores = [];

        var solicitudes = Restangular.all('/solicitud-semilleros');
        vm.dtOptions = DTOptionsBuilder
            .fromSource()
            .withLanguage({
                "sEmptyTable": "No hay datos disponibles en la tabla",
                "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 a 0 de 0 registros",
                "sInfoFiltered": "(filtrado desde _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ",",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sLoadingRecords": "Cargando...",
                "sProcessing": "Procesando...",
                "sSearch": "Buscar:",
                "sZeroRecords": "No se encontraron registros que coincidar con la busqueda",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": activar para ordenar las columnas ascendente",
                    "sSortDescending": ": activar para ordenar las columnas descendente"
                }
            })
        // Add Bootstrap compatibility


        vm.buscarTutor = buscarTutor;


        cargarSemilleros();
        cargarTutores();


        function cargarSemilleros() {
            vm.semilleros = Restangular.all('/semilleros').getList().$object;
        }

        function cargarTutores() {
            vm.tutores = Restangular.all('/tutores').getList().$object;
        }

        function buscarTutor(tutor_id) {
            var nombre = '';
            vm.tutores.forEach(function (item) {
                if (item.id == tutor_id) {
                    nombre = item.nombres;
                }
            });
            return nombre;
        }


        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }
    }
})();