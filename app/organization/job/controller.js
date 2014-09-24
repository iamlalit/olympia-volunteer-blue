var app = angular.module('jobDetailsController', []);
app.controller('jobDetails', ['$scope', function ($scope) {
    $scope.hideHeaderFooter = 'true';
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
  $scope.jobDate = getParameterByName('jobDate');
  //parameters for theming

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

  $scope.applyToJob = function(){
    $scope.clientImage = '../../img/redCross.jpg';
    window.location.href = "../jobApply/jobApply.html?jobName=" + $scope.jobName +"&jobDate=" + $scope.jobDate + "&topBar=" + $scope.topBar.replace("#", "") +"&clientImage=" + $scope.clientImage + "&topBarText=" + $scope.topBarText.replace("#", "") + "&buttonBackColor=" + $scope.buttonBackColor.replace("#", "") + "&buttonColor=" + $scope.buttonColor.replace("#", "") + "&bottomBarText=" + $scope.bottomBarText.replace("#", "") + "&bottomBar=" + $scope.bottomBar.replace("#", "") + "&colorBackground=" + $scope.colorBackground.replace("#", "") + "&colorHeading=" + $scope.colorHeading.replace("#", "") + "&colorBodyText=" + $scope.colorBodyText.replace("#", "") + "&headingSize=" + $scope.headingSize + "&subHeadingSize=" + $scope.subHeadingSize + "&bodySize=" + $scope.bodySize + "&fontFace=" + $scope.fontFace;
  }
}]);