(function () {
    'use strict';

    angular
        .module('app.estudiante.enviarSolicitudSemillero')
        .controller('EnviarSolicitudSemillero', EnviarSolicitudSemillero);


    /** @ngInject */
    function EnviarSolicitudSemillero(Restangular, $mdToast, $state, $stateParams, $timeout, DTOptionsBuilder, DTColumnBuilder, $translate) {
        var vm = this;
        vm.solicitud = {};
        var solicitud = Restangular.all('/solicitud-semilleros');

        vm.guardar = guardar;

        function guardar() {

        }

        var dato = new Object();
        dato.id = 1;
        dato.firstName='Ricardo';
        dato.lastName='anronio';
        var dato2 = new Object();
        dato2.id = 2;
        dato2.firstName='Ricardo2';
        dato2.lastName='anronio2';

        var lista = new Array();
        lista.push(dato);
        lista.push(dato2);

        var jsonArray = JSON.stringify(lista);
        console.log(jsonArray);

       /* vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOptions('autoWidth', fnThatReturnsAPromise);

        function fnThatReturnsAPromise() {
            var defer = $q.defer();
            defer.resolve(false);
            return defer.promise;
        }*/

        vm.dtOptions = DTOptionsBuilder.fromSource({
                "data": [{
                    "id": "1",
                    "firstName": "Ricardo",
                    "lastName": "antonio"
                }, {
                    "id": "2",
                    "firstName": "jose",
                    "lastName": "mini"
                }]
            }
        );



        vm.dtColumns = [
            // You can provide the title directly in the newColum second parameter
            //DTColumnBuilder.newColumn('id', $translate('id')),
            // Or you can use the withTitle helper
            DTColumnBuilder.newColumn('id').withTitle($translate('id')),
            DTColumnBuilder.newColumn('firstName').withTitle($translate('firstName')),
            DTColumnBuilder.newColumn('lastName').withTitle($translate('lastName'))


        ];



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