'use strict';

OrgVolApp.controller('postJobCntrl', ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.cancelSuggestSkill = function(){
        $('#errorMsg3').hide();
        errorList3.find('.errormessage-SkillLink').remove();
        SkillLink.parent().removeClass('has-error');
        errorList3.find('.errormessage-skillDescription').remove();
        skillDescription.parent().removeClass('has-error');
        errorList3.find('.errormessage-skillname').remove();
        skillname.parent().removeClass('has-error');
        skillname.val('');
        skillDescription.val('');
        SkillLink.val('');
        $('#suggestSkillBox').modal('hide');
    }

    $scope.cancelSuggestDiploma = function(){
        $('#errorMsg4').hide();
        errorList4.find('.errormessage-diplomaLink').remove();
        diplomaLink.parent().removeClass('has-error');
        errorList4.find('.errormessage-diplomaDescription').remove();
        diplomaDescription.parent().removeClass('has-error');
        errorList4.find('.errormessage-diplomaname').remove();
        diplomaname.parent().removeClass('has-error');
        diplomaname.val('');
        diplomaDescription.val('');
        diplomaLink.val('');
        $('#suggestDiplomaBox').modal('hide');
    }

    //validation part
        $('#errorMsg').hide();

    var
    errorDiv = $('#errorMsg'),
    errorList = $('#errorList'),
    jobType = $('#job-type'),
    logOpt = $('input[name="radioEmail"]'),
    jobTitle = $('#form-control-weight'),
    describeWork = $('#text-content'),
    firstname = $('input[name="firstname"]'),
    lastname = $('input[name="lastname"]'),
    city = $('input[name="city"]'),
    username = $('input[name="username"]'),
    //gender = $('input[name="Gaslachet"]'),
    //phone = $('input[name="Telefoonnummer"]'),
    //street = $('input[name="Straat"]'),
    houseNo = $('input[name="Huisnummer"]'),
    postalCode = $('input[name="Postcode"]'),
    residense = $('input[name="Woonplaats"]'),
    cv = $('input[name="cv"]'),
    ques1 = $('input[name="ques1"]'),
    moreHelp = $('input[name="optionsRadios"]'),
    terms = $('#terms');

    var
    emailStr,
    emailRadioStr,
    firstnameStr,
    lastnameStr,
    genderStr,
    dobmonthStr,
    dobdayStr,
    dobyearStr,
    phoneStr,
    streetStr,
    houseNoStr,
    postalCodeStr,
    residenseStr,
    cvStr,
    ques2Str,
    moreHelpStr,
    termsStr,
    ques1Str;

    //on change of writing in any of input fields
    jobTitle.change(function() {
        if (jobTitle.val() == '' || jobTitle.val() == null) {
            if (errorList.find('.errormessage-jobTitle').length == 0) {
                $('<li />', { html: 'Job title required !', class: 'col-sm-6 errormessage-jobTitle' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: jobTitle.offset().top - 100
                    }, 500);
                    jobTitle.focus();
                })
                $('#errorMsg').show();
                jobTitle.parent().addClass('has-error');
            }
        }
        else {
            if (jobTitle.parent().hasClass('has-error')) {
                jobTitle.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-jobTitle').length > 0) {
                errorList.find('.errormessage-jobTitle').remove();
                $('#errorMsg').hide();
            }
        }
    });
    describeWork.change(function() {
        if (describeWork.val() == '' || describeWork.val() == null) {
            if (errorList.find('.errormessage-describeWork').length == 0) {
                $('<li />', { html: 'Describe the work done is required !', class: 'col-sm-6 errormessage-describeWork' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: describeWork.offset().top - 100
                    }, 500);
                    describeWork.focus();
                })
                $('#errorMsg').show();
                describeWork.parent().addClass('has-error');
            }
        }
        else {
            if (describeWork.parent().hasClass('has-error')) {
                describeWork.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-describeWork').length > 0) {
                errorList.find('.errormessage-describeWork').remove();
                $('#errorMsg').hide();
            }
        }
    });


    //on submit
    $('#postJobForm').submit(function (e) {
        e.preventDefault();
        //Job title is required
        if (jobTitle.val() == '' || jobTitle.val() == null) {
            if (errorList.find('.errormessage-jobTitle').length == 0) {
                $('<li />', { html: 'Job title required !', class: 'col-sm-6 errormessage-jobTitle' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: jobTitle.offset().top - 100
                    }, 500);
                    jobTitle.focus();
                })
                $('#errorMsg').show();
                jobTitle.parent().addClass('has-error');
            }
        }
        else {
            if (jobTitle.parent().hasClass('has-error')) {
                jobTitle.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-jobTitle').length > 0) {
                errorList.find('.errormessage-jobTitle').remove();
                $('#errorMsg').hide();
            }
        }

        //job Type is requried
        if (jobType.val() == '' || jobType.val() == null) {
            if (jobType.find('.errormessage-jobType').length == 0) {
                $('<li />', { html: 'Job type is required !', class: 'col-sm-6 errormessage-jobType' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: jobType.offset().top - 100
                    }, 500);
                    jobType.focus();
                })
                $('#errorMsg').show();
                jobType.parent().addClass('has-error');
            }
        } else {
            if (jobType.parent().hasClass('has-error')) {
                jobType.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-jobType').length > 0) {
                errorList.find('.errormessage-jobType').remove();
                $('#errorMsg').hide();
            }
        }

        //Describe the work to be done
        if (describeWork.val() == '' || describeWork.val() == null) {
            if (errorList.find('.errormessage-describeWork').length == 0) {
                var li = $('<li />', {html: 'Describe the work done is required !', class: 'col-sm-6 errormessage-describeWork' });
                li.appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: describeWork.offset().top - 100
                    }, 500);
                    describeWork.focus();
                });
                $('#errorMsg').show();
                describeWork.parent().addClass('has-error');
            }
        } else {
           
            if (describeWork.parent().hasClass('has-error')) {
                describeWork.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-describeWork').length > 0) {
                errorList.find('.errormessage-describeWork').remove();
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
            window.location.href = '../confirmation/submitConformation.html?'+ 'jobTitle='+jobTitle.val()+'&jobType=' + jobType.val() + '&describeWork='+describeWork.val() + "&owner=" + $rootScope.owner + "&secondOwner=" + $rootScope.secondOwner;
            
        }
    });
    
}]);
