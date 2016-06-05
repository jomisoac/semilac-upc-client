(function () {
    'use strict';

    angular
        .module('app.estudiante.enviarSolicitudSemillero')
        .controller('EnviarSolicitudSemillero', EnviarSolicitudSemillero);


    /** @ngInject */
    function EnviarSolicitudSemillero(Restangular, $mdToast, authService) {
        var vm = this;
        vm.semillero = {};
        vm.semilleros = [];
        vm.solicitud_semilleros = [];


        vm.solicitudes = Restangular.all('/solicitudes-semilleros');
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

        vm.enviar = enviar;
        vm.nombreTutor = nombreTutor;
        

        function enviar(semillero) {

            var solicitud = {
                'estudiante_id': authService.currentUser().datos.id,
                'semillero_id': semillero.id
            };

            vm.solicitudes.post(solicitud).then(
                function (d) {
                    message(d.mensaje);
                    semillero.enviado = true;
                    console.log(d);
                    semillero.mensaje='en espera';
                    solicitud = {};                    
                },
                function (error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error                    inesperado.';

                }
            );
        }

        cargarSemilleros();

        
        function cargarSemilleros() {
            vm.semilleros = Restangular.all('/semilleros/tutores').getList().$object;

        }

        function nombreTutor(semillero) {
            return semillero.tutor.nombres;
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