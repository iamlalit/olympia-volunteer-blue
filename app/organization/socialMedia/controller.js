'use strict';
/* main App */
app.controller('socialMediaCtrl', function($scope){
    $scope.typeOfOwner = '';
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $scope.typeOfOwner = getParameterByName('owner');

});

$(document).ready(function(){
	$('#errorMsg1').hide();
	var linkedinID = $('#linkedinID'),
		linkedinPass = $('#linkedinPass'),
		errorList1 = $('#errorList1');
	linkedinID.change(function() {
        if (linkedinID.val() == '' || linkedinID.val() == null) {
            if (errorList1.find('.errormessage-linkedinID').length == 0) {
                $('<li />', { html: 'Linkedin ID is required !', class: 'col-sm-6 errormessage-linkedinID' })
                .appendTo(errorList1)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: linkedinID.offset().top - 100
                    }, 500);
                    linkedinID.focus();
                })
                //$('#errorMsg1').show();
                linkedinID.parent().addClass('has-error');
            }
        }
        else {
            if (linkedinID.parent().hasClass('has-error')) {
                linkedinID.parent().removeClass('has-error')
            };
            if (errorList1.find('.errormessage-linkedinID').length > 0) {
                errorList1.find('.errormessage-linkedinID').remove();
            	$('#errorMsg1').hide();
            }
        }
    });
	linkedinPass.change(function() {
        if (linkedinPass.val() == '' || linkedinPass.val() == null) {
            if (errorList1.find('.errormessage-linkedinPass').length == 0) {
                $('<li />', { html: 'Linkedin ID is required !', class: 'col-sm-6 errormessage-linkedinPass' })
                .appendTo(errorList1)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: linkedinPass.offset().top - 100
                    }, 500);
                    linkedinPass.focus();
                })
                //$('#errorMsg1').show();
                linkedinPass.parent().addClass('has-error');
            }
        }
        else {
            if (linkedinPass.parent().hasClass('has-error')) {
                linkedinPass.parent().removeClass('has-error')
            };
            if (errorList1.find('.errormessage-linkedinPass').length > 0) {
                errorList1.find('.errormessage-linkedinPass').remove();
            	$('#errorMsg1').hide();
            }
        }
    });

	$('#linkedinForm').submit(function (e) { 
		e.preventDefault();
        //linkedinID is required
        if (linkedinID.val() == '' || linkedinID.val() == null) {
            if (errorList1.find('.errormessage-linkedinID').length == 0) {
                $('<li />', { html: 'Linkedin ID is required!', class: 'col-sm-6 errormessage-linkedinID' })
				.appendTo(errorList1)
				.click(function () {
				    $('html, body').animate({
				        scrollTop: linkedinID.offset().top - 100
				    }, 500);
				    linkedinID.focus();
				})
                //$('#errorMsg1').show();
                linkedinID.parent().addClass('has-error');
            }
        }
        else {
            if (linkedinID.parent().hasClass('has-error')) {
                linkedinID.parent().removeClass('has-error')
            };
            if (errorList1.find('.errormessage-linkedinID').length > 0) {
                errorList1.find('.errormessage-linkedinID').remove();
                //$('#errorMsg1').hide();
            }
        }
        //password
        if (linkedinPass.val() == '' || linkedinPass.val() == null) {
            if (errorList1.find('.errormessage-linkedinPass').length == 0) {
                $('<li />', { html: 'Linkedin Password is required!', class: 'col-sm-6 errormessage-linkedinPass' })
				.appendTo(errorList1)
				.click(function () {
				    $('html, body').animate({
				        scrollTop: linkedinPass.offset().top - 100
				    }, 500);
				    linkedinPass.focus();
				})
                //$('#errorMsg1').show();
                linkedinPass.parent().addClass('has-error');
            }
        }
        else {
            if (linkedinPass.parent().hasClass('has-error')) {
                linkedinPass.parent().removeClass('has-error')
            };
            if (errorList1.find('.errormessage-linkedinPass').length > 0) {
                errorList1.find('.errormessage-linkedinPass').remove();
                //$('#errorMsg1').hide();
            }
        }
        if (errorList1.children('li').length > 0) {
            $('#errorMsg1').show();
        } else {
            $('#errorMsg1').hide();
        }
	});

