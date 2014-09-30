﻿var signUp = angular.module('signUp', []);
signUp.controller("signupController", ['$scope', function ($scope) {
    $scope.Organization = 'false';
    $scope.volunteer = 'false';
    var OrganizationValue, volunteerValue;
    var sPageURL = document.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    var sParameterName = sURLVariables[0].split('=');
    var nameTarget = sParameterName[1];
    if (nameTarget == 'Organization') {
        OrganizationValue = 'true';
        $scope.Organization = 'true';
    } else if (nameTarget == 'volunteer') {
        volunteerValue = 'true';
        $scope.volunteer = 'true';
    }
    $scope.OrganizationToggle = function () {
        $scope.Organization = 'true';
        $scope.volunteer = 'false';
    }
    $scope.volunteerToggle = function () {
        $scope.volunteer = 'true';
        $scope.Organization = 'false';
    }
    $scope.signupForm = function () {
        
    }

    $(document).ready(function () {

    
        $('#errorMsg').hide();

        var
        errorDiv = $('#errorMsg'),
        errorList = $('#errorList'),
        email = $('#email'),
        logOpt = $('input[name="radioEmail"]'),
        password = $('#password'),
        firstname = $('input[name="firstname"]'),
        lastname = $('input[name="lastname"]'),
        city = $('input[name="city"]'),
        Organization = $('input[name="Organization"]'),
        username = $('input[name="username"]'),
        captcha = $('input[name="captcha"]'),
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

        $('#jobForm-section2').submit(function (e) {
            e.preventDefault();
            console.log(errorList);
            //First Name
            if (firstname.val() == '' || firstname.val() == null) {
                if (errorList.find('.errormessage-firstname').length == 0) {
                    $('<li />', { html: 'First Name required !', class: 'col-sm-6 errormessage-firstname' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: firstname.offset().top - 100
                        }, 500);
                        firstname.focus();
                    })
                    //$('#errorMsg').show();
                    firstname.parent().addClass('has-error');
                }
            }
            else {
                if (firstname.parent().hasClass('has-error')) {
                    firstname.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-firstname').length > 0) {
                    errorList.find('.errormessage-firstname').remove();
                    //$('#errorMsg').hide();
                }
            }

            //Last Name
            if (lastname.val() == '' || lastname.val() == null) {
                if (errorList.find('.errormessage-lastname').length == 0) {
                    $('<li />', { html: 'Last Name required !', class: 'col-sm-6 errormessage-lastname' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: lastname.offset().top - 100
                        }, 500);
                        lastname.focus();
                    })
                    //$('#errorMsg').show();
                    lastname.parent().addClass('has-error');
                }
            } else {
                if (lastname.parent().hasClass('has-error')) {
                    lastname.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-lastname').length > 0) {
                    errorList.find('.errormessage-lastname').remove();
                    //$('#errorMsg').hide();
                }
            }

            //Email
            if (email.val() == '' || email.val() == null) {
                if (errorList.find('.errormessage-form1mail').length == 0) {
                    var li = $('<li />', { html: 'Email required !', class: 'col-sm-6 errormessage-form1mail' });
                    li.appendTo(errorList);
                    email.parent().addClass('has-error');
                }
            } else {
                var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
                if (!re.test(email.val())) {
                    if (errorList.find('.col-sm-6 errormessage-form1mail').length == 0) {
                        var li = $('<li />', { class: '.col-sm-6 errormessage-form1mail' })
                        $('<label />', { html: 'Vul e-mail adres in.', for: 'email' }).appendTo(li);
                        li.appendTo(errorList)
                        $('#errorMsg').show();
                    }
                } else {
                    if (email.parent().hasClass('has-error')) {
                        email.parent().removeClass('has-error')
                    };
                    if (errorList.find('.errormessage-form1mail').length > 0) {
                        errorList.find('.errormessage-form1mail').remove();
                        $('#errorMsg').hide();
                    }
                }
            }

            // Country
            if ($('#country option:selected').val() == '0') {
                if (errorList.find('.errormessage-country').length == 0) {
                    $('<li />', { html: 'Country required !', class: 'col-sm-6 errormessage-country' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: $("#country").offset().top - 100
                        }, 500);
                        $("#country").focus();
                    });
                    //$('#errorMsg').show();
                    $('#country').parent().addClass('has-error');
                }
            } else {
                if ($('#country').parent().hasClass('has-error')) {
                    $('#country').parent().removeClass('has-error')
                };

                if (errorList.find('.errormessage-country').length > 0) {
                    errorList.find('.errormessage-country').remove();
                    //$('#errorMsg').hide();
                }
            }

            // City
            if (volunteerValue == 'true') {
                if (city.val() == '' || city.val() == null) {
                    if (errorList.find('.errormessage-city').length == 0) {
                        $('<li />', { html: 'City required !', class: 'col-sm-6 errormessage-city' })
                        .appendTo(errorList)
                        .click(function () {
                            $('html, body').animate({
                                scrollTop: street.offset().top - 100
                            }, 500);
                            city.focus();
                        });
                        //$('#errorMsg').show();
                        city.parent().addClass('has-error');
                    }
                } else {
                    if (city.parent().hasClass('has-error')) {
                        city.parent().removeClass('has-error')
                    };
                    if (errorList.find('.errormessage-city').length > 0) {
                        errorList.find('.errormessage-city').remove();
                        //$('#errorMsg').hide();
                    }
                }
            }

            // Organization
            if (OrganizationValue == 'true') {
                if (Organization.val() == '' || Organization.val() == null) {
                    if (errorList.find('.errormessage-Organization').length == 0) {
                        $('<li />', { html: 'Organization Name required !', class: 'col-sm-6 errormessage-Organization' })
                        .appendTo(errorList)
                        .click(function () {
                            $('html, body').animate({
                                scrollTop: Organization.offset().top - 100
                            }, 500);
                            city.focus();
                        });
                        //$('#errorMsg').show();
                        Organization.parent().addClass('has-error');
                    }
                } else {
                    if (Organization.parent().hasClass('has-error')) {
                        Organization.parent().removeClass('has-error')
                    };
                    if (errorList.find('.errormessage-Organization').length > 0) {
                        errorList.find('.errormessage-Organization').remove();
                        //$('#errorMsg').hide();
                    }
                }
            }

            // Username
            if (username.val() == '' || username.val() == null) {
                if (errorList.find('.errormessage-username').length == 0) {
                    $('<li />', { html: 'Username required !', class: 'col-sm-6 errormessage-username' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: street.offset().top - 100
                        }, 500);
                        city.focus();
                    });
                    //$('#errorMsg').show();
                    username.parent().addClass('has-error');
                }
            } else {
                if (username.parent().hasClass('has-error')) {
                    username.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-username').length > 0) {
                    errorList.find('.errormessage-username').remove();
                    //$('#errorMsg').hide();
                }
            }

            //Password
            if (password.val() == '' || password.val() == null) {
                if (errorList.find('.errormessage-password').length == 0) {
                    $('<li />', { html: 'Password required !', class: 'col-sm-6 errormessage-password' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: street.offset().top - 100
                        }, 500);
                        city.focus();
                    });
                    //$('#errorMsg').show();
                    password.parent().addClass('has-error');
                }
            } else {
                if (password.parent().hasClass('has-error')) {
                    password.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-password').length > 0) {
                    errorList.find('.errormessage-password').remove();
                    //$('#errorMsg').hide();
                }
            }

            //Captcha
            if (captcha.val() == '' || captcha.val() == null) {
                if (errorList.find('.errormessage-captcha').length == 0) {
                    $('<li />', { html: 'Captcha required !', class: 'col-sm-6 errormessage-captcha' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: street.offset().top - 100
                        }, 500);
                        city.focus();
                    });
                    //$('#errorMsg').show();
                    captcha.parent().addClass('has-error');
                }
            } else {
                if (captcha.parent().hasClass('has-error')) {
                    captcha.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-captcha').length > 0) {
                    errorList.find('.errormessage-captcha').remove();
                    //$('#errorMsg').hide();
                }
            }

            if (errorList.children('li').length > 0) {
                $('#errorMsg').show();
                $('html, body').animate({
                    scrollTop: 200
                }, 500);
            } else {
                $('#errorMsg').hide();
                if (volunteerValue == 'true') {
                    //window.location.href = '../langinPage/landing.html' + '?form=signup&fname=' + firstname.val() + '&user=volunteer'
                    window.location.href = '../langinPage/landing.html' + '?form=signup&owner=volunteer&fname=' + firstname.val() + '&lname=' + lastname.val() + '&email=' + email.val();
                }
                if (OrganizationValue == 'true') {
                    //window.location.href = '../langinPage/landing.html' + '?form=signup&fname=' + firstname.val() + '&user=Organization'
                    window.location.href = '../organization/search/searchVol.html' + '?form=signup&owner=Organization&fname=' + firstname.val() + '&lname=' + lastname.val() + '&email=' + email.val();
                }                
            }

        });
    });
}]);