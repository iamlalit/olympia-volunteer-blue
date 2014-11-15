
OrgVolApp.controller('landingPage', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.listOfSchools = [];
    $scope.lengthOfSchools = $scope.listOfSchools.length;
    var
	errorDiv = $('#errorMsg'),
	errorList = $('#errorList');
    $('#errorMsg').hide();
    var schoolAns1 = $("#schoolAns1");
    var schoolAns2 = $("#schoolAns2");
    var schoolAns3 = $("#schoolAns3");
    var schoolAns4 = $("#schoolAns4");
    var schoolAns5 = $("#schoolAns5");

    $('#errorMsg1').hide();
    var errorList1 = $('#errorList1');
    var jobAns1 = $("#jobAns1");
    var jobAns2 = $("#jobAns2");
    var jobAns3 = $("#jobAns3");
    var jobAns4 = $("#jobAns4");
    var jobAns5 = $("#jobAns5");
    var jobAns6 = $("#jobAns6");
    var jobAns7 = $("#jobAns7");
    var setCurrentDate = ("#setCurrentDate");
    $scope.listOfJobs = [];
    $scope.lengthOfJobs = $scope.listOfJobs.length;

    $('#errorMsg2').hide();
    var errorList2 = $('#errorList2');
    var projAns1 = $("#projAns1");
    var projAns2 = $("#projAns2");
    var projAns3 = $("#projAns3");
    var projAns4 = $("#projAns4");
    var projAns5 = $("#projAns5");
    var projAns6 = $("#projAns6");
    var projAns7 = $("#projAns7");
    var projAns8 = $("#projAns8");
    $scope.listOfProjects = [];
    $scope.lengthOfProjects = $scope.listOfProjects.length;

    $('#errorMsg3').hide();
    var errorList3 = $('#errorList3');
    var skillname = $("#skillname");
    var skillDescription = $("#skillDescription");
    var SkillLink = $("#SkillLink");
    
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
                skillname.val('');
                skillDescription.val('');
                SkillLink.val('');
            }
    
    });

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

    var checkDateSchool = false;
    var checkDateJob = false;
    var checkDateJob1 = false;
    $scope.updateSchoolDetails = function(obj, check, index){
        if(schoolAns1.val() == '' || schoolAns1.val() == null){
        	if (errorList.find('.errormessage-schoolAns1').length == 0) {
                $('<li />', { html: 'School name required !', class: 'col-sm-6 errormessage-schoolAns1' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns1.focus();
                })
                $('#errorMsg').show();
                schoolAns1.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns1.parent().hasClass('has-error')) {
	                schoolAns1.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns1').length > 0) {
	                errorList.find('.errormessage-schoolAns1').remove();
	                $('#errorMsg').hide();
	            }
        }
        
        if(schoolAns2.val() == '' || schoolAns2.val() == null){
        	if (errorList.find('.errormessage-schoolAns2').length == 0) {
                $('<li />', { html: 'Degree required !', class: 'col-sm-6 errormessage-schoolAns2' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns2.focus();
                })
                $('#errorMsg').show();
                schoolAns2.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns2.parent().hasClass('has-error')) {
	                schoolAns2.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns2').length > 0) {
	                errorList.find('.errormessage-schoolAns2').remove();
	                $('#errorMsg').hide();
	            }
        }
        
        if(schoolAns3.val() == '' || schoolAns3.val() == null){
        	if (errorList.find('.errormessage-schoolAns3').length == 0) {
                $('<li />', { html: 'Arear of Study required !', class: 'col-sm-6 errormessage-schoolAns3' })
                .appendTo(errorList)
                .click(function () {
                    schoolAns3.focus();
                })
                $('#errorMsg').show();
                schoolAns3.parent().addClass('has-error');
            }
        }else {
	            if (schoolAns3.parent().hasClass('has-error')) {
	                schoolAns3.parent().removeClass('has-error')
	            };
	            if (errorList.find('.errormessage-schoolAns3').length > 0) {
	                errorList.find('.errormessage-schoolAns3').remove();
	                $('#errorMsg').hide();
	            }
        }

        if(parseInt($('#schoolAns4 option:selected').val()) == 0 || parseInt($('#schoolAns5 option:selected').val()) == 0){
			
            if (errorList.find('.errormessage-schoolAns4').length == 0) {
                $('<li />', { html: 'Date Attended required !', class: 'col-sm-6 errormessage-schoolAns4' })
                .appendTo(errorList)
                .click(function () {
                	console.log("clicked");
                    $("#schoolAns4").find('option:first').focus();
                })
                $('#errorMsg').show();
                schoolAns4.parent().addClass('has-error');
                schoolAns5.parent().addClass('has-error');
            }
        }else {
                if(parseInt($('#schoolAns4 option:selected').val()) >= parseInt($('#schoolAns5 option:selected').val()) ){ 
                    if (errorList.find('.errormessage-schoolAns7').length == 0) {
                        $('<li />', { html: 'End date should be later then start date, please select the correct end date !', class: 'col-sm-6 errormessage-schoolAns7' })
                        .appendTo(errorList)
                        .click(function () {
                            console.log("clicked");
                            $("#schoolAns4").find('option:first').focus();
                        })
                        $('#errorMsg').show();
                        schoolAns4.parent().addClass('has-error');
                        schoolAns5.parent().addClass('has-error');
                        checkDateSchool = true;
                    }
                }else {
                        if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
                            schoolAns4.parent().removeClass('has-error');
                            schoolAns5.parent().removeClass('has-error');
                        };
                        if (errorList.find('.errormessage-schoolAns7').length > 0) {
                            errorList.find('.errormessage-schoolAns7').remove();
                            $('#errorMsg').hide();
                        }
                }
                if(!checkDateSchool) {

                    if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
                        schoolAns4.parent().removeClass('has-error');
                        schoolAns5.parent().removeClass('has-error');
                    };
                    if (errorList.find('.errormessage-schoolAns4').length > 0) {
                        errorList.find('.errormessage-schoolAns4').remove();
                        $('#errorMsg').hide();
                    }   
                }
        }

        

        schoolAns1.change(function() {
            if(schoolAns1.val() == '' || schoolAns1.val() == null){
            	if (errorList.find('.errormessage-schoolAns1').length == 0) {
                    $('<li />', { html: 'School name required !', class: 'col-sm-6 errormessage-schoolAns1' })
                    .appendTo(errorList)
                    .click(function () {
                        schoolAns1.focus();
                    })
                    $('#errorMsg').show();
                    schoolAns1.parent().addClass('has-error');
                }
            }else {
    	            if (schoolAns1.parent().hasClass('has-error')) {
    	                schoolAns1.parent().removeClass('has-error')
    	            };
    	            if (errorList.find('.errormessage-schoolAns1').length > 0) {
    	                errorList.find('.errormessage-schoolAns1').remove();
    	            }
            }
        });

        schoolAns2.change(function() {
            if(schoolAns2.val() == '' || schoolAns2.val() == null){
            	if (errorList.find('.errormessage-schoolAns2').length == 0) {
                    $('<li />', { html: 'Degree required !', class: 'col-sm-6 errormessage-schoolAns2' })
                    .appendTo(errorList)
                    .click(function () {
                        schoolAns2.focus();
                    })
                    $('#errorMsg').show();
                    schoolAns2.parent().addClass('has-error');
                }
            }else {
    	            if (schoolAns2.parent().hasClass('has-error')) {
    	                schoolAns2.parent().removeClass('has-error')
    	            };
    	            if (errorList.find('.errormessage-schoolAns2').length > 0) {
    	                errorList.find('.errormessage-schoolAns2').remove();
    	            }
            }
        });

        schoolAns3.change(function() {
            if(schoolAns3.val() == '' || schoolAns3.val() == null){
            	if (errorList.find('.errormessage-schoolAns3').length == 0) {
                    $('<li />', { html: 'Arear of Study required !', class: 'col-sm-6 errormessage-schoolAns3' })
                    .appendTo(errorList)
                    .click(function () {
                        schoolAns3.focus();
                    })
                    $('#errorMsg').show();
                    schoolAns3.parent().addClass('has-error');
                }
            }else {
    	            if (schoolAns3.parent().hasClass('has-error')) {
    	                schoolAns3.parent().removeClass('has-error')
    	            };
    	            if (errorList.find('.errormessage-schoolAns3').length > 0) {
    	                errorList.find('.errormessage-schoolAns3').remove();
    	            }
            }
        });

       //  schoolAns4.change(function() {
    	  //   if(parseInt($('#schoolAns4 option:selected').val()) == 0 || parseInt($('#schoolAns5 option:selected').val()) == 0){
    			
       //          if (errorList.find('.errormessage-schoolAns4').length == 0) {
       //              $('<li />', { html: 'Date Attended required !', class: 'col-sm-6 errormessage-schoolAns4' })
       //              .appendTo(errorList)
       //              .click(function () {
       //                  $("#schoolAns4").find('option:first').focus();
       //              })
       //              $('#errorMsg').show();
       //              schoolAns4.parent().addClass('has-error');
       //              schoolAns5.parent().addClass('has-error');
       //          }
       //      }else {
    	  //           if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
    	  //               schoolAns4.parent().removeClass('has-error');
    	  //               schoolAns5.parent().removeClass('has-error');
    	  //           };
    	  //           if (errorList.find('.errormessage-schoolAns4').length > 0) {
    	  //               errorList.find('.errormessage-schoolAns4').remove();
    	  //           }
    	  //       }
       //  });

       //  schoolAns5.change(function() {
    	  //   if(parseInt($('#schoolAns4 option:selected').val()) == 0 || parseInt($('#schoolAns5 option:selected').val()) == 0){
    			// if (errorList.find('.errormessage-schoolAns4').length == 0) {
       //              $('<li />', { html: 'Date Attended required !', class: 'col-sm-6 errormessage-schoolAns4' })
       //              .appendTo(errorList)
       //              .click(function () {
       //                  $("#schoolAns4").find('option:first').focus();
       //              })
       //              $('#errorMsg').show();
       //              schoolAns4.parent().addClass('has-error');
       //              schoolAns5.parent().addClass('has-error');
       //          }
       //      }else {
    	  //           if (schoolAns4.parent().hasClass('has-error') || schoolAns5.parent().hasClass('has-error')) {
    	  //               schoolAns4.parent().removeClass('has-error');
    	  //               schoolAns5.parent().removeClass('has-error');
    	  //           };
    	  //           if (errorList.find('.errormessage-schoolAns4').length > 0) {
    	  //               errorList.find('.errormessage-schoolAns4').remove();
    	  //           }
    	  //       }
       //  });
        if (errorList.children('li').length > 0) {
            $('#errorMsg').show();
        } else {
            $('#errorMsg').hide();
            $scope.listOfSchools.push(obj);
	        $scope.lengthOfSchools = $scope.listOfSchools.length;
	        $scope.school = {};
	        $scope.school.startDate = 0;
	        $scope.school.endDate = 0;
            //sorting using start date
            $scope.listOfSchools = $scope.listOfSchools.sort(function(obj1, obj2) {
                // Descending: first startdate less than the previous
                return obj2.startDate - obj1.startDate;
            });
        }
        if(check == 1 && !errorList.children('li').length > 0){
        	$('#addSchool').modal('hide');
        }
        if(check == 2){
            console.log($scope.listOfSchools[index].name);
        }
    }
    $scope.schoolCancel = function(){
    	$('#errorMsg').hide();
    	$scope.lengthOfSchools = $scope.listOfSchools.length;
        $scope.school = {};
        $scope.school.startDate = 0;
        $scope.school.endDate = 0;
        $scope.school.description = '';
    	$('#addSchool').modal('hide');
        schoolAns1.parent().removeClass('has-error');
        schoolAns2.parent().removeClass('has-error');
        schoolAns3.parent().removeClass('has-error');
        schoolAns4.parent().removeClass('has-error');
        schoolAns5.parent().removeClass('has-error');
    }

    $scope.jobCancel = function(){
        $('#errorMsg1').hide();
        $scope.lengthOfJobs = $scope.listOfJobs.length;
        $scope.job = {};
        $('#addJob').modal('hide');
        jobAns1.parent().removeClass('has-error');
        jobAns2.parent().removeClass('has-error');
        jobAns3.parent().removeClass('has-error');
        jobAns4.parent().removeClass('has-error');
        jobAns5.parent().removeClass('has-error');
        jobAns6.parent().removeClass('has-error');
        jobAns7.parent().removeClass('has-error');
        $scope.job.startDate = 0;
        $scope.job.endDate = 0;
        $scope.job.month1 = 0;
        $scope.job.month2 = 0;
        $scope.job.country = 'Netherlands';
        $scope.setCurrentDate = false;
        $scope.job.description = '';
    }

    $scope.updateJobDetails = function(obj, check){
        if(jobAns1.val() == '' || jobAns1.val() == null){
            if (errorList1.find('.errormessage-jobAns1').length == 0) {
                $('<li />', { html: 'Organization name required !', class: 'col-sm-6 errormessage-jobAns1' })
                .appendTo(errorList1)
                .click(function () {
                    jobAns1.focus();
                })
                $('#errorMsg1').show();
                jobAns1.parent().addClass('has-error');
            }
        }else {
                if (jobAns1.parent().hasClass('has-error')) {
                    jobAns1.parent().removeClass('has-error')
                };
                if (errorList1.find('.errormessage-jobAns1').length > 0) {
                    errorList1.find('.errormessage-jobAns1').remove();
                    $('#errorMsg1').hide();
                }
        }

        if(jobAns2.val() == '' || jobAns2.val() == null){
            if (errorList1.find('.errormessage-jobAns2').length == 0) {
                $('<li />', { html: 'City required !', class: 'col-sm-6 errormessage-jobAns2' })
                .appendTo(errorList1)
                .click(function () {
                    jobAns2.focus();
                })
                $('#errorMsg1').show();
                jobAns2.parent().addClass('has-error');
            }
        }else {
                if (jobAns2.parent().hasClass('has-error')) {
                    jobAns2.parent().removeClass('has-error')
                };
                if (errorList1.find('.errormessage-jobAns2').length > 0) {
                    errorList1.find('.errormessage-jobAns2').remove();
                    $('#errorMsg1').hide();
                }
        }

        if(jobAns3.val() == '' || jobAns3.val() == null){
            if (errorList1.find('.errormessage-jobAns3').length == 0) {
                $('<li />', { html: 'Title required !', class: 'col-sm-6 errormessage-jobAns3' })
                .appendTo(errorList1)
                .click(function () {
                    jobAns3.focus();
                })
                $('#errorMsg1').show();
                jobAns3.parent().addClass('has-error');
            }
        }else {
                if (jobAns3.parent().hasClass('has-error')) {
                    jobAns3.parent().removeClass('has-error')
                };
                if (errorList1.find('.errormessage-jobAns3').length > 0) {
                    errorList1.find('.errormessage-jobAns3').remove();
                    $('#errorMsg1').hide();
                }
        }

       if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
          || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
            if (errorList1.find('.errormessage-jobAns4').length == 0) {
                $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                .appendTo(errorList1)
                .click(function () {
                    console.log("clicked");
                    $("#jobAns4").find('option:first').focus();
                })
                $('#errorMsg').show();
                jobAns4.parent().addClass('has-error');
                jobAns5.parent().addClass('has-error');
                jobAns6.parent().addClass('has-error');
                jobAns7.parent().addClass('has-error');
                checkDateJob = false;  
            }
        }else {
            if( (parseInt($('#jobAns5 option:selected').val()) > parseInt($('#jobAns7 option:selected').val())) || (parseInt($('#jobAns5 option:selected').val()) == parseInt($('#jobAns7 option:selected').val()) && parseInt($('#jobAns4 option:selected').val()) >= parseInt($('#jobAns6 option:selected').val()))){
                if (errorList1.find('.errormessage-jobAns7').length == 0) {
                    $('<li />', { html: 'End date should be later then start date, please select the correct end date !', class: 'col-sm-6 errormessage-jobAns7' })
                    .appendTo(errorList1)
                    .click(function () {
                        console.log("clicked");
                        $("#jobAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    jobAns4.parent().addClass('has-error');
                    jobAns5.parent().addClass('has-error');
                    jobAns6.parent().addClass('has-error');
                    jobAns7.parent().addClass('has-error');
                    checkDateJob = true;       
                }
            }else {
                if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                    jobAns4.parent().removeClass('has-error');
                    jobAns5.parent().removeClass('has-error');
                    jobAns6.parent().removeClass('has-error');
                    jobAns7.parent().removeClass('has-error');
                };
                if (errorList1.find('.errormessage-jobAns7').length > 0) {
                    errorList1.find('.errormessage-jobAns7').remove();
                    $('#errorMsg1').hide();
                }         
            }

            if(!checkDateJob){
                if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                    jobAns4.parent().removeClass('has-error');
                    jobAns5.parent().removeClass('has-error');
                    jobAns6.parent().removeClass('has-error');
                    jobAns7.parent().removeClass('has-error');
                };
                if (errorList1.find('.errormessage-jobAns4').length > 0) {
                    errorList1.find('.errormessage-jobAns4').remove();
                    $('#errorMsg1').hide();
                }
            }              
        }

        

        jobAns1.change(function() {
            if(jobAns1.val() == '' || jobAns1.val() == null){
                if (errorList1.find('.errormessage-jobAns1').length == 0) {
                    $('<li />', { html: 'Organization name required !', class: 'col-sm-6 errormessage-jobAns1' })
                    .appendTo(errorList1)
                    .click(function () {
                        jobAns1.focus();
                    })
                    $('#errorMsg1').show();
                    jobAns1.parent().addClass('has-error');
                }
            }else {
                    if (jobAns1.parent().hasClass('has-error')) {
                        jobAns1.parent().removeClass('has-error')
                    };
                    if (errorList1.find('.errormessage-jobAns1').length > 0) {
                        errorList1.find('.errormessage-jobAns1').remove();
                    }
            }
        
        });

        jobAns2.change(function() {
            if(jobAns2.val() == '' || jobAns2.val() == null){
                if (errorList1.find('.errormessage-jobAns2').length == 0) {
                    $('<li />', { html: 'City required !', class: 'col-sm-6 errormessage-jobAns2' })
                    .appendTo(errorList1)
                    .click(function () {
                        jobAns2.focus();
                    })
                    $('#errorMsg1').show();
                    jobAns2.parent().addClass('has-error');
                }
            }else {
                    if (jobAns2.parent().hasClass('has-error')) {
                        jobAns2.parent().removeClass('has-error')
                    };
                    if (errorList1.find('.errormessage-jobAns2').length > 0) {
                        errorList1.find('.errormessage-jobAns2').remove();
                    }
            }
        });
        
        jobAns3.change(function() {
            if(jobAns3.val() == '' || jobAns3.val() == null){
                if (errorList1.find('.errormessage-jobAns3').length == 0) {
                    $('<li />', { html: 'Title required !', class: 'col-sm-6 errormessage-jobAns3' })
                    .appendTo(errorList1)
                    .click(function () {
                        jobAns3.focus();
                    })
                    $('#errorMsg1').show();
                    jobAns3.parent().addClass('has-error');
                }
            }else {
                    if (jobAns3.parent().hasClass('has-error')) {
                        jobAns3.parent().removeClass('has-error')
                    };
                    if (errorList1.find('.errormessage-jobAns3').length > 0) {
                        errorList1.find('.errormessage-jobAns3').remove();
                    }
            }
        });

        jobAns4.change(function() { 

           if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
              || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
                if (errorList1.find('.errormessage-jobAns4').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                    .appendTo(errorList1)
                    .click(function () {
                        console.log("clicked");
                        $("#jobAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    jobAns4.parent().addClass('has-error');
                    jobAns5.parent().addClass('has-error');
                    jobAns6.parent().addClass('has-error');
                    jobAns7.parent().addClass('has-error');
                }
            }else {
                    if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                        jobAns4.parent().removeClass('has-error');
                        jobAns5.parent().removeClass('has-error');
                        jobAns6.parent().removeClass('has-error');
                        jobAns7.parent().removeClass('has-error');
                    };
                    if (errorList1.find('.errormessage-jobAns4').length > 0) {
                        errorList1.find('.errormessage-jobAns4').remove();
                    }
            }
        });

        jobAns5.change(function() { 
            
           if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
              || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
                if (errorList1.find('.errormessage-jobAns4').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                    .appendTo(errorList1)
                    .click(function () {
                        console.log("clicked");
                        $("#jobAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    jobAns4.parent().addClass('has-error');
                    jobAns5.parent().addClass('has-error');
                    jobAns6.parent().addClass('has-error');
                    jobAns7.parent().addClass('has-error');
                }
            }else {
                    if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                        jobAns4.parent().removeClass('has-error');
                        jobAns5.parent().removeClass('has-error');
                        jobAns6.parent().removeClass('has-error');
                        jobAns7.parent().removeClass('has-error');
                    };
                    if (errorList1.find('.errormessage-jobAns4').length > 0) {
                        errorList1.find('.errormessage-jobAns4').remove();
                    }
            }
        });

        jobAns6.change(function() { 
            
           if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
              || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
                if (errorList1.find('.errormessage-jobAns4').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                    .appendTo(errorList1)
                    .click(function () {
                        console.log("clicked");
                        $("#jobAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    jobAns4.parent().addClass('has-error');
                    jobAns5.parent().addClass('has-error');
                    jobAns6.parent().addClass('has-error');
                    jobAns7.parent().addClass('has-error');
                }
            }else {
                    if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                        jobAns4.parent().removeClass('has-error');
                        jobAns5.parent().removeClass('has-error');
                        jobAns6.parent().removeClass('has-error');
                        jobAns7.parent().removeClass('has-error');
                    };
                    if (errorList1.find('.errormessage-jobAns4').length > 0) {
                        errorList1.find('.errormessage-jobAns4').remove();
                    }
            }
        });

        jobAns7.change(function() { 
            
           if(parseInt($('#jobAns4 option:selected').val()) == 0 || parseInt($('#jobAns5 option:selected').val()) == 0 
              || parseInt($('#jobAns6 option:selected').val()) == 0 || parseInt($('#jobAns7 option:selected').val()) == 0){
                if (errorList1.find('.errormessage-jobAns4').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-jobAns4' })
                    .appendTo(errorList1)
                    .click(function () {
                        console.log("clicked");
                        $("#jobAns4").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    jobAns4.parent().addClass('has-error');
                    jobAns5.parent().addClass('has-error');
                    jobAns6.parent().addClass('has-error');
                    jobAns7.parent().addClass('has-error');
                }
            }else {
                    if (jobAns4.parent().hasClass('has-error') || jobAns5.parent().hasClass('has-error') || jobAns6.parent().hasClass('has-error') || jobAns7.parent().hasClass('has-error')) {
                        jobAns4.parent().removeClass('has-error');
                        jobAns5.parent().removeClass('has-error');
                        jobAns6.parent().removeClass('has-error');
                        jobAns7.parent().removeClass('has-error');
                    };
                    if (errorList1.find('.errormessage-jobAns4').length > 0) {
                        errorList1.find('.errormessage-jobAns4').remove();
                    }
            }
        });
        

        if (errorList1.children('li').length > 0) {
            $('#errorMsg1').show();
        } else {
            $('#errorMsg1').hide();
            $scope.listOfJobs.push(obj);
            $scope.lengthOfJobs = $scope.listOfJobs.length;
            $scope.job = {};
            $scope.job.startDate = 0;
            $scope.job.endDate = 0;
            $scope.job.month1 = 0;
            $scope.job.month2 = 0;
            $scope.setCurrentDate = false;
            $scope.job.country = 'Netherlands';

            //sorting using start date
            $scope.listOfJobs = $scope.listOfJobs.sort(function(obj1, obj2) {
                // Ascending: first startDate less than the previous
                if(obj2.startDate == obj1.startDate) {
                    return (obj2.startDate + obj2.month1) - (obj1.startDate + obj1.month1);
                }else{
                    return obj2.startDate - obj1.startDate;    
                }
                
            });
            //$scope.listOfJobs
        }
        if(check == 1 && !(errorList1.children('li').length > 0)){
            $('#addJob').modal('hide');
        }

        if(check == 2){
            $('#addJob').modal('hide');
        }
    }
    $scope.setDate = function() {
        if ($scope.setCurrentDate == true) {
            var currentTime = new Date();
            var year = currentTime.getFullYear();
            var month = currentTime.getMonth() + 1;
            $scope.job.month2 = month;
            $scope.job.endDate = year;
            jobAns6.parent().removeClass('has-error');
            jobAns7.parent().removeClass('has-error');
        }else{
            $scope.job.month2 = 0;
            $scope.job.endDate = 0;
            jobAns6.parent().addClass('has-error');
            jobAns7.parent().addClass('has-error');
        }   
    }
    //in order to store the index of school globally so that it can be used elsewhere
    $scope.globalSchoolIndex = "";
    //edit functionality to open the modal with the desired data
    $scope.openSchoolModel = function(school, index) {
        $('#updateSchool').modal('show');
        $scope.school.name = school.name;
        $scope.school.degree = school.degree;
        $scope.school.areaOfStudy = school.areaOfStudy;
        $scope.school.startDate = school.startDate;
        $scope.school.endDate = school.endDate;

        $scope.globalSchoolIndex = index;
    }
    //just to hide the modal poppups
    $scope.updateSchoolCancel = function() {
        $('#updateSchool').modal('hide');
    }
    //updated the information of the school details on the page
    $scope.updateDetailSchool = function(school, globalSchoolIndex) {
        console.log($scope.listOfSchools[globalSchoolIndex])
        $scope.listOfSchools[globalSchoolIndex].name = school.name;
        $scope.listOfSchools[globalSchoolIndex].degree = school.degree;
        $scope.listOfSchools[globalSchoolIndex].areaOfStudy = school.areaOfStudy;
        $scope.listOfSchools[globalSchoolIndex].startDate = school.startDate;
        $scope.listOfSchools[globalSchoolIndex].endDate = school.endDate;
        $('#updateSchool').modal('hide');
    }
    //delete the clicked school
    $scope.deleteSchool = function(school, $index) {
        var idx = $scope.listOfSchools.indexOf(school);
        if (idx != -1) {
              $scope.listOfSchools.splice(idx, 1);
        }
        $scope.lengthOfSchools = $scope.listOfSchools.length;        
    }

    //**************************
    //volunteer job information*
    //**************************
    //in order to store the index of job globally so that it can be used elsewhere
    $scope.globalJobIndex = "";
    //edit functionality to open the modal with the desired data
    $scope.openJobModel = function(job, index) {
        $('#updateJob').modal('show');
        $scope.job.name = job.name;
        $scope.job.city = job.city;
        $scope.job.country = job.country;
        $scope.job.title = job.title;
        
        $scope.job.month1 = job.month1;
        $scope.job.startDate = job.startDate;
        $scope.job.month2 = job.month2;
        $scope.job.endDate = job.endDate;

        $scope.globalJobIndex = index;
    }
    //just to hide the modal poppups
    $scope.updateJobCancel = function() {
        $('#updateJob').modal('hide');
    }
    //updated the information of the job details on the page
    $scope.updateDetailJob = function(job, globalJobIndex) {
        $scope.listOfJobs[globalJobIndex].name = job.name;
        $scope.listOfJobs[globalJobIndex].city = job.city;
        $scope.listOfJobs[globalJobIndex].country = job.country;
        $scope.listOfJobs[globalJobIndex].title = job.title;
        $scope.listOfJobs[globalJobIndex].month1 = job.month1;
        $scope.listOfJobs[globalJobIndex].startDate = job.startDate;
        $scope.listOfJobs[globalJobIndex].month2 = job.month2;
        $scope.listOfJobs[globalJobIndex].endDate = job.endDate;
        $('#updateJob').modal('hide');
    }
    //delete the clicked job
    $scope.deletejob = function(job, $index) {
        var idx = $scope.listOfJobs.indexOf(job);
        if (idx != -1) {
              $scope.listOfJobs.splice(idx, 1);
        }
        $scope.lengthOfJobs = $scope.listOfJobs.length;
    }

    //******************************
    //volunteer Project information*
    //******************************
    $scope.volunteerProjectClose = function(){
        $('#addProject').modal('hide');
    }
    $scope.updateProjectDetails = function(obj, check){
        console.log(obj);
        console.log(check);
        /* Validation Check start */
        /* Name Validation */
        if(projAns1.val() == '' || projAns1.val() == null){
            if (errorList2.find('.errormessage-projAns1').length == 0) {
                $('<li />', { html: 'Name required !', class: 'col-sm-6 errormessage-projAns1' })
                .appendTo(errorList2)
                .click(function () {
                    projAns1.focus();
                })
                $('#errorMsg2').show();
                projAns1.parent().addClass('has-error');
            }
        }else {
                if (projAns1.parent().hasClass('has-error')) {
                    projAns1.parent().removeClass('has-error')
                };
                if (errorList2.find('.errormessage-projAns1').length > 0) {
                    errorList2.find('.errormessage-projAns1').remove();
                    $('#errorMsg2').hide();
                }
        }

        /*Organisation Validation*/
        if(projAns2.val() == '' || projAns2.val() == null){
            if (errorList2.find('.errormessage-projAns2').length == 0) {
                $('<li />', { html: 'Organization name required !', class: 'col-sm-6 errormessage-projAns2' })
                .appendTo(errorList2)
                .click(function () {
                    projAns2.focus();
                })
                $('#errorMsg2').show();
                projAns2.parent().addClass('has-error');
            }
        }else {
                if (projAns2.parent().hasClass('has-error')) {
                    projAns2.parent().removeClass('has-error')
                };
                if (errorList2.find('.errormessage-projAns2').length > 0) {
                    errorList2.find('.errormessage-projAns2').remove();
                    $('#errorMsg2').hide();
                }
        }

        /* Period Validation */
        if(parseInt($('#projAns3 option:selected').val()) == 0 || parseInt($('#projAns4 option:selected').val()) == 0 
          || parseInt($('#projAns5 option:selected').val()) == 0 || parseInt($('#projAns6 option:selected').val()) == 0){
            if (errorList2.find('.errormessage-projAns3').length == 0) {
                $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-projAns3' })
                .appendTo(errorList2)
                .click(function () {
                    console.log("clicked");
                    $("#projAns3").find('option:first').focus();
                })
                $('#errorMsg').show();
                projAns3.parent().addClass('has-error');
                projAns4.parent().addClass('has-error');
                projAns5.parent().addClass('has-error');
                projAns6.parent().addClass('has-error');
                checkDateJob1 = false;  
            }
        }else {
            if( (parseInt($('#projAns4 option:selected').val()) > parseInt($('#projAns6 option:selected').val())) || (parseInt($('#projAns4 option:selected').val()) == parseInt($('#projAns6 option:selected').val()) && parseInt($('#projAns3 option:selected').val()) > parseInt($('#projAns5 option:selected').val()))){
                if (errorList2.find('.errormessage-projAns6').length == 0) {
                    $('<li />', { html: 'End date should be later then start date, please select the correct end date !', class: 'col-sm-6 errormessage-projAns6' })
                    .appendTo(errorList2)
                    .click(function () {
                        console.log("clicked");
                        $("#projAns3").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    projAns3.parent().addClass('has-error');
                    projAns4.parent().addClass('has-error');
                    projAns5.parent().addClass('has-error');
                    projAns6.parent().addClass('has-error');
                    checkDateJob1 = true;       
                }
            }else {
                if (projAns3.parent().hasClass('has-error') || projAns4.parent().hasClass('has-error') || projAns5.parent().hasClass('has-error') || projAns6.parent().hasClass('has-error')) {
                    projAns3.parent().removeClass('has-error');
                    projAns4.parent().removeClass('has-error');
                    projAns5.parent().removeClass('has-error');
                    projAns6.parent().removeClass('has-error');
                };
                if (errorList2.find('.errormessage-projAns6').length > 0) {
                    errorList2.find('.errormessage-projAns6').remove();
                    $('#errorMsg2').hide();
                }         
            }

            if(!checkDateJob1){
                if (projAns3.parent().hasClass('has-error') || projAns4.parent().hasClass('has-error') || projAns5.parent().hasClass('has-error') || projAns6.parent().hasClass('has-error')) {
                    projAns3.parent().removeClass('has-error');
                    projAns4.parent().removeClass('has-error');
                    projAns5.parent().removeClass('has-error');
                    projAns6.parent().removeClass('has-error');
                };
                if (errorList2.find('.errormessage-projAns3').length > 0) {
                    errorList2.find('.errormessage-projAns3').remove();
                    $('#errorMsg2').hide();
                }
            }              
        }

        /* Project Url Validation */
        if(projAns7.val() == '' || projAns7.val() == null){
            if (errorList2.find('.errormessage-projAns7').length == 0) {
                $('<li />', { html: 'Project Url required !', class: 'col-sm-6 errormessage-projAns7' })
                .appendTo(errorList2)
                .click(function () {
                    projAns7.focus();
                })
                $('#errorMsg2').show();
                projAns7.parent().addClass('has-error');
            }
        }else {
                if (projAns7.parent().hasClass('has-error')) {
                    projAns7.parent().removeClass('has-error')
                };
                if (errorList2.find('.errormessage-projAns7').length > 0) {
                    errorList2.find('.errormessage-projAns7').remove();
                    $('#errorMsg2').hide();
                }
        }

        /* Team Member Validation */
        if(projAns8.val() == '' || projAns8.val() == null){
            if (errorList2.find('.errormessage-projAns8').length == 0) {
                $('<li />', { html: 'Team Member required !', class: 'col-sm-6 errormessage-projAns8' })
                .appendTo(errorList2)
                .click(function () {
                    projAns8.focus();
                })
                $('#errorMsg2').show();
                projAns8.parent().addClass('has-error');
            }
        }else {
                if (projAns8.parent().hasClass('has-error')) {
                    projAns8.parent().removeClass('has-error')
                };
                if (errorList2.find('.errormessage-projAns8').length > 0) {
                    errorList2.find('.errormessage-projAns8').remove();
                    $('#errorMsg2').hide();
                }
        }

        
        projAns1.change(function() {
            if(projAns1.val() == '' || projAns1.val() == null){
                if (errorList2.find('.errormessage-projAns1').length == 0) {
                    $('<li />', { html: 'Name required !', class: 'col-sm-6 errormessage-projAns1' })
                    .appendTo(errorList2)
                    .click(function () {
                        projAns1.focus();
                    })
                    $('#errorMsg2').show();
                    projAns1.parent().addClass('has-error');
                }
            }else {
                    if (projAns1.parent().hasClass('has-error')) {
                        projAns1.parent().removeClass('has-error')
                    };
                    if (errorList2.find('.errormessage-projAns1').length > 0) {
                        errorList2.find('.errormessage-projAns1').remove();
                    }
            }
        
        });

        projAns2.change(function() {
            if(projAns2.val() == '' || projAns2.val() == null){
                if (errorList2.find('.errormessage-projAns2').length == 0) {
                    $('<li />', { html: 'Organization required !', class: 'col-sm-6 errormessage-projAns2' })
                    .appendTo(errorList2)
                    .click(function () {
                        projAns2.focus();
                    })
                    $('#errorMsg2').show();
                    projAns2.parent().addClass('has-error');
                }
            }else {
                    if (projAns2.parent().hasClass('has-error')) {
                        projAns2.parent().removeClass('has-error')
                    };
                    if (errorList2.find('.errormessage-projAns2').length > 0) {
                        errorList2.find('.errormessage-projAns2').remove();
                    }
            }
        });

        projAns3.change(function() { 

           if(parseInt($('#projAns3 option:selected').val()) == 0 || parseInt($('#projAns4 option:selected').val()) == 0 
              || parseInt($('#projAns5 option:selected').val()) == 0 || parseInt($('#projAns6 option:selected').val()) == 0){
                if (errorList2.find('.errormessage-projAns3').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-projAns3' })
                    .appendTo(errorList2)
                    .click(function () {
                        console.log("clicked");
                        $("#projAns3").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    projAns3.parent().addClass('has-error');
                    projAns4.parent().addClass('has-error');
                    projAns5.parent().addClass('has-error');
                    projAns6.parent().addClass('has-error');
                }
            }else {
                    if (projAns3.parent().hasClass('has-error') || projAns4.parent().hasClass('has-error') || projAns5.parent().hasClass('has-error') || projAns6.parent().hasClass('has-error')) {
                        projAns3.parent().removeClass('has-error');
                        projAns4.parent().removeClass('has-error');
                        projAns5.parent().removeClass('has-error');
                        projAns6.parent().removeClass('has-error');
                    };
                    if (errorList2.find('.errormessage-projAns3').length > 0) {
                        errorList2.find('.errormessage-projAns3').remove();
                    }
            }
        });

        projAns4.change(function() { 
            
           if(parseInt($('#projAns3 option:selected').val()) == 0 || parseInt($('#projAns4 option:selected').val()) == 0 
              || parseInt($('#projAns5 option:selected').val()) == 0 || parseInt($('#projAns6 option:selected').val()) == 0){
                if (errorList2.find('.errormessage-projAns3').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-projAns3' })
                    .appendTo(errorList2)
                    .click(function () {
                        console.log("clicked");
                        $("#projAns3").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    projAns3.parent().addClass('has-error');
                    projAns4.parent().addClass('has-error');
                    projAns5.parent().addClass('has-error');
                    projAns6.parent().addClass('has-error');
                }
            }else {
                    if (projAns3.parent().hasClass('has-error') || projAns4.parent().hasClass('has-error') || projAns5.parent().hasClass('has-error') || projAns6.parent().hasClass('has-error')) {
                        projAns3.parent().removeClass('has-error');
                        projAns4.parent().removeClass('has-error');
                        projAns5.parent().removeClass('has-error');
                        projAns6.parent().removeClass('has-error');
                    };
                    if (errorList2.find('.errormessage-projAns3').length > 0) {
                        errorList2.find('.errormessage-projAns3').remove();
                    }
            }
        });

        projAns5.change(function() { 
            
           if(parseInt($('#projAns3 option:selected').val()) == 0 || parseInt($('#projAns4 option:selected').val()) == 0 
              || parseInt($('#projAns5 option:selected').val()) == 0 || parseInt($('#projAns6 option:selected').val()) == 0){
                if (errorList2.find('.errormessage-projAns3').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-projAns3' })
                    .appendTo(errorList2)
                    .click(function () {
                        console.log("clicked");
                        $("#projAns3").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    projAns3.parent().addClass('has-error');
                    projAns4.parent().addClass('has-error');
                    projAns5.parent().addClass('has-error');
                    projAns6.parent().addClass('has-error');
                }
            }else {
                    if (projAns3.parent().hasClass('has-error') || projAns4.parent().hasClass('has-error') || projAns5.parent().hasClass('has-error') || projAns6.parent().hasClass('has-error')) {
                        projAns3.parent().removeClass('has-error');
                        projAns4.parent().removeClass('has-error');
                        projAns5.parent().removeClass('has-error');
                        projAns6.parent().removeClass('has-error');
                    };
                    if (errorList2.find('.errormessage-projAns3').length > 0) {
                        errorList2.find('.errormessage-projAns3').remove();
                    }
            }
        });

        projAns6.change(function() {             
           if(parseInt($('#projAns3 option:selected').val()) == 0 || parseInt($('#projAns4 option:selected').val()) == 0 
              || parseInt($('#projAns5 option:selected').val()) == 0 || parseInt($('#projAns6 option:selected').val()) == 0){
                if (errorList2.find('.errormessage-projAns3').length == 0) {
                    $('<li />', { html: 'Period required !', class: 'col-sm-6 errormessage-projAns3' })
                    .appendTo(errorList2)
                    .click(function () {
                        console.log("clicked");
                        $("#projAns3").find('option:first').focus();
                    })
                    $('#errorMsg').show();
                    projAns3.parent().addClass('has-error');
                    projAns4.parent().addClass('has-error');
                    projAns5.parent().addClass('has-error');
                    projAns6.parent().addClass('has-error');
                }
            }else {
                    if (projAns3.parent().hasClass('has-error') || projAns4.parent().hasClass('has-error') || projAns5.parent().hasClass('has-error') || projAns6.parent().hasClass('has-error')) {
                        projAns3.parent().removeClass('has-error');
                        projAns4.parent().removeClass('has-error');
                        projAns5.parent().removeClass('has-error');
                        projAns6.parent().removeClass('has-error');
                    };
                    if (errorList2.find('.errormessage-projAns3').length > 0) {
                        errorList2.find('.errormessage-projAns3').remove();
                    }
            }
        });

        projAns7.change(function() {
            if(projAns7.val() == '' || projAns7.val() == null){
                if (errorList2.find('.errormessage-projAns7').length == 0) {
                    $('<li />', { html: 'Project Url required !', class: 'col-sm-6 errormessage-projAns7' })
                    .appendTo(errorList2)
                    .click(function () {
                        projAns7.focus();
                    })
                    $('#errorMsg2').show();
                    projAns7.parent().addClass('has-error');
                }
            }else {
                    if (projAns7.parent().hasClass('has-error')) {
                        projAns7.parent().removeClass('has-error')
                    };
                    if (errorList2.find('.errormessage-projAns7').length > 0) {
                        errorList2.find('.errormessage-projAns7').remove();
                    }
            }
        });

        projAns8.change(function() {
            if(projAns8.val() == '' || projAns8.val() == null){
                if (projAns8.find('.errormessage-projAns2').length == 0) {
                    $('<li />', { html: ' Team Member required !', class: 'col-sm-6 errormessage-projAns8' })
                    .appendTo(errorList2)
                    .click(function () {
                        projAns8.focus();
                    })
                    $('#errorMsg2').show();
                    projAns8.parent().addClass('has-error');
                }
            }else {
                    if (projAns8.parent().hasClass('has-error')) {
                        projAns8.parent().removeClass('has-error')
                    };
                    if (errorList2.find('.errormessage-projAns8').length > 0) {
                        errorList2.find('.errormessage-projAns8').remove();
                    }
            }
        });
        

        if (errorList2.children('li').length > 0) {
            $('#errorMsg2').show();
        } else {
            $('#errorMsg2').hide();
            $scope.listOfProjects.push(obj);
            $scope.lengthOfProjects = $scope.listOfProjects.length;
            console.log($scope.listOfProjects);
            $scope.project = {};
            $scope.listOfProjects.startDate = 0;
            $scope.listOfProjects.endDate = 0;
            $scope.listOfProjects.month1 = 0;
            $scope.listOfProjects.month2 = 0;
            //$scope.setCurrentDate = false;
            //$scope.job.country = 'Netherlands';

            //sorting using start date
            $scope.listOfProjects = $scope.listOfProjects.sort(function(obj1, obj2) {
                // Ascending: first startDate less than the previous
                if(obj2.startDate == obj1.startDate) {
                    return (obj2.startDate + obj2.month1) - (obj1.startDate + obj1.month1);
                }else{
                    return obj2.startDate - obj1.startDate;    
                }
                
            });
        }
        if(check == 1 && !(errorList2.children('li').length > 0)){
            $('#addProject').modal('hide');
        }

        if(check == 2){
            $('#addProject').modal('hide');
        }
    }
    $scope.projectCancel = function(){
        $('#errorMsg2').hide();
        //$scope.lengthOfProjects = $scope.listOfProjects.length;
        $scope.project = {};
        $('#addProject').modal('hide');
        projAns1.parent().removeClass('has-error');
        projAns2.parent().removeClass('has-error');
        projAns3.parent().removeClass('has-error');
        projAns4.parent().removeClass('has-error');
        projAns5.parent().removeClass('has-error');
        projAns6.parent().removeClass('has-error');
        projAns7.parent().removeClass('has-error');
        projAns8.parent().removeClass('has-error');
        $scope.project.startDate = 0;
        $scope.project.endDate = 0;
        $scope.project.month1 = 0;
        $scope.project.month2 = 0;
        $scope.project.description = '';
    }

    $scope.globalProjectIndex = "";
    //edit functionality to open the modal with the desired data
    $scope.openProjectModel = function(project, index) {
        $('#updateProject').modal('show');
        $scope.project.name = project.name;
        $scope.project.organisation = project.organisation;
        $scope.project.url = project.url;
        $scope.project.members = project.members;
        
        $scope.project.month1 = project.month1;
        $scope.project.startDate = project.startDate;
        $scope.project.month2 = project.month2;
        $scope.project.endDate = project.endDate;

        $scope.globalProjectIndex = index;
    }

    //delete the clicked job
    $scope.deleteProject = function(project, $index) {
        var idx = $scope.listOfProjects.indexOf(project);
        if (idx != -1) {
              $scope.listOfProjects.splice(idx, 1);
        }
        $scope.lengthOfProjects = $scope.listOfProjects.length;
    }

    //just to hide the modal poppups
    $scope.updateProjectCancel = function() {
        $('#updateProject').modal('hide');
    }

    //updated the information of the Project details on the page
    $scope.updateDetailProject = function(project, globalProjectIndex) {
        console.log($scope.listOfProjects);
        $scope.listOfProjects[globalProjectIndex].name = project.name;
        $scope.listOfProjects[globalProjectIndex].organisation = project.organisation;
        $scope.listOfProjects[globalProjectIndex].url = project.url;
        $scope.listOfProjects[globalProjectIndex].members = project.members;
        $scope.listOfProjects[globalProjectIndex].month1 = project.month1;
        $scope.listOfProjects[globalProjectIndex].startDate = project.startDate;
        $scope.listOfProjects[globalProjectIndex].month2 = project.month2;
        $scope.listOfProjects[globalProjectIndex].endDate = project.endDate;
        $('#updateProject').modal('hide');
    }

    $scope.goToProfile = function(){
        window.location.href = '/volunteer/volunteerProfile/volunteerProfile.html?owner='+$rootScope.owner+"&secondOwner="+$rootScope.secondOwner;
    }
}]);
