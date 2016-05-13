(function ()
{
    'use strict';

    angular
            .module('app.director.requisito.registrar_requisito')
            .controller('RequisitoController', RequisitoController);

    /** @ngInject */
    function RequisitoController()
    {
        var vm = this;
        vm.requisito = {};
        vm.requisitos = [];
        
        
        vm.registrar = function(){
            if (vm.requisitos.push(vm.requisito)) {
                alert('se registro el requisito correctamente');
                vm.requsito = {};
                console.log(vm.requisitos);
            } else {
                alert('no se pudo registrar el requisito');
            }
        };
        
        function cargar (){

        }
       
    }
})();


