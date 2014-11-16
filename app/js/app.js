'use strict';
/* main App */
var OrgVolApp = angular.module('OrgVolApp', ['ngTable']);

function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var typeOfOwner = getParameterByName('owner');
var typeOfsecondOwner = getParameterByName('secondOwner');

OrgVolApp.run(function($rootScope){
    $rootScope.owner = typeOfOwner;
    $rootScope.secondOwner = typeOfsecondOwner;
})
