/**
 * Created by Veronica on 11/01/2017.
 */
(function(){
    angular.module('myhome', []);

    angular.module('myhome').directive('myHome',function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'home.html',
            controller: function ($scope) {
                $scope.previous = "Previous";
                $scope.next = "Next";
            }
        }
    });
})();

