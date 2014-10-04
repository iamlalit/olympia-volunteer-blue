var signUp = angular.module('signUp', []);
signUp.controller("signupController", ['$scope', function ($scope) {
    
    $(document).ready(function () {

    
        $('#errorMsg').hide();

        var
        errorDiv = $('#errorMsg'),
        errorList = $('#errorList'),
        Organization = $('input[name="Organization"]'),
        registered = $('#registered'),
        registrationNumber = $('input[name="registrationNumber"]'),
        nickname = $('input[name="nickname"]');

        $('#jobForm-section2').submit(function (e) {
            e.preventDefault();

            // Organization
            if (Organization.val() == '' || Organization.val() == null) {
                if (errorList.find('.errormessage-Organization').length == 0) {
                    $('<li />', { html: 'Organization Name required !', class: 'col-sm-6 errormessage-Organization' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: Organization.offset().top - 100
                        }, 500);
                        Organization.focus();
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

            //Organization nickname 
            if (nickname.val() == '' || nickname.val() == null) {
                if (errorList.find('.errormessage-nickname').length == 0) {
                    $('<li />', { html: 'Organization Nick Name required !', class: 'col-sm-6 errormessage-nickname' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: nickname.offset().top - 100
                        }, 500);
                        nickname.focus();
                    });
                    //$('#errorMsg').show();
                    nickname.parent().addClass('has-error');
                }
            } else {
                if (nickname.parent().hasClass('has-error')) {
                    nickname.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-nickname').length > 0) {
                    errorList.find('.errormessage-nickname').remove();
                    //$('#errorMsg').hide();
                }
            }
            //registered user is yes for registrationNumber
            if($('#registered').is(':checked')) { 
                if (registrationNumber.val() == '' || registrationNumber.val() == null) {
                    if (errorList.find('.errormessage-registrationNumber').length == 0) {
                        $('<li />', { html: 'Registration Number is required !', class: 'col-sm-6 errormessage-registrationNumber' })
                        .appendTo(errorList)
                        .click(function () {
                            $('html, body').animate({
                                scrollTop: registrationNumber.offset().top - 100
                            }, 500);
                            registrationNumber.focus();
                        });
                        //$('#errorMsg').show();
                        registrationNumber.parent().addClass('has-error');
                    }
                } else {
                    if (registrationNumber.parent().hasClass('has-error')) {
                        registrationNumber.parent().removeClass('has-error')
                    };
                    if (errorList.find('.errormessage-registrationNumber').length > 0) {
                        errorList.find('.errormessage-registrationNumber').remove();
                        //$('#errorMsg').hide();
                    }
                }
            }else{
                //no is choosen
                registrationNumber.val('');
                errorList.find('.errormessage-registrationNumber').remove();
                registrationNumber.parent().removeClass('has-error');
            }

            if (errorList.children('li').length > 0) {
                $('#errorMsg').show();
                $('html, body').animate({
                    scrollTop: 100
                }, 500);
            } else {
                $('#errorMsg').hide();
                window.location.href = '../../organization/search/searchVol.html?owner=Organization';
            }

        });
    });
}]);