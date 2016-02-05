angular.module('ricoAPP')
    .factory('AvailableInvestments', function($http) {

        var service = {
            getAvailableInvestments: function() {
                return $http({
                    method: 'GET',
                    url: '/available-investments'
                });
            }
        };

        return service;

    });