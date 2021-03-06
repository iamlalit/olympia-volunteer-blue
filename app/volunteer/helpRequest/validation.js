$(document).ready(function () {
    $('#errorMsg').hide();

    var
	errorDiv = $('#errorMsg'),
	errorList = $('#errorList'),
	jobType = $('#job-type'),
	logOpt = $('input[name="radioEmail"]'),
	jobTitle = $('#form-control-weight'),
    describeWork = $('#text-content')
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

        // Country
    //     if ($('#country option:selected').val() == '0') {
    //         if (errorList.find('.errormessage-country').length == 0) {
    //             $('<li />', { html: 'Country required !', class: 'col-sm-6 errormessage-country' })
				// .appendTo(errorList)
				// .click(function () {
				//     $('html, body').animate({
				//         scrollTop: $("#country").offset().top - 100
				//     }, 500);
				//     $("#country").focus();
				// });
    //             //$('#errorMsg').show();
    //             $('#country').parent().addClass('has-error');
    //         }
    //     } else {
    //         if ($('#country').parent().hasClass('has-error')) {
    //             $('#country').parent().removeClass('has-error')
    //         };

    //         if (errorList.find('.errormessage-country').length > 0) {
    //             errorList.find('.errormessage-country').remove();
    //             //$('#errorMsg').hide();
    //         }
    //     }

    //     // City
    //     if (city.val() == '' || city.val() == null) {
    //         if (errorList.find('.errormessage-city').length == 0) {
    //             $('<li />', { html: 'City required !', class: 'col-sm-6 errormessage-city' })
				// .appendTo(errorList)
				// .click(function () {
				//     $('html, body').animate({
				//         scrollTop: street.offset().top - 100
				//     }, 500);
				//     city.focus();
				// });
    //             //$('#errorMsg').show();
    //             city.parent().addClass('has-error');
    //         }
    //     } else {
    //         if (city.parent().hasClass('has-error')) {
    //             city.parent().removeClass('has-error')
    //         };
    //         if (city.find('.errormessage-street').length > 0) {
    //             city.find('.errormessage-street').remove();
    //             //$('#errorMsg').hide();
    //         }
    //     }

    //     // Username
    //     if (username.val() == '' || username.val() == null) {
    //         if (errorList.find('.errormessage-username').length == 0) {
    //             $('<li />', { html: 'Username required !', class: 'col-sm-6 errormessage-street' })
				// .appendTo(errorList)
				// .click(function () {
				//     $('html, body').animate({
				//         scrollTop: street.offset().top - 100
				//     }, 500);
				//     city.focus();
				// });
    //             //$('#errorMsg').show();
    //             username.parent().addClass('has-error');
    //         }
    //     } else {
    //         if (username.parent().hasClass('has-error')) {
    //             username.parent().removeClass('has-error')
    //         };
    //         if (username.find('.errormessage-street').length > 0) {
    //             username.find('.errormessage-street').remove();
    //             //$('#errorMsg').hide();
    //         }
    //     }

    //     //Password
    //     if (password.val() == '' || password.val() == null) {
    //         if (errorList.find('.errormessage-password').length == 0) {
    //             $('<li />', { html: 'Password required !', class: 'col-sm-6 errormessage-password' })
				// .appendTo(errorList)
				// .click(function () {
				//     $('html, body').animate({
				//         scrollTop: street.offset().top - 100
				//     }, 500);
				//     city.focus();
				// });
    //             //$('#errorMsg').show();
    //             password.parent().addClass('has-error');
    //         }
    //     } else {
    //         if (password.parent().hasClass('has-error')) {
    //             password.parent().removeClass('has-error')
    //         };
    //         if (password.find('.errormessage-street').length > 0) {
    //             password.find('.errormessage-street').remove();
    //             //$('#errorMsg').hide();
    //         }
    //     }

        // Question 1
        //$.each(ques1, function () {
        //    if (this.checked)
        //        ques1Str = this.value;
        //
        //    if (ques1Str == '' || ques1Str == undefined) {
        //        if (errorList.find('.errormessage-ques1').length == 0) {
        //            $('<li />', { html: 'Ben je in het bezit van een Heftruckcertificaat?', class: 'col-sm-6 errormessage-ques1' })
		//			.appendTo(errorList)
		//			.click(function () {
		//			    $('html, body').animate({
		//			        scrollTop: $("#ques1container").offset().top - 100
		//			    }, 500);
		//			});
        //            //$('#errorMsg').show();
        //            ques1.parent().parent().parent().addClass('has-error');
        //        }
        //    } else {
        //        if (ques1.parent().parent().parent().hasClass('has-error')) {
        //            ques1.parent().parent().parent().removeClass('has-error')
        //        };
        //        if (errorList.find('.errormessage-ques1').length > 0) {
        //            errorList.find('.errormessage-ques1').remove();
        //            //$('#errorMsg').hide();
        //        }
        //        //localStorage.setItem('logQues1', ques1Str);
        //    }
        //});

        // Experiance
        //if (parseInt($('#xp option:selected').val()) == 0) {
        //    if (errorList.find('.errormessage-xp').length == 0) {
        //        $('<li />', { html: 'Hoeveel jaar heb je ervaring als heftruckchauffeur?', class: 'col-sm-6 errormessage-xp' })
		//		.appendTo(errorList)
		//		.click(function () {
		//		    $('html, body').animate({
		//		        scrollTop: $("#xp").offset().top - 100
		//		    }, 500);
		//		    $('#xp').focus();
		//		});
        //        //$('#errorMsg').show();
        //        $('#xp').parent().parent().addClass('has-error');
        //    }
        //} else {
        //    if ($('#xp').parent().parent().hasClass('has-error')) {
        //        $('#xp').parent().parent().removeClass('has-error')
        //    };
        //
        //    if (errorList.find('.errormessage-xp').length > 0) {
        //        errorList.find('.errormessage-xp').remove();
        //        //$('#errorMsg').hide();
        //    }
        //
        //    //localStorage.setItem('logQues2', $('#xp option:selected').val());
        //}

        //$.each(moreHelp, function () {
        //    if (this.checked)
        //        moreHelpStr = this.value;
        //
        //    if (moreHelpStr == '' || moreHelpStr == null || moreHelpStr == undefined) {
        //        if (errorList.find('.errormessage-moreHelp').length == 0) {
        //            $('<li />', { html: 'Waarvan moet Olympia jou op de hoogte houden:', class: 'col-sm-6 errormessage-moreHelp' }).
		//			appendTo(errorList)
		//			.click(function () {
		//			    $('html, body').animate({
		//			        scrollTop: $("#botChk").offset().top - 100
		//			    }, 500);
		//			    $('#botChk').focus();
		//			});
        //            //$('#errorMsg').show();
        //            moreHelp.parent().parent().parent().parent().parent().addClass('has-error');
        //        }
        //    } else {
        //        if (moreHelp.parent().parent().parent().parent().parent().hasClass('has-error')) {
        //            moreHelp.parent().parent().parent().parent().parent().removeClass('has-error')
        //        };
        //        if (errorList.find('.errormessage-moreHelp').length > 0) {
        //            errorList.find('.errormessage-moreHelp').remove();
        //            //$('#errorMsg').hide();
        //        }
        //        //localStorage.setItem('logMoreHelp', moreHelpStr);
        //    }
        //});

        //if (terms.is(':checked') == true) {
        //    if (terms.parent().parent().parent().parent().parent().hasClass('has-error')) {
        //        terms.parent().parent().parent().parent().parent().removeClass('has-error')
        //    };
        //    if (errorList.find('.errormessage-terms').length > 0) {
        //        errorList.find('.errormessage-terms').remove();
        //        //$('#errorMsg').hide();
        //    }
        //} else {
        //    if (errorList.find('.errormessage-terms').length == 0) {
        //        $('<li />', { html: 'Ga je akkoord met de privacy verklaring?', class: 'col-sm-6 errormessage-terms' })
		//		.appendTo(errorList)
		//		.click(function () {
		//		    $('html, body').animate({
		//		        scrollTop: terms.offset().top - 100
		//		    }, 500);
		//		    terms.focus();
		//		});
        //        //$('#errorMsg').show();
        //        terms.parent().parent().parent().parent().parent().addClass('has-error');
        //    }
        //}

        if (errorList.children('li').length > 0) {
            $('#errorMsg').show();
            $('html, body').animate({
                scrollTop: 100
            }, 500);
        } else {
            $('#errorMsg').hide();
            window.location.href = '../confirmation/submitConformation.html?'+ 'jobTitle='+jobTitle.val()+'&jobType=' + jobType.val() + '&describeWork='+describeWork.val();
            
        }

    });
    //-------------------

    //$('#tooltip1').popover({
    //    container: 'body',
    //    html: true
    //})
	//.css({ 'cursor': 'pointer' });

    //$(document).click(function (e) {
    //    $('#tooltip1').each(function () {
    //        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
    //            //$(this).popover('hide');
    //            if ($(this).data('bs.popover').tip().hasClass('in')) {
    //                $(this).popover('toggle');
    //            }
    //
    //            return;
    //        }
    //    });
    //});
});

