function DialogTutoresController($mdDialog, Restangular) {
    var vm = this;
    var tutores;
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
    vm.tutores = [];

    activate();

    function aceptar() {
        var answer = vm.selectedUser();
        $mdDialog.hide(answer);
    }
    
    function activate() {
        tutores = Restangular.all('/tutores');
        cargarTutores();
    }

    function cargarTutores() {
        vm.tutores = tutores.getList().$object;
    }

    function getNombreCompleto(persona) {
        return persona.nombres + " " + persona.apellidos;
    }
    
    function selectedUser() {
        return vm.tutores[vm.selectedIndex - 1];
    }
}