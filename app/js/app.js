'use strict';
/* main App */
var OrgVolApp = angular.module('OrgVolApp', ['ngTable']);

function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var typeOfOwner = getParameterByName('owner');

OrgVolApp.run(function($rootScope){
    $rootScope.owner = typeOfOwner;
})

OrgVolApp.directive('activeNav', function() {
    return {
     restrict: 'A',
     link: function (scope, element, attrs, ctrl) {
        scope.$watch('location.path()', function() {
            if(window.location.pathname.match("/jobPost.html$")){
                $('.container-fluid .recruitment').addClass('active');
            }else if(window.location.pathname.match("/viewApp.html$")){
                $('.container-fluid .recruitment').addClass('active');
            }else if(window.location.pathname.match("/postjob.html$")){
                $('.container-fluid .recruitment').addClass('active');
            }else if(window.location.pathname.match("/searchVol.html$")){
                $('.container-fluid .search').addClass('active');
            }else if(window.location.pathname.match("/organizationpcms.html$")){
                if(typeOfOwner == 'volunteer'){
                    $('.container-fluid .search').addClass('active');
                }else{
                    $('.container-fluid .profile').addClass('active');
                }
            }else if(window.location.pathname.match("/organizationProfile.html$")){
                $('.container-fluid .profile').addClass('active');
            }else if(window.location.pathname.match("/staffAndPermission.html$")){
                $('.container-fluid .profile').addClass('active');
            }else if(window.location.pathname.match("/recommendation.html$")){
                $('.container-fluid .profile').addClass('active');
            }else if(window.location.pathname.match("/message.html$")){
                $('.container-fluid .message').addClass('active');
            }else if(window.location.pathname.match("/volunteerProfile.html$")){
                if(typeOfOwner == 'volunteer'){
                    $('.container-fluid .profile').addClass('active');    
                }else{
                    $('.container-fluid .search').addClass('active');
                }
            }else if(window.location.pathname.match("/jobDetails.html$") || window.location.pathname.match("/jobApply.html$") || window.location.pathname.match("/confirmation.html$")){
                $('.container-fluid .search').addClass('active');
            }else if(window.location.pathname.match("/searchOrg.html$")){
                $('.container-fluid .search').addClass('active');
            }else if(window.location.pathname.match("/searchJob.html$")){
                $('.container-fluid .search').addClass('active');
            }else if(window.location.pathname.match("/jobApplication.html$")){
                $('.container-fluid .profile').addClass('active');
            }else if(window.location.pathname.match("/createProfile.html$")){
                $('.container-fluid .profile').addClass('active');
            }else if(window.location.pathname.match("/submitConformation.html$")){
                $('.container-fluid .recruitment').addClass('active');
            }else if(window.location.pathname.match("/timesheet.html$")){
                $('.container-fluid .reports').addClass('active');
            }

        });
     }
    };
})

OrgVolApp.directive('secondaryNav', function() {
    return {
     restrict: 'A',
     link: function (scope, element, attrs, ctrl) {
        
        scope.$watch('location.path()', function() {
            if(window.location.pathname.match("/jobPost.html$")){
                $('#recruitment').addClass('in');
                $('#recruitment .jobPost').addClass('active arrow_box')
            }else if(window.location.pathname.match("/viewApp.html$")){
                $('#recruitment').addClass('in');
                $('#recruitment .viewApp').addClass('active arrow_box');
            }else if(window.location.pathname.match("/postjob.html$")){
                $('#recruitment').addClass('in');
                $('#recruitment .postajob').addClass('active arrow_box');
            }else if(window.location.pathname.match("/searchVol.html$")){
                $('#search').addClass('in');
                $('#search .searchVol').addClass('active arrow_box');
            }else if(window.location.pathname.match("/organizationpcms.html$")){
                if(typeOfOwner == 'volunteer'){
                    $('#search').addClass('in');
                    $('#search .searchOrg').addClass('active arrow_box');
                }else{
                    $('#profile').addClass('in');
                    $('#profile .profile').addClass('active arrow_box');
                }
            }else if(window.location.pathname.match("/organizationProfile.html$")){
                $('#profile').addClass('in');
                $('#profile .profile').addClass('active arrow_box');
            }else if(window.location.pathname.match("/staffAndPermission.html$")){
                $('#profile').addClass('in');
                $('#profile .staffPermission').addClass('active arrow_box');
            }else if(window.location.pathname.match("/recommendation.html$")){
                $('#profile').addClass('in');
                $('#profile .recommendation').addClass('active arrow_box');
            }else if(window.location.pathname.match("/message.html$")){
                $('#messages').addClass('in');
                $('#messages .message').addClass('active arrow_box');
            }else if(window.location.pathname.match("/volunteerProfile.html$")){
                if(typeOfOwner == 'volunteer'){
                    $('#profile').addClass('in');
                    $('#profile .profile').addClass('active arrow_box');
                }else{
                    $('#search').addClass('in');
                    $('#search .searchVol').addClass('active arrow_box');       
                }
            }else if(window.location.pathname.match("/jobDetails.html$") || window.location.pathname.match("/jobApply.html$") || window.location.pathname.match("/confirmation.html$") || window.location.pathname.match("/confirmation.html$")){
                $('#search').addClass('in');
                $('#search .searchJob').addClass('active arrow_box');
            }else if(window.location.pathname.match("/searchOrg.html$")){
                $('#search').addClass('in');
                $('#search .searchOrg').addClass('active arrow_box')
            }else if(window.location.pathname.match("/searchJob.html$")){
                $('#search').addClass('in');
                $('#search .searchJob').addClass('active arrow_box')
            }else if(window.location.pathname.match("/jobApplication.html$")){
                $('#profile').addClass('in');
                $('#profile .jobApplication').addClass('active arrow_box')
            }else if(window.location.pathname.match("/createProfile.html$")){
                $('#profile').addClass('in');
                $('#profile .profile').addClass('active arrow_box');
            }else if(window.location.pathname.match("/submitConformation.html$")){
                $('#recruitment').addClass('in');
                $('#recruitment .postajob').addClass('active arrow_box');
            }else if(window.location.pathname.match("/timesheet.html$")){
                $('#reports').addClass('in');
                $('#reports .timesheet').addClass('active arrow_box');
            }
        });
     }
    };
})