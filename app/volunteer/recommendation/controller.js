var landingController = angular.module('recommendationController', []);
landingController.controller('recommendationPage', ['$scope', function ($scope) {

//ask for recommendation dummy data
$scope.listOfSchools = [];
$scope.listOfJobs = [];
$scope.listOfSchools.push({'name': "University of Amsterdam",
					'degree': "BSC",
					'areaOfStudy': 'Science',
					'startDate': '2004',
					'endDate': '2007'
					});
$scope.listOfJobs.push({'name': 'Red Cross NL',
				'city': 'Amsterdam',
				'country': 'Netherlands',
				'title': "Volunteer",
				'month1': '1',
				'startDate': '2010',
				'month2': '9',
				'endDate': '2014'});
$scope.owner = [];
$scope.owner.push({'email': 'hans.klevenbeek@email.com'});
$scope.owner.push({'email': 'mrborwn@email.com'});

$scope.modalMessage = "Hello, \n\n"+
              "I'm sending this to ask you for a brief recommendation of my work/school that I can include in my Volunteer profile. If you have any questions, let me know. \n\n"+
              "Thanks in advance for helping me out. \n\n" +
              "Hans Klevenbeek";

// //volunteer school and job functionality
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
    $scope.lengthOfJobs = $scope.listOfJobs.length;


    var checkDateSchool = false;
    var checkDateJob = false;
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

    };

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

    $scope.currentPosition = "default";

    $scope.showMode = true;$scope.editMode=false;
    $scope.showMode1 = true;$scope.editMode1=false;
    $scope.displayText2 = "Hi Marleen Bosch, " +
     "Here's a revised version of  the recommendation I wrote for you.  Let me know if you need anything else";
    $scope.updateValue =  function(){
        $scope.showMode = false;
        $scope.editMode = true;
        var para = $('p.paraFirst').text();
        console.log(para);
        $scope.displayText = $.trim(para);
    }
    $scope.editValue =  function(){
        $scope.showMode = true;
        $scope.editMode = false;
    }
    $scope.displayText3 = "Hi Geertruda Brouwer, " +
     "Here's a revised version of  the recommendation I wrote for you.  Let me know if you need anything else";
    $scope.updateValue1 =  function(){
        $scope.showMode1 = false;
        $scope.editMode1 = true;
        var paraOne = $('p.paraOne').text();
        console.log(paraOne);
        $scope.displayText = $.trim(paraOne);
    }
    $scope.editValue1 =  function(){
        $scope.showMode1 = true;
        $scope.editMode1 = false;
    }
    $scope.getLabeValue = function($event){
        var currentElementPosition = $($event.currentTarget).parent().parent().siblings('.col-sm-6').children('label').text();
        $scope.currentPosition = currentElementPosition;
        console.log(currentElementPosition);
    }
}]);
