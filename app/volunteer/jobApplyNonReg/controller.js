var app = angular.module('jobDetailsController', []);
app.controller('jobDetails', ['$scope', function ($scope) {
    
    $scope.jobName = 'Student Activist Coordinator';
    $scope.jobDate = 'About 6 hours ago';
    $scope.areaFocuses = ["Disability", "Education", "Energy conservation", "Government reform", "Housing and homelessness"];
    $scope.postJobSkills = ["Crowd control", "Cooking", "Communication"];
    $scope.postJobDiploma = ["Program coordinator", "Negotiation"];
    $scope.postJobTime = ["Full time(30-40 hours/week)"];
    $scope.postJobEstimated = ["Less than 3 months", "Less than 1 months"];
    $scope.postJobTimeReq = ["Weekends - Full day", "Monday - Late Night"];
    $scope.postJobSchedule = ["Flexible schedule"];
    $scope.postJobIVO = ["Housing available"];
    $scope.postJobLanguage = ["English", "Dutch"];
    $scope.postJobMiscellaneous = ["Training provided", "Fee required"];

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.jobName = getParameterByName('jobName');
    $scope.jobDate = getParameterByName('jobDate')

    $scope.jobName = 'Student Activist Coordinator';
    $scope.jobDate = 'About 6 hours ago';

    $('#jobApplyForm').find('button').addClass('disabled-button');
    $scope.updateButtons = function(){
        $('#jobApplyForm').find('button').removeClass('disabled-button');  
    }
}]);
