(function () {
    'use strict';

    angular
            .module('app.tutor.solicitudAvalConvocatoria')
            .controller('SolicitudAvalConvocatoriaController', SolicitudAvalConvocatoriaController);

    /** @ngInject */
    function SolicitudAvalConvocatoriaController(Restangular, $mdToast, authService) {
        //console.log("RegistrarInvitacionController");
        var vm = this;
        vm.limpiar=limpiar;

       

        

        function message(body) {
            $mdToast.show({
                template: '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + body + '</div></md-toast>',
                hideDelay: 3000,
                position: 'top right',
                parent: '#content'
            });
        }
        function limpiar(form) {
            vm.linea = {};
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
        }
    }
})();