//twitter validation
	$('#errorMsg2').hide();
	var twitterID = $('#twitterID'),
		twitterPass = $('#twitterPass'),
		errorList2 = $('#errorList2');
	
	$('#twitterForm').submit(function (e) { 
		e.preventDefault();
        //twitterID is required
        if (twitterID.val() == '' || twitterID.val() == null) {
            if (errorList2.find('.errormessage-twitterID').length == 0) {
                $('<li />', { html: 'Twitter ID is required!', class: 'col-sm-6 errormessage-twitterID' })
				.appendTo(errorList2)
				.click(function () {
				    $('html, body').animate({
				        scrollTop: twitterID.offset().top - 100
				    }, 500);
				    twitterID.focus();
				})
                //$('#errorMsg2').show();
                twitterID.parent().addClass('has-error');
            }
        }
        else {
            if (twitterID.parent().hasClass('has-error')) {
                twitterID.parent().removeClass('has-error')
            };
            if (errorList2.find('.errormessage-twitterID').length > 0) {
                errorList2.find('.errormessage-twitterID').remove();
                //$('#errorMsg2').hide();
            }
        }
        //password
        if (twitterPass.val() == '' || twitterPass.val() == null) {
            if (errorList2.find('.errormessage-twitterPass').length == 0) {
                $('<li />', { html: 'Twitter Password is required!', class: 'col-sm-6 errormessage-twitterPass' })
				.appendTo(errorList2)
				.click(function () {
				    $('html, body').animate({
				        scrollTop: twitterPass.offset().top - 100
				    }, 500);
				    twitterPass.focus();
				})
                //$('#errorMsg2').show();
                twitterPass.parent().addClass('has-error');
            }
        }
        else {
            if (twitterPass.parent().hasClass('has-error')) {
                twitterPass.parent().removeClass('has-error')
            };
            if (errorList2.find('.errormessage-twitterPass').length > 0) {
                errorList2.find('.errormessage-twitterPass').remove();
                $('#errorMsg2').hide();
            }
        }
        if (errorList2.children('li').length > 0) {
            $('#errorMsg2').show();
        } else {
            $('#errorMsg2').hide();
        }
	});
	twitterID.change(function() {
        if (twitterID.val() == '' || twitterID.val() == null) {
            if (errorList2.find('.errormessage-twitterID').length == 0) {
                $('<li />', { html: 'Twitter ID is required !', class: 'col-sm-6 errormessage-twitterID' })
                .appendTo(errorList2)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: twitterID.offset().top - 100
                    }, 500);
                    twitterID.focus();
                })
                //$('#errorMsg2').show();
                twitterID.parent().addClass('has-error');
            }
        }
        else {
            if (twitterID.parent().hasClass('has-error')) {
                twitterID.parent().removeClass('has-error')
            };
            if (errorList2.find('.errormessage-twitterID').length > 0) {
                errorList2.find('.errormessage-twitterID').remove();
            	$('#errorMsg2').hide();
            }
        }
    });
	twitterPass.change(function() {
        if (twitterPass.val() == '' || twitterPass.val() == null) {
            if (errorList2.find('.errormessage-twitterPass').length == 0) {
                $('<li />', { html: 'Twitter Password is required !', class: 'col-sm-6 errormessage-twitterPass' })
                .appendTo(errorList2)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: twitterPass.offset().top - 100
                    }, 500);
                    twitterPass.focus();
                })
                //$('#errorMsg2').show();
                twitterPass.parent().addClass('has-error');
            }
        }
        else {
            if (twitterPass.parent().hasClass('has-error')) {
                twitterPass.parent().removeClass('has-error')
            };
            if (errorList2.find('.errormessage-twitterPass').length > 0) {
                errorList2.find('.errormessage-twitterPass').remove();
            	$('#errorMsg2').hide();
            }
        }
    });


