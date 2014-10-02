var landingController = angular.module('recommendationController', []);
landingController.controller('recommendationPage', ['$scope', function ($scope) {
    $scope.currentPosition = "default";
    $scope.showMode = true;$scope.editMode=false;
    $scope.showMode1 = true;$scope.editMode1=false;
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
    $scope.displayText3 = "Hi Geertruda Brouwer, " +
     "Here's a revised version of  the recommendation I wrote for you.  Let me know if you need anything else";
    $scope.updateValue1 =  function(){
        $scope.showMode1 = false;
        $scope.editMode1 = true;
        var paraOne = $('p.paraOne').text();
        console.log(paraOne);
        $scope.displayText = $.trim(paraOne);
    }
    $scope.editValue1 =  function(){
        $scope.showMode1 = true;
        $scope.editMode1 = false;
    }
    $scope.getLabeValue = function($event){
        var currentElementPosition = $($event.currentTarget).parent().parent().siblings('.col-sm-6').children('label').text();
        $scope.currentPosition = currentElementPosition;
        console.log(currentElementPosition);
    }
}]);
