﻿var app = angular.module('jobDetailsController', []);
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

  $scope.jobName = 'Student Community worker:';
  $scope.jobDate = 'About 1 hour ago';
  $scope.topBar = "#" + getParameterByName('topBar');
  $scope.clientImage = getParameterByName('clientImage');
  $scope.topBarText = "#" + getParameterByName('topBarText');
  $scope.buttonColor = "#" + getParameterByName('buttonColor');
  $scope.buttonBackColor = "#" + getParameterByName('buttonBackColor');
  $scope.selectedItemText = "#" + getParameterByName('selectedItemText');
  $scope.selectedBackground = "#" + getParameterByName('selectedBackground');
  $scope.bottomBarText = "#" + getParameterByName('bottomBarText');
  $scope.bottomBar = "#" + getParameterByName('bottomBar');
  $scope.colorBackground  = "#" + getParameterByName('colorBackground');
  $scope.colorHeading  = "#" + getParameterByName('colorHeading');
  $scope.colorBodyText  = "#" + getParameterByName('colorBodyText');
  $scope.headingSize  = getParameterByName('headingSize') + "px";
  $scope.subHeadingSize  = getParameterByName('subHeadingSize') + "px";
  $scope.bodySize  = getParameterByName('bodySize') + "px";
  $scope.headerImageLink  = getParameterByName('headerImageLink');
  $scope.fontFace  = getParameterByName('fontFace');
  $scope.fontFaceH3  = getParameterByName('fontFaceH3');
  $scope.fontFaceH2  = getParameterByName('fontFaceH2');
  $scope.fontFaceH1  = getParameterByName('fontFaceH1');
  //show and hide feature
  $scope.showApplyButton  = getParameterByName('showApplyButton');
  $scope.showJobLocation  = getParameterByName('showJobLocation');
  $scope.showOrgADDDetails  = getParameterByName('showOrgADDDetails');
  $scope.showOrgDetails = getParameterByName('showOrgDetails');
  var messageInstruction  = getParameterByName('messageInstruction');
  
  if(messageInstruction == 'undefined') {
    $scope.messageInstruction = '';  
  }else{
    $scope.messageInstruction = messageInstruction;
  }
  $scope.SITV  = getParameterByName('SITV');

  $scope.hideHeaderFooter = 'true';
  $scope.jobApplyPageURL = "../job/job.html?topBar=" + $scope.topBar.replace("#", "") +"&clientImage=" + $scope.clientImage + "&topBarText=" + $scope.topBarText.replace("#", "") + "&buttonBackColor=" + $scope.buttonBackColor.replace("#", "") + "&buttonColor=" + $scope.buttonColor.replace("#", "") + "&bottomBarText=" + $scope.bottomBarText.replace("#", "") + "&bottomBar=" + $scope.bottomBar.replace("#", "") + "&colorBackground=" + $scope.colorBackground.replace("#", "") + "&colorHeading=" + $scope.colorHeading.replace("#", "") + "&colorBodyText=" + $scope.colorBodyText.replace("#", "") + "&headingSize=" + $scope.headingSize.replace("px", "") + "&subHeadingSize=" + $scope.subHeadingSize.replace("px", "") + "&bodySize=" + $scope.bodySize.replace("px", "") + "&fontFace=" + $scope.fontFace + "&headerImageLink=" + $scope.headerImageLink + "&fontFaceH1=" + $scope.fontFaceH1 + "&fontFaceH2=" + $scope.fontFaceH2 + "&fontFaceH2=" + $scope.fontFaceH3 + "&showOrgDetails=" + $scope.showOrgDetails + "&showOrgADDDetails=" + $scope.showOrgADDDetails + "&showJobLocation=" + $scope.showJobLocation + "&showApplyButton=" + $scope.showApplyButton + "&messageInstruction=" + $scope.messageInstruction + "&SITV=" + $scope.SITV;
}]);
