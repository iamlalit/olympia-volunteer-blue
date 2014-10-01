var landingController = angular.module('recommendationController', []);
landingController.controller('recommendationPage', ['$scope', function ($scope) {
    $scope.showMode = true;$scope.editMode=false;
    $scope.displayText2 = "Hi Marleen Bosch, " +
     "Here's a revised version of  the recommendation I wrote for you.  Let me know if you need anything else";
    $scope.updateValue =  function(){
        $scope.showMode = false;
        $scope.editMode = true;
        var para = $('p.paraFirst').text();
        console.log(para);
        $scope.displayText = $.trim(para);
    }
    $scope.editValue =  function(){
        $scope.showMode = true;
        $scope.editMode = false;
    }
}]);
