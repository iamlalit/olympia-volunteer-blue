
OrgVolApp.controller('changePasswordCntrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

	$scope.saveChanges = function(color){
		$scope.clientImage = '../../img/redCross.jpg';
		window.location.href = "../organization/job/job.html?topBar=" + $scope.topBar +"&clientImage=" + $scope.clientImage + "&topBarText=" + $scope.topBarText + "&buttonBackColor=" + $scope.buttonBackColor + "&buttonColor=" + $scope.buttonColor + "&bottomBarText=" + $scope.bottomBarText + "&bottomBar=" + $scope.bottomBar + "&colorBackground=" + $scope.colorBackground + "&colorHeading=" + $scope.colorHeading + "&colorBodyText=" + $scope.colorBodyText + "&headingSize=" + $scope.headingSize + "&subHeadingSize=" + $scope.subHeadingSize + "&bodySize=" + $scope.bodySize + "&fontFace=" + $scope.fontFace + "&headerImageLink=" + $scope.headerImageLink + "&fontFaceH1=" + $scope.fontFaceH1 + "&fontFaceH2=" + $scope.fontFaceH2 + "&fontFaceH2=" + $scope.fontFaceH3 + "&showOrgDetails=" + $scope.showOrgDetails + "&showOrgADDDetails=" + $scope.showOrgADDDetails + "&showJobLocation=" + $scope.showJobLocation + "&showApplyButton=" + $scope.showApplyButton + "&messageInstruction=" + $scope.messageInstruction + "&SITV=" + $scope.SITV + "&owner=" + $rootScope.owner;
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

    
