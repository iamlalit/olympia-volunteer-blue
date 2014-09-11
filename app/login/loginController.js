var loginController = angular.module('loginController', []);
loginController.controller('loginCredentialCheck', ['$scope', function ($scope) {
    $scope.alertError = 'false';
    $scope.loginCheck = function (e) {
        $scope.alertError = 'false';
        var email = $('#email').val();
        var password = $('#pass').val();
        if (((email == 'volunteer@email.com' && password == 'password') || (email == 'volunteer%40email.com' && password == 'password')) || ((email == 'organization@email.com' && password == 'password') || (email == 'organization%40email.com' && password == 'password'))) {
            if (email == 'organization@email.com' || email == 'organization%40email.com') {
                document.location.href = "../organization/search/searchVol.html?form=signup&owner=organization";
            } else {
                document.location.href = "../volunteer/searchJob/searchJob.html?form=signup&owner=volunteer";
            }
            
        } else {
            $scope.alertError = 'true';
        }        
    }
}])