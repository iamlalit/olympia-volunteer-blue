
OrgVolApp.controller('landingPage', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $('#errorMsg').hide();
    var
  errorDiv = $('#errorMsg'),
  errorList = $('#errorList'),
  organizationName = $('#organizationName'),
  organizationNickName = $('#organizationNickName'),
  termsAndCondition = $('#termsAndCondition')  
  
    //on change of writing in any of input fields
    organizationName.change(function() {
        if (organizationName.val() == '' || organizationName.val() == null) {
            if (errorList.find('.errormessage-organizationName').length == 0) {
                $('<li />', { html: 'Organization Name required !', class: 'col-sm-6 errormessage-organizationName' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: organizationName.offset().top - 100
                    }, 500);
                    organizationName.focus();
                })
                $('#errorMsg').show();
                organizationName.parent().addClass('has-error');
            }
        }
        else {
            if (organizationName.parent().hasClass('has-error')) {
                organizationName.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-organizationName').length > 0) {
                errorList.find('.errormessage-organizationName').remove();
                $('#errorMsg').hide();
            }
        }
    });
    organizationNickName.change(function() {
            if (organizationNickName.val() == '' || organizationNickName.val() == null) {
                if (errorList.find('.errormessage-organizationNickName').length == 0) {
                    $('<li />', { html: 'Organization Nick Name required !', class: 'col-sm-6 errormessage-organizationNickName' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: organizationNickName.offset().top - 100
                        }, 500);
                        organizationNickName.focus();
                    })
                    $('#errorMsg').show();
                    organizationNickName.parent().addClass('has-error');
                }
            }
            else {
                if (organizationNickName.parent().hasClass('has-error')) {
                    organizationNickName.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-organizationNickName').length > 0) {
                    errorList.find('.errormessage-organizationNickName').remove();
                    $('#errorMsg').hide();
                }
            }
        });
    //on submit
    $('#organizationProfile').submit(function (e) {
        e.preventDefault();
        //Job title is required
        if (organizationName.val() == '' || organizationName.val() == null) {
            if (errorList.find('.errormessage-organizationName').length == 0) {
                $('<li />', { html: 'Organization name required !', class: 'col-sm-6 errormessage-organizationName' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: organizationName.offset().top - 100
                    }, 500);
                    organizationName.focus();
                })
                $('#errorMsg').show();
                organizationName.parent().addClass('has-error');
            }
        }
        else {
            if (organizationName.parent().hasClass('has-error')) {
                organizationName.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-organizationName').length > 0) {
                errorList.find('.errormessage-organizationName').remove();
                $('#errorMsg').hide();
            }
        }

        //nick name
        if (organizationNickName.val() == '' || organizationNickName.val() == null) {
            if (errorList.find('.errormessage-organizationNickName').length == 0) {
                $('<li />', { html: 'Organization nickname required !', class: 'col-sm-6 errormessage-organizationNickName' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: organizationNickName.offset().top - 100
                    }, 500);
                    organizationNickName.focus();
                })
                $('#errorMsg').show();
                organizationNickName.parent().addClass('has-error');
            }
        }
        else {
            if (organizationNickName.parent().hasClass('has-error')) {
                organizationNickName.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-organizationNickName').length > 0) {
                errorList.find('.errormessage-organizationNickName').remove();
                $('#errorMsg').hide();
            }
        }
        //Terms and condtion name
        if (termsAndCondition.is(":not(:checked)")) {

            if (errorList.find('.errormessage-termsAndCondition').length == 0) {
                $('<li />', { html: 'Terms and conditions sponsorship not accepted !', class: 'col-sm-6 errormessage-termsAndCondition' })
            .appendTo(errorList)
            .click(function () {
                $('html, body').animate({
                    scrollTop: termsAndCondition.offset().top - 100
                }, 500);
                termsAndCondition.focus();
            })
                    $('#errorMsg').show();
                termsAndCondition.parent().addClass('has-error');
            }
        }
        else {
            if (termsAndCondition.parent().hasClass('has-error')) {
                termsAndCondition.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-termsAndCondition').length > 0) {
                errorList.find('.errormessage-termsAndCondition').remove();
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
            window.location.href = '/organization/organizationpcms/organizationpcms.html?organizationName='+organizationName.val() + '&owner=' + $rootScope.owner;
        }
    });
}]);