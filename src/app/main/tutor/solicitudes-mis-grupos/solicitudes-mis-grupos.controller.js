(function () {
    'use strict';

    angular
        .module('app.tutor.SolicitudesMisGrupos')
        .controller('SolicitudesMisGrupos', SolicitudesMisGrupos);


    /** @ngInject */
    function SolicitudesMisGrupos(Restangular, $mdToast, DTOptionsBuilder, authService) {
        var vm = this;

        vm.responder = responder;

        var solicitudes = Restangular.all('/solicitudes-mis-grupos/' + authService.currentUser().datos.id);
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

        vm.solicitudes = {};

        cargarSolicitudes();

        function cargarSolicitudes() {
            vm.solicitudes = Restangular.all('/solicitudes-mis-grupos/' + authService.currentUser().datos.id).getList().$object;
        }

        function responder(solicitud, respuesta) {
            solicitud.respuesta = respuesta;
            Restangular.all('solicitudes-mis-grupos/' + solicitud.id).customPUT(solicitud).then(
                function (data) {
                    message(data);
                    cargarSolicitudes();
                },
                function (error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';
                    message(mensajeError);
                }
            );
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
