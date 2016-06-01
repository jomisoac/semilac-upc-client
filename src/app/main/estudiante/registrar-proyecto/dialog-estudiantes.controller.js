function DialogEstudiantesController($mdDialog, Restangular, authService, DTOptionsBuilder) {
    // variables
    var vm = this;
    var estudiantes;
    vm.selectedIndex = 1;
    vm.estudiantes = [];

    // funciones
    vm.aceptar = aceptar;
    vm.answer = answer;
    vm.cancel = cancel;
    vm.hide = hide;
    vm.getNombreCompleto = getNombreCompleto;
    vm.getNombrePrograma = getNombrePrograma;
    vm.selectedUser = selectedUser;

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

    // config table
    // vm.dtOptions = DTOptionsBuilder
    //     .fromSource()
    //     .withLanguage({
    //         "sEmptyTable": "No hay datos disponibles en la tabla",
    //         "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
    //         "sInfoEmpty": "Mostrando 0 a 0 de 0 registros",
    //         "sInfoFiltered": "(filtrado desde _MAX_ registros)",
    //         "sInfoPostFix": "",
    //         "sInfoThousands": ",",
    //         "sLengthMenu": "Mostrar _MENU_ registros",
    //         "sLoadingRecords": "Cargando...",
    //         "sProcessing": "Procesando...",
    //         "sSearch": "Buscar:",
    //         "sZeroRecords": "No se encontraron registros que coincidar con la busqueda",
    //         "oPaginate": {
    //             "sFirst": "Primero",
    //             "sLast": "Último",
    //             "sNext": "Siguiente",
    //             "sPrevious": "Anterior"
    //         },
    //         "oAria": {
    //             "sSortAscending": ": activar para ordenar las columnas ascendente",
    //             "sSortDescending": ": activar para ordenar las columnas descendente"
    //         }
    //     })
    function answer(answer) {
        // answer = vm.selectedUser();
        $mdDialog.hide(answer);
    }

    function cancel() {
        $mdDialog.cancel();
    }

    function hide() {
        $mdDialog.hide();
    }

    function aceptar() {
        var answer = vm.selectedUser();
        $mdDialog.hide(answer);
    }

    activate();
    function activate() {
        estudiantes = Restangular.all('/estudiantes/disponibles/' + authService.currentUser().datos.id);
        cargarEstudiantes();
    }

    function cargarEstudiantes() {
        vm.estudiantes = estudiantes.getList().$object;
    }

    function getNombreCompleto(persona) {
        return persona.nombres + " " + persona.apellidos;
    }

    function getNombrePrograma(persona) {

        return persona.programa.nombre;
    }

    function selectedUser(persona) {
        $mdDialog.hide(persona);
    }
}