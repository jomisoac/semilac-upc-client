(function() {
    'use strict';

    angular
        .module('app.tutor.aceptarSolicitudesEstudiantesSemilleros')
        .controller('AceptarSolicitudesEstudiantesSemilleros', AceptarSolicitudesEstudiantesSemilleros);


    /** @ngInject */
    function AceptarSolicitudesEstudiantesSemilleros(Restangular, $mdToast, authService) {
        var vm = this;
        var tutor_id = authService.currentUser().datos.id;
        vm.invitaciones_de_estudiantes = [];
        vm.semillero = {};
        vm.semilleros = [];
        var estudiante;
        vm.inhabilitar = false;
        vm.estudiantes = [];
        var solicitud;
        vm.solicitudes = [];

        var invitaciones_de_estudiantes = Restangular.all('/tutores/' + tutor_id + '/invitaciones-de-estudiantes');
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

        vm.aceptar = aceptar;
        cargarSemilleros();
        cargarInvitaciones();

        function aceptar(solicitud) {
            //console.log(solicitud)
            var update_solicitud = Restangular.one('invitaciones-semilleros', solicitud.id);
            update_solicitud.respuesta = 'aceptada';
            update_solicitud.put().then(
                function(d) {
                    //console.log(d)
                    message(d);
                    solicitud = {};
                    vm.inhabilitar = true;
                    vm.mensaje = "Aceptado";
                    cargarInvitaciones();

                },
                function(error) {
                    var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';

                }
            );
        }

        function cargarInvitaciones() {
            vm.invitaciones_de_estudiantes = invitaciones_de_estudiantes.getList().$object;
        }

        function cargarSemilleros() {
            vm.semilleros = Restangular.all('/semilleros/tutores').getList().$object;
            cargarInvitaciones();
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