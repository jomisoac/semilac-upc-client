(function () {
    'use strict';

    angular
        .module('fuse')
        .config(config);

    /** @ngInject */
    function config(jwtInterceptorProvider, $httpProvider, api) {
        /** @ngInject */
        jwtInterceptorProvider.tokenGetter = function (jwtHelper, $http) {
            var jwt = sessionStorage.getItem('jwt');
            if (jwt) {
                if (jwtHelper.isTokenExpired(jwt)) {
                    return $http({
                        url: api + '/new_token',
                        skipAuthorization: true,
                        method: 'GET',
                        headers: {Authorization: 'Bearer ' + jwt},
                    }).then(function (response) {
                        sessionStorage.setItem('jwt', response.data.token);
                        return response.data.token;
                    }, function (response) {
                        sessionStorage.removeItem('jwt');
                    });
                } else {
                    return jwt;
                }
            }
        }
        /** @ngInject */
        $httpProvider.interceptors.push('jwtInterceptor');
    }

})();