//$(document).ready(function () {
//    $('#text-content').on('blur', function () {
//        $('#zoomTextarea').removeClass('foucs-color-text')
//    }).on('focus', function () {
//        $('#zoomTextarea').addClass('foucs-color-text')
//    });
//});

//$(document).ready(function () {
//    $('#pastwork-info-container').hide();
//
//    var id = 0;
//
//    $('#manual-xp-add').click(function () {
//
//        id += 1;
//
//        var // cache variables
//		functie1 = $('#pop-functie'),
//		bedrijf = $('#pop-bedrijf'),
//		vestigingsplaats = $('#pop-Vestigingsplaats'),
//		startMonth1 = $('#pop-startdatum-maand-1'),
//		startYear1 = $('#pop-startdatum-jaar-1'),
//		endMonth1 = $('#pop-einddatum-maand-1'),
//		endYear1 = $('#pop-einddatum-jaar-1'),
//		funtieBeschrijving = $('#FuntieBeschrijving');
//
//        var // localstorage
//		functie1Str,
//		bedrijfStr,
//		vestigingsplaatsStr,
//		startMonth1Str,
//		startYear1Str,
//		endMonth1Str,
//		endYear1Str,
//		funtieBeschrijvingStr;
//
//
//        if (functie1.val() == '' || functie1.val() == null) {
//            functie1.parent().parent().addClass('has-error');
//        } else {
//            if (functie1.parent().parent().hasClass('has-error')) {
//                functie1.parent().parent().removeClass('has-error')
//            };
//            functie1Str = functie1.val();
//        }
//
//        if (bedrijf.val() == '' || bedrijf.val() == null) {
//            bedrijf.parent().parent().addClass('has-error');
//        } else {
//            if (bedrijf.parent().parent().hasClass('has-error')) {
//                bedrijf.parent().parent().removeClass('has-error')
//            };
//            bedrijfStr = bedrijf.val();
//        }
//
//        if (vestigingsplaats.val() == '' || vestigingsplaats.val() == null) {
//            vestigingsplaats.parent().parent().addClass('has-error');
//        } else {
//            if (vestigingsplaats.parent().parent().hasClass('has-error')) {
//                vestigingsplaats.parent().parent().removeClass('has-error')
//            };
//            vestigingsplaatsStr = vestigingsplaats.val();
//        }
//
//        if (funtieBeschrijving.val() == '' || funtieBeschrijving.val() == null) {
//            funtieBeschrijving.parent().parent().addClass('has-error');
//        } else {
//            if (funtieBeschrijving.parent().parent().hasClass('has-error')) {
//                funtieBeschrijving.parent().parent().removeClass('has-error')
//            };
//            funtieBeschrijvingStr = funtieBeschrijving.val();
//        }
//
//        if ($('#pop-startdatum-maand-1 option:selected').val() == 0) {
//            $('#pop-startdatum-maand-1').parent().parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-startdatum-maand-1').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-startdatum-maand-1').parent().parent().parent().parent().removeClass('has-error')
//            };
//            startMonth1Str = $('#pop-startdatum-maand-1 option:selected').val()
//        }
//
//        if ($('#pop-startdatum-jaar-1 option:selected').val() == 0) {
//            $('#pop-startdatum-jaar-1').parent().parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-startdatum-jaar-1').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-startdatum-jaar-1').parent().parent().parent().parent().removeClass('has-error')
//            };
//            startYear1Str = $('#pop-startdatum-jaar-1 option:selected').val();
//        }
//
//        if ($('#pop-einddatum-maand-1 option:selected').val() == 0) {
//            $('#pop-einddatum-maand-1').parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-einddatum-maand-1').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-einddatum-maand-1').parent().parent().parent().parent().removeClass('has-error')
//            };
//            endMonth1Str = $('#pop-einddatum-maand-1 option:selected').val();
//        }
//
//        if ($('#pop-einddatum-jaar-1 option:selected').val() == 0) {
//            $('#pop-einddatum-jaar-1').parent().parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-einddatum-jaar-1').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-einddatum-jaar-1').parent().parent().parent().parent().removeClass('has-error')
//            };
//            endYear1Str = $('#pop-einddatum-jaar-1 option:selected').val();
//        }
//
//        if (
//			$('#pop-einddatum-jaar-1 option:selected').val() == 0 ||
//			$('#pop-einddatum-maand-1 option:selected').val() == 0 ||
//			$('#pop-startdatum-jaar-1 option:selected').val() == 0 ||
//			$('#pop-startdatum-maand-1 option:selected').val() == 0 ||
//			functie1.val() == '' ||
//			funtieBeschrijving.val() == '' ||
//			vestigingsplaats.val() == '' || bedrijf.val() == '') {
//            return false;
//        } else {
//
//            $('#pastwork-info-container').show();
//            $('#pastwork-info-container').append(
//				'<div class="panel panel-default">' +
//					'<div class="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapse' + id + '">' +
//						'<h4 class="panel-title">' +
//							'<div class="col-sm-6" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' +
//							startMonth1Str + '-' + startYear1Str + ' - ' + endMonth1Str + '-' + endYear1Str + ', ' + functie1Str + ', ' + bedrijfStr + ', ' + vestigingsplaatsStr +
//							'</div>' +
//							'<div class="col-sm-3 text-right" style="position: relative"><button class="btn btn-default btn-sm btn-linkedin" style="position: absolute; right: -1px; top: -7px; padding: 3px 10px;"><img src="../img/import.png" height="16" style="position: relative; top: -4px;"> <strong>Linked</strong> <i class="olympia-linkedin2"></i></button></div>' +
//							'<div class="col-sm-3 text-right"><a href="javascript:void(0)">Verwijderen</a></div>' +
//							'<div class="clearfix"></div>' +
//						'</h4>' +
//					'</div>' +
//					'<div id="collapse' + id + '" class="panel-collapse collapse in">' +
//						'<div class="panel-body">' +
//							'<ul class="row" id="pastwork-info" style="list-style:none; padding: 0">' +
//								'<li class="col-sm-6">Startdatum :</li><li class="col-sm-6">' + startMonth1Str + '-' + startYear1Str + '</li>' +
//								'<li class="col-sm-6">Einddatum :</li><li class="col-sm-6">' + endMonth1Str + '-' + endYear1Str + '</li>' +
//								'<li class="col-sm-6">Funtie :</li><li class="col-sm-6">' + functie1Str + '</li>' +
//								'<li class="col-sm-6">bedrijf :</li><li class="col-sm-6">' + bedrijfStr + '</li>' +
//								'<li class="col-sm-6">Plaats :</li><li class="col-sm-6">' + vestigingsplaatsStr + '</li>' +
//								'<li class="col-sm-6">FuntieBeschrijving :</li><li class="col-sm-6">' + funtieBeschrijvingStr + '</li>' +
//							'</ul>' +
//						'</div>' +
//					'</div>' +
//				'</div>'
//			);
//
//            $('#pastWork').modal('hide');
//
//
//            $('#past-job input, #past-job select, #past-job textarea').each(function () {
//                var input = $(this);
//                if (input !== '') {
//                    input.val("");
//                }
//            });
//        }
//    });
//});

