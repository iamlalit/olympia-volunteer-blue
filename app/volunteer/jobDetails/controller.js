
OrgVolApp.controller('jobDetails', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.applicantData = [];
    $scope.applicantData.push({'city': 'Amsterdam',
      'date': '10 days ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Boekel',
      'date': '5 days ago',
      'initiated': "Client"
    }); 
    $scope.applicantData.push({'city': 'Bregtdorp',
      'date': '1 day ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Driemond',
      'date': '5 hours ago',
      'initiated': "Client"
    }); 
    $scope.applicantData.push({'city': 'Callantsoog',
      'date': '10 days ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'De Westen',
      'date': '10 hours ago',
      'initiated': "Client"
    }); 
    $scope.applicantData.push({'city': 'Keinsmerbrug',
      'date': '1 day ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Krommeniedijk',
      'date': '2 days ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Mennonietenbuurt',
      'date': '8 hours ago',
      'initiated': "Volunteer"
    }); 
    $scope.applicantData.push({'city': 'Oude-Niedorp',
      'date': '15 days ago',
      'initiated': "Volunteer"
    }); 
    $scope.lengthOfApplicantData = $scope.applicantData.length;
    $scope.variableMoreLess = 3;

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
  $scope.postedBy = getParameterByName('postedBy');
  //parameters for theming


  $scope.topBar = "#" + getParameterByName('topBar');
  $scope.clientImage = getParameterByName('clientImage');
  $scope.topBarText = "#" + getParameterByName('topBarText');
  $scope.hoverBackground = "#" + getParameterByName('hoverBackground');
  $scope.buttonColor = "#" + getParameterByName('buttonColor');
  $scope.buttonBackColor = "#" + getParameterByName('buttonBackColor');
  $scope.selectedItemText = "#" + getParameterByName('selectedItemText');
  $scope.selectedBackground = "#" + getParameterByName('selectedBackground');
  $scope.bottomBarText = "#" + getParameterByName('bottomBarText');
  $scope.bottomBar = "#" + getParameterByName('bottomBar');
  $scope.colorBackground  = "#" + getParameterByName('colorBackground');
  if ($scope.topBarText){
      $(document).ready(function() {

       $('.nav li a').hover(
           function () {
            if($(this).parents('li').hasClass('active')) {
              console.log("selected state");
            }else {
              $(this).css({"background-color":$scope.hoverBackground}); 
            }
           }, 
           function () {
            if($(this).parents('li').hasClass('active')) {
              console.log("selected state");
            }else {
              $(this).css({"background-color":$scope.topBar});
            }
             
           }
       );

       $('.nav li.active a').css({"background-color":$scope.selectedBackground, "color": $scope.selectedItemText})

       $('.nav li a#icons-header-right').hover(

           function () {
              console.log("yahoo selected");
              $(this).css({"background-color":$scope.hoverBackground}); 
            }, 
           function () {
              $(this).css({"background-color":$scope.hoverBackground});
           }
       );
     });
  }

  $scope.applyToJob = function(){
    window.location.href = "../jobApply/jobApply.html?jobName=" + $scope.jobName +"&jobDate=" + $scope.jobDate + "&owner=" + $rootScope.owner + "&postedBy=" + $scope.postedBy;
  }
}]);