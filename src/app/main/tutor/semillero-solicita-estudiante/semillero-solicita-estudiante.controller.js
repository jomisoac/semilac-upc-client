(function() {
    'use strict';

    angular
        .module('app.tutor.semilleroSolicitaEstudiante')
        .controller('SemilleroSolicitaEstudiante', SemilleroSolicitaEstudiante);


    /** @ngInject */
    function SemilleroSolicitaEstudiante(Restangular, $mdToast, DTOptionsBuilder, authService) {
        var vm = this;
        var estudiante;
        var solicitudes = Restangular.all('/semillero_solicita_estudiante');

        vm.enviar = enviar;
        vm.estudiantes = [];
        vm.semillero = {};
        vm.semilleros = [];
        vm.solicitud_semilleros = [];
        vm.getNombreCompleto = getNombreCompleto;
        vm.getNombrePrograma = getNombrePrograma;

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

        function cargarEstudiantes() {
            vm.estudiantes = Restangular.all('/estudiantes/disponibles').getList().$object;
        }

        function cargarSemilleros() {
            vm.semilleros = Restangular.all('/semilleros').getList().$object;
        }

        function cargarSolicitudes() {
            vm.solicitud_semilleros = Restangular.all('/tutor/solicitudes-semilleros').getList().$object;
            vm.solicitud_semilleros.forEach(function(solicitud) {
                if (solicitud.respuesta == 'en espera') {

                } else {
                    if (solicitud.respuesta == 'rechazada') {
                        vm.respuesta = 'rechazada';
                    } else {
                        if (solicitud.respuesta == 'aceptada') {
                            vm.respuesta = 'aceptada';
                        }
                    }
                }
            });
        }

        function enviar(estudiante, form) {
            if (vm.semillero_id_seleccionado) {
                var solicitud = {
                    'estudiante_id': estudiante.id,
                    'semillero_id': vm.semillero_id_seleccionado
                };
                solicitudes.post(solicitud).then(
                    function(d) {
                        message(d.mensaje);
                        solicitud = {};
                        estudiante.enviado = true;
                        estudiante.mensaje = "Enviado";
                    },
                    function(error) {
                        var mensajeError = error.status == 401 ? error.data.mensajeError : 'Ha ocurrido un error inesperado.';

                    }
                );
            } else {
                //Debe seleccionar un semillero.
                document.getElementById('semillero_id_seleccionado').focus();
            }
        }

        function getNombreCompleto(persona) {
            return persona.nombres + ' ' + persona.apellidos;
        }

        function getNombrePrograma(persona) {

            return persona.programa.nombre;
        }

        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }

        cargarSemilleros();
        cargarEstudiantes();
    }
})();