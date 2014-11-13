
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

  $scope.listOfProjects = [];                    
  $scope.listOfProjects.push({
      'name': 'Crowd control at political campaign',
      'description': 'Volunteering was generally considered an activity to improve the well-being of others without any remuneration. It used to be thought of as being rooted in a positive attitude: working because you want to and not because you have to. It has now been expanded to a process of learning and developing. It takes many forms, and can be performed by a wide range of people in many areas, while giving the feeling of satisfaction that comes from giving back to a community, being helpful, being busy, meeting new people and developing skills. There are many interesting volunteering positions you can apply for in the Netherlands through different organisations.',
      'date': 'February 2014'
    });
  $scope.lengthOfProjects = $scope.listOfProjects.length;

  $scope.jobPost = [{jobTitle: "Football refree volunteering", client:"Posted 1 month ago by Hans Klevenbeek", Applicants: 34, messaged: 1, hired:0, status:"Closed", jobDate: '1 month ago', description: 'Are you a student looking for a way to develop as a human rights leader? Would you like to take your activism to a new level? make an investment in Amnesty and Amnesty will make an investment in you.'},
        {jobTitle: "Volunteer coordinator - volunteer", client:"Posted 4 days ago by Hans Klevenbeek", Applicants: 34, messaged: 1, hired:1, status:"Open", jobDate: '4 days ago',  description: 'Intern in kenya work primarily in rural settings and provide support to the community and its leaders. The interns also learn about the rich cultures of Kenya while sharing their own gifts, experience and insights. Our headquarters are located in Nairobi but you will be contacted on phone first.'},
        {jobTitle: "Crowd control volunteering", client:"Posted 6 weeks ago by Hans Klevenbeek", Applicants: 43, messaged: 3, hired:0, status:"Open", jobDate: '6 weeks ago',  description: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois'},
        {jobTitle: "Football refree volunteer", client:"Posted 2 months ago by Hans Klevenbeek", Applicants: 27, messaged: 2, hired:0, status:"Closed", jobDate: '2 month ago',  description: 'Photographer: Volunteering is a wonderful way to give back to the community. We are looking ideally for someone who would like to use their skills and their time to benefit out organization, which has existed for over 50 years and support.'}];
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