angular.module('app')
    .directive('home', function () {
        return {
            templateUrl: 'components/Home/Home.html',
            controller: ['$scope', 'API', function ($scope, API) {
                API.getTimeData(function (err, data) {
                    console.log(data);
                    $scope.dates = data.data;
                });
            }]
        };
    });