function DialogVerMasController($mdDialog, Restangular, authService, DTOptionsBuilder, items) {
    // variables
    var vm = this;
    vm.semillero={};
    vm.semillero=items;
    // funciones
    vm.aceptar = aceptar;
    vm.answer = answer;
    vm.cancel = cancel;
    vm.hide = hide;
    var programas = Restangular.all('/programas').getList().$object;
    var grupos = Restangular.all('/grupo').getList().$object;

    cargarProgramas();
    function cargarProgramas() {
        vm.programas = programas;
    }
    cargarGrupos();
    function cargarGrupos() {
        vm.grupos = grupos;
    }

    function answer(answer) {
        $mdDialog.hide(answer);
    }

    function cancel() {
        $mdDialog.cancel();
    }

    function hide() {
        $mdDialog.hide();
    }

    function aceptar() {
        $mdDialog.hide(answer);
    }

}