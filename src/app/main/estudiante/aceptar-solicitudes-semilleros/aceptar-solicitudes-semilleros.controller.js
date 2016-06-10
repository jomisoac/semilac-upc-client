(function() {
    'use strict';

    angular
        .module('app.estudiante.aceptarSolicitudesSemilleros')
        .controller('AceptarSolicitudesSemilleros', AceptarSolicitudesSemilleros);


    /** @ngInject */
    function AceptarSolicitudesSemilleros(Restangular, $mdToast, authService) {

        var vm = this;
        vm.solicitudes = [];
        vm.listas = [];

        vm.dtOptions = {
            dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth: false,
            responsive: true,
            language: {
                sEmptyTable: "No Tiene solicitudes en esto momentos",
                sInfo: "Mostrando _START_ a _END_ de _TOTAL_ registros",
                sInfoEmpty: "Mostrando 0 a 0 de 0 registros",
                sInfoFiltered: "(filtrado desde _MAX_ registrsos)",
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

        vm.nombreTutor = nombreTutor;
        vm.nombreSemillero = nombreSemillero;
        vm.aceptar = aceptar;
        cargarSemilleros();

        function aceptar(solicitud, respuesta) {
            var r = Restangular.all('/semillero_solicita_estudiante').getList().then(function(solicitudes) {
                var r = _.find(solicitudes, function(s) {
                    return s.id === solicitud.id;
                });

                //console.log(solicitud);

                r.respuesta = respuesta;
                r.put().then(function(d) {
                        message(d);
                        cargarSemilleros();
                    }),
                    function(error) {
                        var mensajeError = error.status == 401 ? error.data.mensajeError : 'A ocurrido un                         error inesperado';
                        message(mensajeError);
                    }

            });

        }

        function cargarSemilleros() {
            vm.solicitudes = Restangular.all('/estudiantes/' + authService.currentUser().datos.id + '/invitaciones-de-semilleros').getList().$object;

        }

        function nombreTutor(solicitud) {
            return solicitud.semillero.tutor.nombres;
        }

        function nombreSemillero(solicitud) {
            return solicitud.semillero.nombre;
        }

        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center                          start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }
    }
})();