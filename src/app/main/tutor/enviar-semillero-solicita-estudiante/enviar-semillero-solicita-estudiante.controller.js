(function () {
    'use strict';

    angular
        .module('app.tutor.enviarSemilleroSolicitaEstudiante')
        .controller('EnviarSemilleroSolicitaEstudiante', EnviarSemilleroSolicitaEstudiante);


    /** @ngInject */
    function EnviarSemilleroSolicitaEstudiante(Restangular, $mdToast, DTOptionsBuilder,authService) {
        var vm = this;
        vm.semillero = {};
        vm.semilleros = [];
        vm.estudiantes = [];

        var solicitudes = Restangular.all('/semillero-solicita-estudiante');
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
            .withBootstrap();



        vm.guardar = guardar;
        vm.buscarEstudiante = buscarEstudiante;
        vm.enviar=enviar;

        function guardar() {

        }

        function enviar(semillero) {
            var solicitud = {
                'estudiante_id': authService.currentUser().datos.id,
                'semillero_id': semillero.id
            };

            solicitudes.post(solicitud).then(
                function (d) {
                    message(d.mensaje);
                    solicitud = {};
                },
                function (error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';

                }
            );
        }

        cargarSemilleros();
        cargarEstudiantes();


        function cargarSemilleros() {
            vm.semilleros = Restangular.all('/semilleros').getList().$object;
        }

        function cargarEstudiantes() {
            vm.estudiantes = Restangular.all('/estudiantes').getList().$object;
        }

        function buscarEstudiante(estudiante_id){
            var nombre = '';
            vm.estudiantes.forEach(function (item) {
                if(item.id == estudiante_id_id){
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
