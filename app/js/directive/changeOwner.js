
OrgVolApp.directive('changeOwner', function($rootScope) {
    return {
     restrict: 'A',
     require: 'ngModel',
     link: function (scope, element, attrs, ngModel) {
     	element.on('change', function(){
     		if(ngModel.$viewValue == 'Volunteers'){
     			window.location.href = '/organization/search/searchVol.html?owner='+$rootScope.owner;
     		}else if(ngModel.$viewValue == 'Organizations'){
     			window.location.href = '/organization/searchOrg/searchOrg.html?owner='+$rootScope.owner;
     		}else if(ngModel.$viewValue == 'Jobs'){
     			window.location.href = '/volunteer/searchJob/searchJob.html?owner='+$rootScope.owner;
     		}

     	});
     }
    };
});
