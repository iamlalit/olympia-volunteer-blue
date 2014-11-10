
OrgVolApp.controller('jobDetails', ['$scope', '$filter', 'ngTableParams', '$rootScope',  function ($scope, $filter, ngTableParams, $rootScope) {
    
  $scope.organizationCategories = ["Immigration", "Education", "Civic engagement", "Media", "Job and workplace", "consumer protection"];  

  $scope.members = [{name:"Robert de Bakker", image:"../../img/name6.png"}, 
                    {name:"Lydia jnasen", image:"../../img/name12.png"}, 
                    {name:"Marleen Bosch", image:"../../img/name9.png"}];

  $scope.volunteers = [{name:"Geertruda Brouwer", image:"../../img/name2.png"}, 
                    {name:"Sterre Jansen", image:"../../img/name11.png"}, 
                    {name:"Driel Hendriks", image:"../../img/name7.png"},
                    {name:"Els Dekker", image:"../../img/name1.png"}, 
                    {name:"Joep Jacobs", image:"../../img/name4.png"}];  

  $scope.jobPost = [{jobTitle: "Football refree volunteering", client:"Posted 1 month ago by Hans Klevenbeek", Applicants: 34, messaged: 1, hired:0, status:"Closed", jobDate: '1 month ago'},
        {jobTitle: "Volunteer grant writers", client:"Posted 1 month ago by Hans Klevenbeek" ,Applicants: 50, messaged: 3, hired:2, status:"Open", jobDate: '1 month ago'},
        {jobTitle: "Volunteer coordinator - volunteer", client:"Posted 4 days ago by Hans Klevenbeek", Applicants: 34, messaged: 1, hired:1, status:"Open", jobDate: '4 days ago'},
        {jobTitle: "Crowd control volunteering", client:"Posted 6 weeks ago by Hans Klevenbeek", Applicants: 43, messaged: 3, hired:0, status:"Open", jobDate: '6 weeks ago'},
        {jobTitle: "Football refree volunteer", client:"Posted 2 months ago by Hans Klevenbeek", Applicants: 27, messaged: 2, hired:0, status:"Closed", jobDate: '2 month ago'},
        {jobTitle: "Outreach volunteer", client:"Posted 2 years ago by Hans Klevenbeek", Applicants: 27, messaged: 1, hired:0, status:"Closed", jobDate: '2 years ago'},
        {jobTitle: "Crowd control volunteer", client:"Posted 2 weeks ago by Hans Klevenbeek", Applicants: 43, messaged: 4, hired:2, status:"Closed", jobDate: '2 weeks ago'},
        {jobTitle: "Public relation intern - volunteer", client:"Posted 10 days ago by Hans Klevenbeek", Applicants: 34, messaged: 3, hired:2, status:"Open", jobDate: '10 days ago'}];
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  if($rootScope.owner == 'organization')
    $scope.organizationName = getParameterByName('organizationName');
  else{
    $scope.organizationName = 'Rainbow Group';
  }
}]);