$(document).ready(function () {
 //skills suggestion

    $('#errorMsg3').hide();
    var errorList3 = $('#errorList3');
    var skillname = $("#skillname");
    var skillDescription = $("#skillDescription");
    var SkillLink = $("#SkillLink");
    
    $('#suggestSkillForm')
    $('#suggestSkillForm').submit(function (e) {
        e.preventDefault();
        if (skillname.val() == '' || skillname.val() == null) {
            if (errorList3.find('.errormessage-skillname').length == 0) {
                $('<li />', { html: 'Skill is required !', class: 'col-sm-6 errormessage-skillname' })
                .appendTo(errorList3)
                .click(function () {
                    skillname.focus();
                })
                //$('#errorMsg').show();
                skillname.parent().addClass('has-error');
            }
        }
        else {
            if (skillname.parent().hasClass('has-error')) {
                skillname.parent().removeClass('has-error')
            };
            if (errorList3.find('.errormessage-skillname').length > 0) {
                errorList3.find('.errormessage-skillname').remove();
                //$('#errorMsg').hide();
            }
        }
        //text area for description
        if (skillDescription.val() == '' || skillDescription.val() == null) {
            if (errorList3.find('.errormessage-skillDescription').length == 0) {
                $('<li />', { html: 'Skill is required !', class: 'col-sm-6 errormessage-skillDescription' })
                .appendTo(errorList3)
                .click(function () {
                    skillDescription.focus();
                })
                //$('#errorMsg').show();
                skillDescription.parent().addClass('has-error');
            }
        }
        else {
            if (skillDescription.parent().hasClass('has-error')) {
                skillDescription.parent().removeClass('has-error')
            };
            if (errorList3.find('.errormessage-skillDescription').length > 0) {
                errorList3.find('.errormessage-skillDescription').remove();
                //$('#errorMsg').hide();
            }
        }

        //link is required
        if (SkillLink.val() == '' || SkillLink.val() == null) {
            if (errorList3.find('.errormessage-SkillLink').length == 0) {
                $('<li />', { html: 'Skill link is required !', class: 'col-sm-6 errormessage-SkillLink' })
                .appendTo(errorList3)
                .click(function () {
                    SkillLink.focus();
                })
                //$('#errorMsg').show();
                SkillLink.parent().addClass('has-error');
            }
        }
        else {
            if (SkillLink.parent().hasClass('has-error')) {
                SkillLink.parent().removeClass('has-error')
            };
            if (errorList3.find('.errormessage-SkillLink').length > 0) {
                errorList3.find('.errormessage-SkillLink').remove();
                //$('#errorMsg').hide();
            }
        }

        if (errorList3.children('li').length > 0) {
                $('#errorMsg3').show();
            } else {
                $('#errorMsg3').hide();
                $('#suggestSkillBox').modal('hide');
            }
    
    });

    //suggest diploma/certificate
    $('#errorMsg4').hide();
    var errorList4 = $('#errorList4');
    var diplomaname = $("#diplomaname");
    var diplomaDescription = $("#diplomaDescription");
    var diplomaLink = $("#diplomaLink");
    
    $('#suggestDiplomaForm').submit(function (e) {
        e.preventDefault();
        if (diplomaname.val() == '' || diplomaname.val() == null) {
            if (errorList4.find('.errormessage-diplomaname').length == 0) {
                $('<li />', { html: 'Name is required !', class: 'col-sm-6 errormessage-diplomaname' })
                .appendTo(errorList4)
                .click(function () {
                    diplomaname.focus();
                })
                //$('#errorMsg').show();
                diplomaname.parent().addClass('has-error');
            }
        }
        else {
            if (diplomaname.parent().hasClass('has-error')) {
                diplomaname.parent().removeClass('has-error')
            };
            if (errorList4.find('.errormessage-diplomaname').length > 0) {
                errorList4.find('.errormessage-diplomaname').remove();
                //$('#errorMsg').hide();
            }
        }
        //text area for description
        if (diplomaDescription.val() == '' || diplomaDescription.val() == null) {
            if (errorList4.find('.errormessage-diplomaDescription').length == 0) {
                $('<li />', { html: 'Description is required !', class: 'col-sm-6 errormessage-diplomaDescription' })
                .appendTo(errorList4)
                .click(function () {
                    diplomaDescription.focus();
                })
                //$('#errorMsg').show();
                diplomaDescription.parent().addClass('has-error');
            }
        }
        else {
            if (diplomaDescription.parent().hasClass('has-error')) {
                diplomaDescription.parent().removeClass('has-error')
            };
            if (errorList4.find('.errormessage-diplomaDescription').length > 0) {
                errorList4.find('.errormessage-diplomaDescription').remove();
                //$('#errorMsg').hide();
            }
        }

        //link is required
        if (diplomaLink.val() == '' || diplomaLink.val() == null) {
            if (errorList4.find('.errormessage-diplomaLink').length == 0) {
                $('<li />', { html: 'Diploma/certificate link is required !', class: 'col-sm-6 errormessage-diplomaLink' })
                .appendTo(errorList4)
                .click(function () {
                    diplomaLink.focus();
                })
                //$('#errorMsg').show();
                diplomaLink.parent().addClass('has-error');
            }
        }
        else {
            if (diplomaLink.parent().hasClass('has-error')) {
                diplomaLink.parent().removeClass('has-error')
            };
            if (errorList4.find('.errormessage-diplomaLink').length > 0) {
                errorList4.find('.errormessage-diplomaLink').remove();
                //$('#errorMsg').hide();
            }
        }

        if (errorList4.children('li').length > 0) {
                $('#errorMsg4').show();
            } else {
                $('#errorMsg4').hide();
                $('#suggestDiplomaBox').modal('hide');
                diplomaname.val('');
                diplomaDescription.val('');
                diplomaLink.val('');
            }
    
    });
});