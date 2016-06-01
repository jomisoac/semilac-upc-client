(function() {
    'use strict';

    angular
        .module('app.estudiante.enviarSolicitudSemillero')
        .directive('uploaderModel', ['$parse', function ($parse) {
            return{

                restrict: 'A',

                link:function (scope, iElement, iAttrs) {
                    iElement.on('click', function (e)
                    {
                        iAttrs.class = 'btn btn-danger';
;                       console.log(iAttrs);
                        console.log(iElement[0].nodeName);

                    });
                }
            };

        }]);
})();