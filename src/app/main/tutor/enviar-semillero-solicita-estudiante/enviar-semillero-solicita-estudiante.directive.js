(function() {
    'use strict';

    angular
        .module('app.tutor.enviarSemilleroSolicitaEstudiante')
        .directive('uploaderModel', ['$parse', function ($parse) {
            return{
                restrict: 'A', link:function (scope, iElement, iAttrs) {
                    iElement.on('click', function (e)
                    {
                        $parse(iAttrs.uploaderModel).assign(scope, iElement[0].value);
                    });
                }
            };

        }]);
})();