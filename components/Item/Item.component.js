angular.module('app')
    .directive('item', function () {
        return {
            scope: {
                title: '@',
                data: '@'
            },
            templateUrl: 'components/Item/Item.html'
        };
    });