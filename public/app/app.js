 (function() {
 var app =   angular.module('app', ['ngResource']);

app.controller('jfAppCtrl',['$scope','$resource',function($scope,$resource) {
        $scope.test = 'test';
        $scope.jobList = $resource('/api/jobs').query()
    }]);

 }());
 
 