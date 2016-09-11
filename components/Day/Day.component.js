angular.module('app')
    .directive('day', function () {
        return {
            scope: {
                data: '='
            },
            templateUrl: 'components/Day/Day.html',
            controller: ['$scope', function ($scope) {
            }]
        };
    });