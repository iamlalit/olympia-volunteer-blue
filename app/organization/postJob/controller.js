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
}]);
