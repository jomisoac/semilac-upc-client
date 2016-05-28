function DialogEstudiantesController($mdDialog, Restangular) {
    var vm = this;
    var estudiantes;
    vm.aceptar = aceptar;
    vm.answer = function (answer) {
        answer = vm.selectedUser();
        $mdDialog.hide(answer);
    };
    vm.cancel = function () {
        $mdDialog.cancel();
    };
    vm.getNombreCompleto = getNombreCompleto;
    vm.hide = function () {
        $mdDialog.hide();
    };
    vm.selectedIndex = 1;
    vm.selectedUser = selectedUser;
    vm.estudiantes = [];

    activate();

    function aceptar() {
        var answer = vm.selectedUser();
        $mdDialog.hide(answer);
    }
    
    function activate() {
        estudiantes = Restangular.all('/estudiantes/disponibles');
        cargarEstudiantes();
    }

    function cargarEstudiantes() {
        vm.estudiantes = estudiantes.getList().$object;
    }

    function getNombreCompleto(persona) {
        return persona.nombres + " " + persona.apellidos;
    }
    
    function selectedUser() {
        return vm.estudiantes[vm.selectedIndex - 1];
    }
}