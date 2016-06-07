function DialogVerMasController($mdDialog, Restangular, authService, DTOptionsBuilder, items) {
    // variables
    var vm = this;
    vm.semillero = {};
    vm.semillero = items.semillero;
    // funciones
    vm.aceptar = aceptar;
    vm.answer = answer;
    vm.cancel = cancel;
    vm.getNombreCompletoTutor = getNombreCompletoTutor;
    vm.hide = hide;

    function activate() {
        if (vm.semillero.grupo == null) {
            vm.semillero.grupo = {};
            vm.semillero.grupo.nombre = "Sin grupo";
        }
    }

    function answer(answer) {
        $mdDialog.hide(answer);
    }

    function cancel() {
        $mdDialog.cancel();
    }

    function getNombreCompletoTutor(tutor) {
        return tutor.nombres + ' ' + tutor.apellidos;
    }

    function hide() {
        $mdDialog.hide();
    }

    function aceptar() {
        $mdDialog.hide(answer);
    }

    activate();
}