var changePasswordController = angular.module('changePasswordController', [])

.controller('changePasswordCntrl', ['$scope', function ($scope) {

	$scope.saveChanges = function(color){
		console.log($scope.topBar);
		window.location.href = "../volunteer/jobDetails/jobDetails.html?topBar=" + $scope.topBar +"&";
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

    
