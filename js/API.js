angular.module('app')
    .factory('API', ['API_KEY', '$http', function (API_KEY, $http) {
        var API = {};

        API.API_BASE = 'https://cors.now.sh/https://www.rescuetime.com/anapi/';

        API.getTimeData = function (callback) {
            $http.get(API.API_BASE + 'daily_summary_feed?key=' + API_KEY)
                .then(function (data) {
                    callback(null, data);
                }, function (err) {
                    callback(err);
                });
        };

        return API;
    }]);
