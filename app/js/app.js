'use strict';
/* main App */
var app = angular.module('app', []);

app.directive('blah', function() {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "components/headerFooter/organizationHeader.tmpl.html"
    };
});
