var landingController = angular.module('landingController', []);
landingController.controller('landingPage', ['$scope', function ($scope) {
    $scope.organisationMenu = false;
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
            'skill': 'PhotoGrapher'
        },
        {
            'imgLink': '../img/name9.png',
            'name': 'Darius Kasperitis',
            'skill': 'Python Developer'
        },
        {
            'imgLink': '../img/name11.png',
            'name': 'Marleen Dijkstra',
            'skill': 'Software Developer'
        },
        {
            'imgLink': '../img/name5.png',
            'name': 'Henk-jan Bosch',
            'skill': 'Crowd Controller'
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

    var urlParams;
    var match,
    pl = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query = window.location.search.substring(1);
    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);

    console.log(urlParams);

    var userType = urlParams.owner;
    var formType = urlParams.form;
    $scope.typeOfOwner = userType;
    if (userType == 'organization') {
        $scope.organisationMenu = true;
    }
    if (userType == 'volunteer') {
        $scope.volunteerMenu = true;
    }
}]);