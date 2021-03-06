﻿
OrgVolApp.controller('jobDetails', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
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

    $scope.organizationIndividual = ["Red Cross NL", "Global Conscience Initiative"]

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
            window.location.href = "../confirmation/confirmation.html?owner=" + $rootScope.owner + "&secondOwner=" + $rootScope.secondOwner;
        }

    });


    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.jobName = getParameterByName('jobName');
    $scope.jobDate = getParameterByName('jobDate');
    $scope.postedBy = getParameterByName('postedBy');
}]);
