'use strict';
/* main App */
var app = angular.module('postJobcontroller', []);
app.controller('postJobCntrl', ['$scope', function($scope){
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
    
}]);
