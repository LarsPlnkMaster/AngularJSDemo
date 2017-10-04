angular.module('app.directives.contactCard', [])
    .directive('contactCard', function () {
        return {
            restrict: 'E',
            scope: {
                cust:'=data'
            },
            replace:true,
            templateUrl:"templates/directives/contactCard.html",
            controller: function ($scope) {
                console.log($scope.cust);
            },
            
        };
    });
    