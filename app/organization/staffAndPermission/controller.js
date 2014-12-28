
OrgVolApp.controller('landingPage', ['$scope', '$filter', 'ngTableParams', function ($scope, $filter, ngTableParams) {
    var data = [{ groupName:"Red Cross UI Developers" , users:"2", status:"Active"},
                { groupName:"Red Cross .net Developers",  users:"3", status:"Archived", reason: "Declined by You"},
                { groupName:"Red Cross Administration",  users:"3", status:"Hired"},
                { groupName:"Red Cross Managers",  users:"2", status:"Hired"},
                { groupName:"Red Cross Business Analyst",  users:"4", status:"Sent"},
                { groupName:"Red Cross Designers",  users:"2", status:"Archived", reason: "Declined by You"}];


    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 20,          // count per page
        sorting: {
            groupName: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(data, params.orderBy()) :
                                data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

  //   var userID5 = $('#userID5');
  //   var userID6 = $('#userID6');
  //   var userID7 = $('#userID7');
  //   var errorList2 = $('#errorList2');
  //   $scope.inviteUserObject = [];
  //   $scope.inviteUserObjectflag = false;

  //   $scope.openModal = function(){
  //       $('#errorMsg2').hide();
  //   }
  //   $scope.inviteUserClose = function(){
  //       $('#inviteUser').modal('hide');
  //   }
  //   $scope.upusersInviteUserDetail = function(obj, check){
  //   	$scope.user = {};
  //   	$scope.user.invite = obj.invite;
  //   	$scope.user.admin = 0;
  //   	$scope.user.hiring = 0;
  //   	$scope.user.chat = 0;
  //       console.log(obj);
  //       /* Validation Check start */
  //       /* Username Validation */
  //       if(obj.invite == 'Username'){
  //       	var userID3 = $('#userID3');
	 //        if(userID3.val() == '' || userID3.val() == null){
	 //        	console.log('in');
	 //            if (errorList2.find('.errormessage-userID3').length == 0) {
	 //                $('<li />', { html: 'Name required !', class: 'col-sm-6 errormessage-userID3' })
	 //                .appendTo(errorList2)
	 //                .click(function () {
	 //                    userID3.focus();
	 //                })
	 //                $('#errorMsg2').show();
	 //                userID3.parent().addClass('has-error');
	 //                console.log(userID3);
	 //            }
	 //        }else {
	 //                if (userID3.parent().hasClass('has-error')) {
	 //                    userID3.parent().removeClass('has-error')
	 //                };
	 //                if (errorList2.find('.errormessage-userID3').length > 0) {
	 //                    errorList2.find('.errormessage-userID3').remove();
	 //                    $('#errorMsg2').hide();
	 //                }
	 //        }
	 //    }

  //       /*Email Validation*/
  //       if(obj.invite == 'EmailAddress'){
  //       	var userID4 = $('#userID4');
	 //        if(userID4.val() == '' || userID4.val() == null){
	 //            if (errorList2.find('.errormessage-userID4').length == 0) {
	 //                $('<li />', { html: 'Email required !', class: 'col-sm-6 errormessage-userID4' })
	 //                .appendTo(errorList2)
	 //                .click(function () {
	 //                    userID4.focus();
	 //                })
	 //                $('#errorMsg2').show();
	 //                console.log(userID4);
	 //                userID4.parent().addClass('has-error');
	 //            }
	 //        }else {
	 //            if (userID4.parent().hasClass('has-error')) {
	 //                userID4.parent().removeClass('has-error')
	 //            };
	 //            if (errorList2.find('.errormessage-userID4').length > 0) {
	 //                errorList2.find('.errormessage-userID4').remove();
	 //                $('#errorMsg2').hide();
	 //            }
	 //        }
	 //    }

  //       /*Admin Validation*/
        
  //       if(parseInt($('#userID5 option:selected').val()) == 0){
  //           if (errorList2.find('.errormessage-userID5').length == 0) {
  //               $('<li />', { html: 'Admin priviledges required !', class: 'col-sm-6 errormessage-userID5' })
  //               .appendTo(errorList2)
  //               .click(function () {
  //                   userID5.focus();
  //               })
  //               $('#errorMsg2').show();
  //               userID5.parent().addClass('has-error');
  //           }
  //       }else {
  //           if (userID5.parent().hasClass('has-error')) {
  //               userID5.parent().removeClass('has-error')
  //           };
  //           if (errorList2.find('.errormessage-userID5').length > 0) {
  //               errorList2.find('.errormessage-userID5').remove();
  //               $('#errorMsg2').hide();
  //           }
  //       }
        

  //       /*Hiring Validation*/
        
  //       if(parseInt($('#userID6 option:selected').val()) == 0){
  //           if (errorList2.find('.errormessage-userID6').length == 0) {
  //               $('<li />', { html: 'Hiring priviledges required !', class: 'col-sm-6 errormessage-userID6' })
  //               .appendTo(errorList2)
  //               .click(function () {
  //                   userID6.focus();
  //               })
  //               $('#errorMsg2').show();
  //               userID6.parent().addClass('has-error');
  //           }
  //       }else {
  //           if (userID6.parent().hasClass('has-error')) {
  //               userID6.parent().removeClass('has-error')
  //           };
  //           if (errorList2.find('.errormessage-userID6').length > 0) {
  //               errorList2.find('.errormessage-userID6').remove();
  //               $('#errorMsg2').hide();
  //           }
  //       }

  //       /*Chat Validation*/
        
  //       if(parseInt($('#userID7 option:selected').val()) == 0){
  //           if (errorList2.find('.errormessage-userID7').length == 0) {
  //               $('<li />', { html: 'Chat access required !', class: 'col-sm-6 errormessage-userID7' })
  //               .appendTo(errorList2)
  //               .click(function () {
  //                   userID7.focus();
  //               })
  //               $('#errorMsg2').show();
  //               userID7.parent().addClass('has-error');
  //           }
  //       }else {
  //           if (userID7.parent().hasClass('has-error')) {
  //               userID7.parent().removeClass('has-error')
  //           };
  //           if (errorList2.find('.errormessage-userID7').length > 0) {
  //               errorList2.find('.errormessage-userID7').remove();
  //               $('#errorMsg2').hide();
  //           }
  //       }
   
		// var userID3 = $('#userID3');
  //       userID3.change(function() {
  //       	console.log('in userid3');
  //           if(userID3.val() == '' || userID3.val() == null){
  //               if (errorList2.find('.errormessage-userID3').length == 0) {
  //                   $('<li />', { html: 'Name required !', class: 'col-sm-6 errormessage-userID3' })
  //                   .appendTo(errorList2)
  //                   .click(function () {
  //                       userID3.focus();
  //                   })
  //                   $('#errorMsg2').show();
  //                   userID3.parent().addClass('has-error');
  //               }
  //           }else {
  //               if (userID3.parent().hasClass('has-error')) {
  //                   userID3.parent().removeClass('has-error')
  //               };
  //               if (errorList2.find('.errormessage-userID3').length > 0) {
  //                   errorList2.find('.errormessage-userID3').remove();
  //               }
  //               if(errorList2.children('li').length > 0){
	 //            	$('#errorMsg2').show();
	 //            } else{
	 //            	$('#errorMsg2').hide();
	 //            }
  //           }
  //       });
	    
  //   	var userID4 = $('#userID4');
  //       userID4.change(function() {
  //           if(userID4.val() == '' || userID4.val() == null){
  //               if (errorList2.find('.errormessage-userID4').length == 0) {
  //                   $('<li />', { html: 'Email required !', class: 'col-sm-6 errormessage-userID4' })
  //                   .appendTo(errorList2)
  //                   .click(function () {
  //                       userID4.focus();
  //                   })
  //                   $('#errorMsg2').show();
  //                   userID4.parent().addClass('has-error');
  //               }
  //           }else {
  //               if (userID4.parent().hasClass('has-error')) {
  //                   userID4.parent().removeClass('has-error')
  //               };
  //               if (errorList2.find('.errormessage-userID4').length > 0) {
  //                   errorList2.find('.errormessage-userID4').remove();
  //               }
  //               if(errorList2.children('li').length > 0){
	 //            	$('#errorMsg2').show();
	 //            } else{
	 //            	$('#errorMsg2').hide();
	 //            }
  //           }
  //       });
	    

  //       userID5.change(function() { 
  //       	if(parseInt($('#userID5 option:selected').val()) == 0){
	 //            if (errorList2.find('.errormessage-userID5').length == 0) {
	 //                $('<li />', { html: 'Admin priviledges required !', class: 'col-sm-6 errormessage-userID5' })
	 //                .appendTo(errorList2)
	 //                .click(function () {
	 //                    userID5.focus();
	 //                })
	 //                $('#errorMsg2').show();
	 //                userID5.parent().addClass('has-error');
	 //            }
	 //        }else {
	 //            if (userID5.parent().hasClass('has-error')) {
	 //                userID5.parent().removeClass('has-error')
	 //            };
	 //            if (errorList2.find('.errormessage-userID5').length > 0) {
	 //                errorList2.find('.errormessage-userID5').remove();
	 //            }
	 //            if(errorList2.children('li').length > 0){
	 //            	$('#errorMsg2').show();
	 //            } else{
	 //            	$('#errorMsg2').hide();
	 //            }
	 //        }
  //       });

		// userID6.change(function() { 
  //       	if(parseInt($('#userID6 option:selected').val()) == 0){
	 //            if (errorList2.find('.errormessage-userID6').length == 0) {
	 //                $('<li />', { html: 'Hiring priviledges required !', class: 'col-sm-6 errormessage-userID6' })
	 //                .appendTo(errorList2)
	 //                .click(function () {
	 //                    userID6.focus();
	 //                })
	 //                $('#errorMsg2').show();
	 //                userID6.parent().addClass('has-error');
	 //            }
	 //        }else {
	 //            if (userID6.parent().hasClass('has-error')) {
	 //                userID6.parent().removeClass('has-error')
	 //            };
	 //            if (errorList2.find('.errormessage-userID6').length > 0) {
	 //                errorList2.find('.errormessage-userID6').remove();
	 //            }
	 //            if(errorList2.children('li').length > 0){
	 //            	$('#errorMsg2').show();
	 //            } else{
	 //            	$('#errorMsg2').hide();
	 //            }
	 //        }
  //       });  

  //       userID7.change(function() { 
  //       	if(parseInt($('#userID7 option:selected').val()) == 0){
	 //            if (errorList2.find('.errormessage-userID7').length == 0) {
	 //                $('<li />', { html: 'Chat access required !', class: 'col-sm-6 errormessage-userID7' })
	 //                .appendTo(errorList2)
	 //                .click(function () {
	 //                    userID7.focus();
	 //                })
	 //                $('#errorMsg2').show();
	 //                userID7.parent().addClass('has-error');
	 //            }
	 //        }else {
	 //            if (userID7.parent().hasClass('has-error')) {
	 //                userID7.parent().removeClass('has-error')
	 //            };
	 //            if (errorList2.find('.errormessage-userID7').length > 0) {
	 //                errorList2.find('.errormessage-userID7').remove();
	 //            }
	 //            if(errorList2.children('li').length > 0){
	 //            	$('#errorMsg2').show();
	 //            } else{
	 //            	$('#errorMsg2').hide();
	 //            }
	 //        }
  //       });        
        
        
  //       if (errorList2.children('li').length > 0) {
  //           $('#errorMsg2').show();
  //       } else {
  //           $('#errorMsg2').hide();
  //           $('#inviteUser').modal('hide');
  //           $scope.inviteUserObjectflag = true;
  //           obj.userflag = false;
  //           obj.emailflag = false;
  //           if(typeof obj.username === 'undefined'){
  //           	console.log('user not defined');
  //           	obj.emailflag = true;
  //           }
  //           if(typeof obj.email === 'undefined'){
  //           	console.log('email not defined');
  //           	obj.userflag = true;
  //           }
  //           obj.email = '(' + obj.email + ')';
  //           $scope.inviteUserObject.push(obj);
  //           //$scope.lengthOfProjects = $scope.listOfProjects.length;
  //           //console.log($scope.listOfProjects);
  //           //$scope.project = {};
  //           //$scope.listOfProjects.startusers = 0;
  //           //$scope.listOfProjects.endusers = 0;
  //           //$scope.listOfProjects.month1 = 0;
  //           //$scope.listOfProjects.month2 = 0;
  //           //$scope.setCurrentusers = false;
  //           //$scope.job.country = 'Netherlands';

  //       }
  //       /*
  //       if(check == 1 && !(errorList2.children('li').length > 0)){
  //           $('#addProject').modal('hide');
  //       }

  //       if(check == 2){
  //           $('#addProject').modal('hide');
  //       }
  //      */
  //   }
    
}]);
