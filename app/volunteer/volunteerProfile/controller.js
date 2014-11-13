
OrgVolApp.controller('jobDetails', ['$scope', function ($scope) {
    $scope.volunteerSkills = ['Cooking', 'Education', 'Caring for People', 'Communication', 'Crowd control', 'Damage control', 'First aid'];

    $scope.variableMoreLess = 3;
    $scope.listOfSchools = [];
    $scope.listOfJobs = [];
    $scope.listOfProjects = [];
    $scope.listOfMembers = [];
    $scope.volnteerRecommendations = [];
    $scope.areaFocuses = ["Disability", "Education", "Energy conservation", "Government reform", "Housing and homelessness"];
    $scope.contactVolWork = ["Micro - volunteering", "Orphanage", "Politics", "Volunteering in schools", "Research & science", "Eco-tourism"];
    $scope.contactVolDiploma = ["Program coordinator", "Negotiation", "Communication", "Football match refree"];
    $scope.contactVolTime = ["Weekends - Full day", "Monday - Late Night", "Thursday - Evening"];

    $scope.listOfProjects.push({
      'name': 'Positive Psychology Program',
      'description': 'Volunteer as a content and relations manager and develop your knowledge of social media with Positive Psychology Program in the Netherlands. Volunteers will work on a website that brings together psychology practitioners and scientists who share important information that can improve other people\'s lives. Participants can stay from three to six months in Amsterdam, the Hague, or two other cities.',
      'date': 'March 2011 - January 2014'

    });

    $scope.listOfProjects.push({
      'name': 'Crowd control at political campaign',
      'description': 'Volunteering was generally considered an activity to improve the well-being of others without any remuneration. It used to be thought of as being rooted in a positive attitude: working because you want to and not because you have to. It has now been expanded to a process of learning and developing. It takes many forms, and can be performed by a wide range of people in many areas, while giving the feeling of satisfaction that comes from giving back to a community, being helpful, being busy, meeting new people and developing skills. There are many interesting volunteering positions you can apply for in the Netherlands through different organisations.',
      'date': 'February 2014'
    });

    $scope.listOfMembers.push({
      'name': 'Hough Douglas',
      'image': '/.tmp/img/name12.png',
      'profile': 'Software developer'
    })
    $scope.listOfMembers.push({
      'name': 'Joep Dijkstra',
      'image': '/.tmp/img/name10.png',
      'profile': 'Sr. principle software developer'
    })
    $scope.listOfMembers.push({
      'name': 'Han je kaap',
      'image': '/.tmp/img/name8.png',
      'profile': 'Technical Lead'
    })

    $scope.lengthOfProjects = $scope.listOfProjects.length
    $scope.volnteerRecommendations.push({
      'name': 'Geertruda Brouwer',
      'description': 'Hans worked on TFS team in which I was a Project Manager. He was a key team member and contributor for development of complex SSRS reports. He worked well with the team and required very little instruction. Hans was well respected by the team and his colleagues. CareFusion valued his contribution and his contribution and his technical knowledge.',
      'dateMessage': 'April 29, 2012 ,Geertruda Brouwer managed Hans at careFusion.' ,
      'image': '/.tmp/img/name14.png'
    });
    $scope.volnteerRecommendations.push({
      'name': 'Marleen Bosch',
      'description': 'Hans worked on TFS team in which I was a Project Manager. He was a key team member and contributor for development of complex SSRS reports. He worked well with the team and required very little instruction. Hans was well respected by the team and his colleagues. CareFusion valued his contribution and his contribution and his technical knowledge.',
      'dateMessage': 'April 29, 2013 , Marleen Bosch managed Hans at careFusion.' ,
      'image': '/.tmp/img/name13.png'
    });
    $scope.lengthOfRecommendations = $scope.volnteerRecommendations.length;


    $scope.listOfSchools.push({
      'name': 'London School of Economics(University of London)',
      'degree': 'Politics and International Relations',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'areaOfStudy': 'Economics'
    });
    $scope.listOfSchools.push({
      'name': 'Harvard University School of Medicine',
      'degree': 'Politics and International Relations',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'areaOfStudy': 'Economics'
    });
    $scope.listOfSchools.push({
      'name': 'Tufts University School of Medicine',
      'degree': 'Politics and International Relations',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'areaOfStudy': 'Economics'
    });
    $scope.lengthOfSchools = $scope.listOfSchools.length;
    $scope.listOfJobs.push({
      'name': 'Micro Finance Volunteering Oppurtunities',
      'organization': 'Red Cross NL',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'description': 'Micro Projects Volunteering Program is mainly focused on rural Women & Youth empowerments programs in Nepal. This program generally supports the rural women & youths by means of short term professional training for various income generating schemes in order to make the system fruitful.'
    });
    $scope.listOfJobs.push({
      'name': 'Volunteer Event @ Durfee-Thompson School',
      'organization': 'Red Cross NL',
      'startDate': 'Jul 2010',
      'endDate': 'Jun 2012',
      'description': 'Micro Projects Volunteering Program is mainly focused on rural Women & Youth empowerments programs in Nepal. This program generally supports the rural women & youths by means of short term professional training for various income generating schemes in order to make the system fruitful.'
    });

    $scope.lengthOfJobs = $scope.listOfJobs.length;
    
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
  $scope.volunteerName = getParameterByName('name');
  $scope.volunteerCity = getParameterByName('city');
  $scope.volunteerImage = getParameterByName('image');

}]);
