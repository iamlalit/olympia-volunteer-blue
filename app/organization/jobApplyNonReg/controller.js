
OrgVolApp.controller('jobDetails', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
    $scope.jobName = 'Student Activist Coordinator';
    $scope.jobDate = 'About 6 hours ago';
    $scope.areaFocuses = ["Disability", "Education", "Energy conservation", "Government reform", "Housing and homelessness"];
    $scope.postJobSkills = ["Crowd control", "Cooking", "Communication"];
    $scope.postJobDiploma = ["Program coordinator", "Negotiation"];
    $scope.postJobTime = ["Full time(30-40 hours/week)"];
    $scope.postJobEstimated = ["Less than 3 months", "Less than 1 months"];
    $scope.postJobTimeReq = ["Weekends - full day", "Monday - late night"];
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
  $scope.jobApplyPageURL = "/organization/job/job.html?topBar=" + $scope.topBar.replace("#", "") +"&clientImage=" + $scope.clientImage + "&topBarText=" + $scope.topBarText.replace("#", "") + "&buttonBackColor=" + $scope.buttonBackColor.replace("#", "") + "&buttonColor=" + $scope.buttonColor.replace("#", "") + "&bottomBarText=" + $scope.bottomBarText.replace("#", "") + "&bottomBar=" + $scope.bottomBar.replace("#", "") + "&colorBackground=" + $scope.colorBackground.replace("#", "") + "&colorHeading=" + $scope.colorHeading.replace("#", "") + "&colorBodyText=" + $scope.colorBodyText.replace("#", "") + "&headingSize=" + $scope.headingSize.replace("px", "") + "&subHeadingSize=" + $scope.subHeadingSize.replace("px", "") + "&bodySize=" + $scope.bodySize.replace("px", "") + "&fontFace=" + $scope.fontFace + "&headerImageLink=" + $scope.headerImageLink + "&fontFaceH1=" + $scope.fontFaceH1 + "&fontFaceH2=" + $scope.fontFaceH2 + "&fontFaceH2=" + $scope.fontFaceH3 + "&showOrgDetails=" + $scope.showOrgDetails + "&showOrgADDDetails=" + $scope.showOrgADDDetails + "&showJobLocation=" + $scope.showJobLocation + "&showApplyButton=" + $scope.showApplyButton + "&messageInstruction=" + $scope.messageInstruction + "&SITV=" + $scope.SITV + "&owner=" + $rootScope.owner + "&secondOwner=" + $rootScope.secondOwner;



  //some of the validation for the form
  $('#errorMsg').hide();

    var
  errorDiv = $('#errorMsg'),
  errorList = $('#errorList'),
  question1 = $('#question1'),
  question2 = $('#question2'),
  question3 = $('#question3');

    //on change of writing in any of input fields
    question1.change(function() {
        if (question1.val() == '' || question1.val() == null) {
            if (errorList.find('.errormessage-question1').length == 0) {
                $('<li />', { html: 'Cover letter required !', class: 'col-sm-6 errormessage-question1' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: question1.offset().top - 100
                    }, 500);
                    question1.focus();
                })
                $('#errorMsg').show();
                question1.parent().addClass('has-error');
            }
        }
        else {
            if (question1.parent().hasClass('has-error')) {
                question1.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-question1').length > 0) {
                errorList.find('.errormessage-question1').remove();
                $('#errorMsg').hide();
            }
        }
    });
    question2.change(function() {
        if (question2.val() == '' || question2.val() == null) {
            if (errorList.find('.errormessage-question2').length == 0) {
                $('<li />', { html: 'Answers for question 1 is required !', class: 'col-sm-6 errormessage-question2' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: question2.offset().top - 100
                    }, 500);
                    question2.focus();
                })
                $('#errorMsg').show();
                question2.parent().addClass('has-error');
            }
        }
        else {
            if (question2.parent().hasClass('has-error')) {
                question2.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-question2').length > 0) {
                errorList.find('.errormessage-question2').remove();
                $('#errorMsg').hide();
            }
        }
    });    
    //on submit
    $('#jobApplyForm').submit(function (e) {
        e.preventDefault();
        //Job title is required
        $("#greenMessage").hide();
        if (question1.val() == '' || question1.val() == null) {
            if (errorList.find('.errormessage-question1').length == 0) {
                $('<li />', { html: 'Cover letter required !', class: 'col-sm-6 errormessage-question1' })
        .appendTo(errorList)
        .click(function () {
            $('html, body').animate({
                scrollTop: question1.offset().top - 100
            }, 500);
            question1.focus();
        })
                $('#errorMsg').show();
                question1.parent().addClass('has-error');
            }
        }
        else {
            if (question1.parent().hasClass('has-error')) {
                question1.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-question1').length > 0) {
                errorList.find('.errormessage-question1').remove();
                $('#errorMsg').hide();
            }
        }
        if (question2.val() == '' || question2.val() == null) {
            if (errorList.find('.errormessage-question2').length == 0) {
                var li = $('<li />', {html: 'Answers for question 1 is required !', class: 'col-sm-6 errormessage-question2' });
                li.appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: question2.offset().top - 100
                    }, 500);
                    question2.focus();
                });
                $('#errorMsg').show();
                question2.parent().addClass('has-error');
            }
        } else {  
            if (question2.parent().hasClass('has-error')) {
                question2.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-question2').length > 0) {
                errorList.find('.errormessage-question2').remove();
                $('#errorMsg').hide();
            }
        }
        if (question3.val() == '' || question3.val() == null) {
            if (errorList.find('.errormessage-question3').length == 0) {
                var li = $('<li />', {html: 'Answers for question 2 is required !', class: 'col-sm-6 errormessage-question3' });
                li.appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: question3.offset().top - 100
                    }, 500);
                    question3.focus();
                });
                $('#errorMsg').show();
                question3.parent().addClass('has-error');
            }
        } else {
            if (question3.parent().hasClass('has-error')) {
                question3.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-question3').length > 0) {
                errorList.find('.errormessage-question3').remove();
                $('#errorMsg').hide();
            }
        }
        if (errorList.children('li').length > 0) {
            $('#errorMsg').show();
            $('html, body').animate({
                scrollTop: 100
            }, 500);
        } else {
            $('#errorMsg').hide();
            window.location.href = "/organization/confirmation/submitConformation.html?owner=" + $rootScope.owner;
        }
    });

}]);
