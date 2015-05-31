 (function() {
 var app =   angular.module('app', []);

app.controller('jfAppCtrl',['$scope',function($scope) {
        $scope.test = 'test';
        $scope.jobList = [{
            title: "Wlapa big",
            description: "Take your place on the head"
        }, {
            title: "Killer",
            description: "Kill some one"
        }];
    }]);

 }());
 
 