//facebook validation
	$('#errorMsg3').hide();
	var facebookID = $('#facebookID'),
		facebookPass = $('#facebookPass'),
		errorList3 = $('#errorList3');
	
	$('#facebookForm').submit(function (e) { 
		e.preventDefault();
        //facebookID is required
        if (facebookID.val() == '' || facebookID.val() == null) {
            if (errorList3.find('.errormessage-facebookID').length == 0) {
                $('<li />', { html: 'Facebook ID is required!', class: 'col-sm-6 errormessage-facebookID' })
				.appendTo(errorList3)
				.click(function () {
				    $('html, body').animate({
				        scrollTop: facebookID.offset().top - 100
				    }, 500);
				    facebookID.focus();
				})
                //$('#errorMsg3').show();
                facebookID.parent().addClass('has-error');
            }
        }
        else {
            if (facebookID.parent().hasClass('has-error')) {
                facebookID.parent().removeClass('has-error')
            };
            if (errorList3.find('.errormessage-facebookID').length > 0) {
                errorList3.find('.errormessage-facebookID').remove();
                //$('#errorMsg3').hide();
            }
        }
        //password
        if (facebookPass.val() == '' || facebookPass.val() == null) {
            if (errorList3.find('.errormessage-facebookPass').length == 0) {
                $('<li />', { html: 'Facebook Password is required!', class: 'col-sm-6 errormessage-facebookPass' })
				.appendTo(errorList3)
				.click(function () {
				    $('html, body').animate({
				        scrollTop: facebookPass.offset().top - 100
				    }, 500);
				    facebookPass.focus();
				})
                //$('#errorMsg3').show();
                facebookPass.parent().addClass('has-error');
            }
        }
        else {
            if (facebookPass.parent().hasClass('has-error')) {
                facebookPass.parent().removeClass('has-error')
            };
            if (errorList3.find('.errormessage-facebookPass').length > 0) {
                errorList3.find('.errormessage-facebookPass').remove();
                //$('#errorMsg3').hide();
            }
        }
        if (errorList3.children('li').length > 0) {
            $('#errorMsg3').show();            
        } else {
            $('#errorMsg3').hide();
        }
	});
	facebookID.change(function() {
        if (facebookID.val() == '' || facebookID.val() == null) {
            if (errorList3.find('.errormessage-facebookID').length == 0) {
                $('<li />', { html: 'Facebook ID is required !', class: 'col-sm-6 errormessage-facebookID' })
                .appendTo(errorList3)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: facebookID.offset().top - 100
                    }, 500);
                    facebookID.focus();
                })
                //$('#errorMsg3').show();
                facebookID.parent().addClass('has-error');
            }
        }
        else {
            if (facebookID.parent().hasClass('has-error')) {
                facebookID.parent().removeClass('has-error')
            };
            if (errorList3.find('.errormessage-facebookID').length > 0) {
                errorList3.find('.errormessage-facebookID').remove();
            	$('#errorMsg3').hide();
            }
        }
    });
	facebookPass.change(function() {
        if (facebookPass.val() == '' || facebookPass.val() == null) {
            if (errorList3.find('.errormessage-facebookPass').length == 0) {
                $('<li />', { html: 'Facebook Password is required !', class: 'col-sm-6 errormessage-facebookPass' })
                .appendTo(errorList3)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: facebookPass.offset().top - 100
                    }, 500);
                    facebookPass.focus();
                })
                //$('#errorMsg3').show();
                facebookPass.parent().addClass('has-error');
            }
        }
        else {
            if (facebookPass.parent().hasClass('has-error')) {
                facebookPass.parent().removeClass('has-error');
            };
            if (errorList3.find('.errormessage-facebookPass').length > 0) {
                errorList3.find('.errormessage-facebookPass').remove();
            	$('#errorMsg3').hide();
            }
        }
    });
		
});