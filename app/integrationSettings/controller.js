var changePasswordController = angular.module('changePasswordController', [])

.controller('changePasswordCntrl', ['$scope', function ($scope) {

	$scope.saveChanges = function(color){
		$scope.clientImage = '../../img/redCross.jpg';
		window.location.href = "../organization/job/job.html?topBar=" + $scope.topBar +"&clientImage=" + $scope.clientImage + "&topBarText=" + $scope.topBarText + "&hoverBackground=" + $scope.hoverBackground + "&buttonBackColor=" + $scope.buttonBackColor + "&buttonColor=" + $scope.buttonColor + "&selectedBackground=" + $scope.selectedBackground + "&selectedItemText=" + $scope.selectedItemText + "&bottomBarText=" + $scope.bottomBarText + "&bottomBar=" + $scope.bottomBar + "&colorBackground=" + $scope.colorBackground;
	}

    $scope.typeOfOwner = '';
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.typeOfOwner = getParameterByName('owner');

}]);

    
