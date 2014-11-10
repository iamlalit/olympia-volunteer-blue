//for volunteer controller
OrgVolApp.controller("signupVolController", ['$scope', function ($scope) {

    $scope.typeOfOwner = '';
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.typeOfOwner = getParameterByName('owner');    
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
        houseNo = $('input[name="Huisnummer"]'),
        postalCode = $('input[name="Postcode"]');        

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

            //postal code 
            if (postalCode.val() == '' || postalCode.val() == null) {
                if (errorList.find('.errormessage-postalCode').length == 0) {
                    $('<li />', { html: 'Postal code is required !', class: 'col-sm-6 errormessage-postalCode' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: postalCode.offset().top - 100
                        }, 500);
                        postalCode.focus();
                    })
                    //$('#errorMsg').show();
                    postalCode.parent().addClass('has-error');
                }
            } else {
                if (postalCode.parent().hasClass('has-error')) {
                    postalCode.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-postalCode').length > 0) {
                    errorList.find('.errormessage-postalCode').remove();
                    //$('#errorMsg').hide();
                }
            }

            //Email
            if (email.val() == '' || email.val() == null) {
                if (errorList.find('.errormessage-form1mail').length == 0) {
                    var li = $('<li />', { html: 'Email required !', class: 'col-sm-6 errormessage-form1mail' });
                    li.appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: email.offset().top - 100
                        }, 500);
                        email.focus();
                    })
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
            if (city.val() == '' || city.val() == null) {
                if (errorList.find('.errormessage-city').length == 0) {
                    $('<li />', { html: 'City required !', class: 'col-sm-6 errormessage-city' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: city.offset().top - 100
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

            // // Organization
            // if (OrganizationValue == 'true') {
            //     if (Organization.val() == '' || Organization.val() == null) {
            //         if (errorList.find('.errormessage-Organization').length == 0) {
            //             $('<li />', { html: 'Organization Name required !', class: 'col-sm-6 errormessage-Organization' })
            //             .appendTo(errorList)
            //             .click(function () {
            //                 $('html, body').animate({
            //                     scrollTop: Organization.offset().top - 100
            //                 }, 500);
            //                 Organization.focus();
            //             });
            //             //$('#errorMsg').show();
            //             Organization.parent().addClass('has-error');
            //         }
            //     } else {
            //         if (Organization.parent().hasClass('has-error')) {
            //             Organization.parent().removeClass('has-error')
            //         };
            //         if (errorList.find('.errormessage-Organization').length > 0) {
            //             errorList.find('.errormessage-Organization').remove();
            //             //$('#errorMsg').hide();
            //         }
            //     }
            // }

            // Username
            if (username.val() == '' || username.val() == null) {
                if (errorList.find('.errormessage-username').length == 0) {
                    $('<li />', { html: 'Username required !', class: 'col-sm-6 errormessage-username' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: username.offset().top - 100
                        }, 500);
                        username.focus();
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
                            scrollTop: password.offset().top - 100
                        }, 500);
                        password.focus();
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
                            scrollTop: captcha.offset().top - 100
                        }, 500);
                        captcha.focus();
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

            $scope.typeOfOwner = '';
            function getParameterByName(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(location.search);
                return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }
            $scope.typeOfOwner = getParameterByName('owner');
            if (errorList.children('li').length > 0) {
                $('#errorMsg').show();
                $('html, body').animate({
                    scrollTop: 200
                }, 500);
            } else {
                $('#errorMsg').hide();
                if($scope.typeOfOwner == 'volunteer'){
                    window.location.href = '/landingPage/landing.html' + '?owner=volunteer';
                }else if($scope.typeOfOwner == 'seekingHelp'){
                    window.location.href = '/landingPage/landing.html' + '?owner=seekingHelp';
                }else if($scope.typeOfOwner == 'joinOrganization'){
                    window.location.href = '/landingPage/landing.html' + '?owner=joinOrganization';
                }
                
            }

        });
    });
}]);
//for organization controller
OrgVolApp.controller("signupOrgController", ['$scope', function ($scope) {

    $scope.typeOfOwner = '';
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.typeOfOwner = getParameterByName('owner');    
    $(document).ready(function () {

    
        $('#errorMsg').hide();

        var
        errorDiv = $('#errorMsg'),
        errorList = $('#errorList'),
        email = $('#email'),
        logOpt = $('input[name="radioEmail"]'),
        groupName = $('input[name="groupname"]'),
        password = $('#password'),
        firstname = $('input[name="firstname"]'),
        lastname = $('input[name="lastname"]'),
        city = $('input[name="city"]'),
        Organization = $('input[name="Organization"]'),
        username = $('input[name="username"]'),
        captcha = $('input[name="captcha"]'),
        houseNo = $('input[name="Huisnummer"]'),
        nickname = $('input[name="nickname"]'),
        registrationNumber = $('input[name="registrationNumber"]'),
        postalCode = $('input[name="Postcode"]');        

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

            //group name for org1
            if($scope.typeOfOwner == 'org1'){
                if (groupName.val() == '' || groupName.val() == null) {
                    if (errorList.find('.errormessage-groupName').length == 0) {
                        $('<li />', { html: 'Group name required !', class: 'col-sm-6 errormessage-groupName' })
                        .appendTo(errorList)
                        .click(function () {
                            $('html, body').animate({
                                scrollTop: groupName.offset().top - 100
                            }, 500);
                            groupName.focus();
                        })
                        //$('#errorMsg').show();
                        groupName.parent().addClass('has-error');
                    }
                }
                else {
                    if (groupName.parent().hasClass('has-error')) {
                        groupName.parent().removeClass('has-error')
                    };
                    if (errorList.find('.errormessage-groupName').length > 0) {
                        errorList.find('.errormessage-groupName').remove();
                        //$('#errorMsg').hide();
                    }
                }
            }

            //First Name
            if (firstname.val() == '' || firstname.val() == null) {
                if (errorList.find('.errormessage-firstname').length == 0) {
                    $('<li />', { html: 'First name required !', class: 'col-sm-6 errormessage-firstname' })
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

            //postal code 
            if (postalCode.val() == '' || postalCode.val() == null) {
                if (errorList.find('.errormessage-postalCode').length == 0) {
                    $('<li />', { html: 'Postal code is required !', class: 'col-sm-6 errormessage-postalCode' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: postalCode.offset().top - 100
                        }, 500);
                        postalCode.focus();
                    })
                    //$('#errorMsg').show();
                    postalCode.parent().addClass('has-error');
                }
            } else {
                if (postalCode.parent().hasClass('has-error')) {
                    postalCode.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-postalCode').length > 0) {
                    errorList.find('.errormessage-postalCode').remove();
                    //$('#errorMsg').hide();
                }
            }

            //Email
            if (email.val() == '' || email.val() == null) {
                if (errorList.find('.errormessage-form1mail').length == 0) {
                    var li = $('<li />', { html: 'Email required !', class: 'col-sm-6 errormessage-form1mail' });
                    li.appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: email.offset().top - 100
                        }, 500);
                        email.focus();
                    })
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
            if (city.val() == '' || city.val() == null) {
                if (errorList.find('.errormessage-city').length == 0) {
                    $('<li />', { html: 'City required !', class: 'col-sm-6 errormessage-city' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: city.offset().top - 100
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

            // // Organization
            if ($scope.typeOfOwner == 'org2' || $scope.typeOfOwner == 'org4' || $scope.typeOfOwner == 'org3') {
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
            }

            // Username
            if (username.val() == '' || username.val() == null) {
                if (errorList.find('.errormessage-username').length == 0) {
                    $('<li />', { html: 'Username required !', class: 'col-sm-6 errormessage-username' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: username.offset().top - 100
                        }, 500);
                        username.focus();
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
                            scrollTop: password.offset().top - 100
                        }, 500);
                        password.focus();
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
                            scrollTop: captcha.offset().top - 100
                        }, 500);
                        captcha.focus();
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
            //Organization nickname 
            if ($scope.typeOfOwner == 'org2' || $scope.typeOfOwner == 'org4' || $scope.typeOfOwner == 'org3') {
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
            }
            //registered user is yes for registrationNumber
            if ($scope.typeOfOwner == 'org2' || $scope.typeOfOwner == 'org4' || $scope.typeOfOwner == 'org3') {
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
            }

            $scope.typeOfOwner = '';
            function getParameterByName(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(location.search);
                return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }
            $scope.typeOfOwner = getParameterByName('owner');
            if (errorList.children('li').length > 0) {
                $('#errorMsg').show();
                $('html, body').animate({
                    scrollTop: 200
                }, 500);
            } else {
                $('#errorMsg').hide();
                if($scope.typeOfOwner == 'volunteerGroup'){
                    window.location.href = '/landingPage/landing.html?owner=volunteerGroup';
                }else if($scope.typeOfOwner == 'organization'){
                    window.location.href = '/landingPage/landing.html?owner=organization';
                }else if($scope.typeOfOwner == 'org3'){
                    window.location.href = '/landingPage/landing.html?owner=organization';
                }else if($scope.typeOfOwner == 'org4'){
                    window.location.href = '/landingPage/landing.html?owner=organization';
                }
                
            }

        });
    });
}]);