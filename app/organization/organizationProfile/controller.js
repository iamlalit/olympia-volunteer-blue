
OrgVolApp.controller('landingPage', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $('#errorMsg').hide();
    var
  errorDiv = $('#errorMsg'),
  errorList = $('#errorList'),
  organizationName = $('#organizationName'),
  organizationNickName = $('#organizationNickName'),
  termsAndCondition = $('#termsAndCondition')  

    //on submit
    $('#organizationProfile').submit(function (e) {
        e.preventDefault();
        
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
            window.location.href = '/organization/organizationpcms/organizationpcms.html?organizationName='+organizationName.val() + '&owner=' + $rootScope.owner + "&secondOwner=" + $rootScope.secondOwner;
        }
    });
}]);