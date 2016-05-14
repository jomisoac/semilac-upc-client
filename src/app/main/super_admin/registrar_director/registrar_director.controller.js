(function ()
{
    'use strict';

    angular
        .module('app.superadmin.registrar_director')
        .controller('registrarDirectorController', registrarDirectorController);   
           
    function registrarDirectorController() {
        var vm = this;
        //var vm = this;
        vm.director = {};
        
        vm.guardar = guardar;
        
        function guardar(){
            var datos=JSON.stringify(vm.director);
            localStorage.setItem('director',datos);
        };
    }
})();
