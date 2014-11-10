
OrgVolApp.controller('landingPage', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.OrganizationMenu = false;
    $scope.volunteerMenu = false;
    $scope.profileModel = [
        {
            'imgLink': '../img/name3.png',
            'name': 'Amy McDougall',
            'skill': 'Writer/Translator'
        },
        {
            'imgLink': '../img/name7.png',
            'name': 'Betsy Chang',
            'skill': 'Photographer'
        },
        {
            'imgLink': '../img/name9.png',
            'name': 'Darius Kasperitis',
            'skill': 'Python developer'
        },
        {
            'imgLink': '../img/name11.png',
            'name': 'Marleen Dijkstra',
            'skill': 'Software developer'
        },
        {
            'imgLink': '../img/name5.png',
            'name': 'Henk-jan Bosch',
            'skill': 'Crowd controller'
        }
    ];
    $scope.profileModelOrganization = [
        {
            'name': 'Red Cross NL',
            'type': 'NGO'    
        },
        {
            'name': 'Global Conscise',
            'type': 'NGO'
        },
        {
            'name': 'Red Cross NL',
            'type': 'NGO'
        },
        {
            'name': 'Global Conscise',
            'type': 'NGO'
        },
        {
            'name': 'Red Cross NL',
            'type': 'NGO'
        }
    ];

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.typeOfOwner = getParameterByName('owner');

    $scope.gotoCreateProfileVol = function(){
        window.location.href = '/volunteer/CreateProfileForm/createProfile.html?owner=' + $rootScope.owner;
    }
    $scope.gotoPostJob = function(){
        window.location.href = '/organization/postJob/postjob.html?owner=' + $rootScope.owner;
    }
    $scope.goToStaffing = function(){
        window.location.href= '/organization/staffAndPermission/staffAndPermission.html?owner=' + $rootScope.owner;
    }
    $scope.goToOrganization = function(){
        window.location.href= '/organization/organizationProfile/organizationProfile.html?owner=' + $rootScope.owner;
    }
    $scope.gotosearchOrg = function(){
        window.location.href= '/organization/searchOrg/searchOrg.html?owner=' + $rootScope.owner;   
    }
}]);