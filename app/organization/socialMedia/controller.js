'use strict';
/* main App */
var app = angular.module('socialMediaController', []);

app.controller('socialMediaCtrl', function($scope){

    $scope.typeOfOwner = '';
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.typeOfOwner = getParameterByName('owner');
});