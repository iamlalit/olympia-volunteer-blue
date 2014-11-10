'use strict';
/* main App */
OrgVolApp.controller('searchVolCtrl', function($scope){
	//Dummy data

      $scope.categories = ['Aggriculture', 'Animals', 'Arts', 'Communications access', 
	'Community development', 'conflict resolution'];
	
      $scope.skills = ['Answering telephones', 'Accounting', 'Administration', 'Business correspondence', 'Client relations', 'Communication',
            'Crowd control', 'Crime & safety', 'Customer service', 'Cooking', 'Clerical', 'Document management', 'Disaster relief', 
            'Event coordination', 'Employee relations', 'Legal familiarity', 'Meeting planning', 'Office administration',
            'Organizational skills', 'Problem solving', 'Public relations', 'Public speaking', 'People management', 'Receptionist', 'Stenography', 
            'Travel arrangements', 'Word processing', 'Written communication'];
	
      $scope.diplomas = ['First aid diploma', 'Community service coordination', 'Football referee license', 'Active volunteering', 'Training and assessmement', 
                  'Program coordination', 'Effective communication', 'Negotiation', 
                  'Customer service', 'Risk management'];

      $scope.languages = ['Afrikaans','Albanian', 'Arabic', 'Armenian', 'Azerbaijani', 'Basque', 'Belarusian', 'Bengali', 'Bosnian', 'Bulgarian', 
            'Catalan', 'Cebuano', 'Chinese', 'Danish', 'Dutch', 'English', 'Esperanto', 'Estonian', 'Filipino', 'French', 'Georgian', 
            'German', 'Greek', 'Hausa', 'Hebrew', 'Hindi', 'Hungarian', 'Indonesian', 'Irish', 'Italian', 'Japanese', 
            'Korean', 'Lao', 'Latin', 'Mongolian', 'Norwegian', 'Persian', 'Portuguese', 'Punjabi', 'Romanian', 'Russian', 'Serbian', 
            'Spanish',  'Swedish', 'Thai', 'Turkish', 'Ukrainian', 'Urdu', 'Vietnamese', 'Welsh', 'Yoruba',
             'Zulu'];

      $scope.timePreference = ['Monday - full day', 'Tuesday - full day', 'Wednesday - full day', 'Thursday - full day', 'Friday - full day', 'Saturday - full day', 'Sunday - full day', 
        	'Monday - morning', 'Tuesday - morning', 'Wednesday - morning', 'Thursday - morning', 'Friday - morning', 'Saturday - morning', 'Sunday - morning', 
        	'Monday - afternoon', 'Tuesday - afternoon', 'Wednesday - afternoon', 'Thursday - afternoon', 'Friday - afternoon', 'Saturday - afternoon', 'Sunday - afternoon', 
        	'Monday - evening', 'Tuesday - evening', 'Wednesday - evening', 'Thursday - evening', 'Friday - evening', 'Saturday - evening', 'Sunday - evening', 
        	'Monday - Late Night', 'Tuesday - Late Night', 'Wednesday - Late Night', 'Thursday - Late Night', 'Friday - Late Night', 'Saturday - Late Night', 'Sunday - Late Night'];
        	

      $scope.volunteerTypes = ['Individual volunteers', 'Group volunteers', 'Organization volunteers'];
  $scope.sortByList = ['Best match', 'Newest applicants', 'Oldest applicants', 'Feedback'];

  $scope.Applicants = [];
	$scope.Applicants.push({Name:"Marleen Bosch",
            job: 'QA Analyst',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taken place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',  
            image: '../../img/name1.png',
            statusColor: 'red',
            contact: '1',
            NumbertoStart: 7,
            joined: 'Joined 1 year ago',
            lastActive: 'Last active: 1 day ago',
            volunteerSkills: ['Education', 'Crowd control', 'Caring for people', 'Damage control', 'First aid'],
            invited: true,   
            selected: false,
            value: false
    }); 
	$scope.Applicants.push({Name:"Geertruda Brouwer",
            job: 'QA Specialist',
            city: 'Hippolytushoef, Noord Holland', 
            bodyText: 'My name is Geertruda Brouwer, I am 53 years of age. I am a Ghanaian fromm the Volta-Region in a small village called Sokode-Gbogame. I am a physically challenged person.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '4/4 diploma/certificate/skills', 
            image: '../../img/name2.png',
            statusColor: 'green',    
            contact: '2',
            joined: 'Joined 5 year ago',
            lastActive: 'Last active: 10 days ago',
            volunteerSkills: ['Cooking', 'First aid', 'Education', 'Caring for people', 'Communication'],
            invited: false,
            selected: false,
            value: false
    }); 
	$scope.Applicants.push({Name:"Jan-Klaassen Groot",
            job: 'QA Engineer',
            city: 'De Kwakel, Noord Holland', 
            bodyText: 'I am interested in any position open, in your organization, concerning web development, design, database administration, or other infotech including the position posted. Please click here for optimal viewing of my curriculum vitae.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            image: '../../img/name3.png',
            statusColor: 'red',
            contact: '0',
            joined: 'Joined 3 months ago',
            lastActive: 'Last active: 1 month ago',
            volunteerSkills: ['Damage control', 'First aid', 'Caring for people', 'Communication'],
            invited: false,
            selected: false,
            value: false    
    }); 
	$scope.Applicants.push({Name:"Geertruda Dekker",
            job: 'Automation Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taking place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            image: '../../img/name4.png',
            statusColor: 'red',
            contact: '3',
            joined: 'Joined 1 day ago',
            lastActive: 'Last active: 1 day ago',
            volunteerSkills: ['Cooking', 'Caring for people', 'Communication'],
            invited: true,
            selected: false,
            value: false      
    }); 
	$scope.Applicants.push({Name:"Hendrik Brouwer",
            job: 'QA Analyst',
            city: 'Drechterland, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            image: '../../img/name5.png',
            statusColor: 'red',
            contact: '4',
            joined: 'Joined 6 months ago',
            lastActive: 'Last active: 6 days ago',
            volunteerSkills: ['Cooking', 'Education', 'Caring for people', 'Communication'],
            invited: false,
            selected: false,      
            value: false
    }); 
      $scope.Applicants.push({Name:"Driel Brouwer",
            job: 'QA Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            image: '../../img/name6.png',
            statusColor: 'red',
            contact: '5',
            joined: 'Joined 2 months ago',
            lastActive: 'Last active: 21 days ago',
            volunteerSkills: ['Cooking', 'Damage control', 'First aid', 'Communication', 'Caring for People', ],
            invited: false,
            selected: false,      
            value: false
    }); 
      
      $scope.Applicants.push({Name:"Joep Jacobs",
            job: 'QA Analyst',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taken place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',  
            image: '../../img/name7.png',
            statusColor: 'red',
            contact: '6',
            joined: 'Joined 1 year ago',
            lastActive: 'Last active: 1 day ago',
            volunteerSkills: ['Cooking', 'Caring for people', 'Communication'],
            invited: true,   
            selected: false,
            value: false
    }); 
  $scope.Applicants.push({Name:"Sterre Jansen",
            job: 'QA Specialist',
            city: 'Hippolytushoef, Noord Holland', 
            bodyText: 'My name is Geertruda Brouwer, I am 53 years of age. I am a Ghanaian fromm the Volta-Region in a small village called Sokode-Gbogame. I am a physically challenged person.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '4/4 diploma/certificate/skills', 
            image: '../../img/name8.png',
            statusColor: 'green',    
            contact: '7',
            joined: 'Joined 5 year ago',
            lastActive: 'Last active: 16 days ago',
            volunteerSkills: ['Cooking', 'Education', 'Damage control', 'First aid'],
            invited: false,
            selected: false,
            value: false
    }); 
  $scope.Applicants.push({Name:"Geertruda Hoek",
            job: 'QA Engineer',
            city: 'De Kwakel, Noord Holland', 
            bodyText: 'I am interested in any position open, in your organization, concerning web development, design, database administration, or other infotech including the position posted. Please click here for optimal viewing of my curriculum vitae.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            image: '../../img/name9.png',
            statusColor: 'red',
            contact: '8',
            joined: 'Joined 3 months ago',
            lastActive: 'Last active: 9 days ago',
            volunteerSkills: ['Cooking', 'Damage control', 'First aid'],
            invited: false,
            selected: false,
            value: false    
    }); 
  $scope.Applicants.push({Name:"Driel Hendriks",
            job: 'Automation Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'I am a committed professional with a strong interest in technology as it relates to the educational process in the classroom, or anywhere learning is taking place. I am kind and approachable and I will solve creatively solve any problem at hand.',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            image: '../../img/name10.png',
            statusColor: 'red',
            contact: '9',
            joined: 'Joined 1 day ago',
            lastActive: 'Last active: 1 day ago',
            volunteerSkills: ['Cooking', 'Education', 'Crowd control', 'Damage control', 'First aid'],
            invited: true,
            selected: false,
            value: false      
    }); 
  $scope.Applicants.push({Name:"Els Dekker",
            job: 'QA Analyst',
            city: 'Drechterland, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            image: '../../img/name11.png',
            statusColor: 'red',
            contact: '10',
            joined: 'Joined 6 months ago',
            lastActive: 'Last active: 2 days ago',
            volunteerSkills: ['Damage control', 'First aid', 'Caring for people', 'Communication'],
            invited: false,
            selected: false,      
            value: false
    }); 
      $scope.Applicants.push({Name:"Hans Dijkstra",
            job: 'QA Engineer',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            bodyTextFull: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
            status: '2/4 diploma/certificate/skills',     
            image: '../../img/name12.png',
            statusColor: 'red',
            contact: '11',
            joined: 'Joined 2 months ago',
            lastActive: 'Last active: 25 days ago',
            volunteerSkills: ['Crowd control', 'Damage control', 'First aid'],
            invited: false,
            selected: false,      
            value: false
    }); 
      

    $scope.volunteerSkills = ['Cooking', 'Education', 'Caring for people', 'Communication', 'Crowd control', 'Damage control', 'First aid'];
      $scope.favouriteApplicants = [];
      $scope.groupedItems = [];
      $scope.applicantsPerPage = 8;
      $scope.pagedItems = [];
      $scope.currentPage = 0;
      $scope.lengthOfApplicants = $scope.Applicants.length;
      $scope.lengthOfFavouriteApplicants = $scope.favouriteApplicants.length;
      
      // calculate page in place
      $scope.calculateLength = function(){
            $scope.lengthOfApplicantsPerPage = $scope.pagedItems[$scope.currentPage].length;
      }
      $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.lengthOfApplicants; i++) {
            if (i % $scope.applicantsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.applicantsPerPage)] = [ $scope.Applicants[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.applicantsPerPage)].push($scope.Applicants[i]);
            }
        }
        $scope.calculateLength();
      };
      $scope.groupToPages();
      $scope.range = function (start, end) {
            var ret = [];
            if (!end) {
                  end = start;
                  start = 0;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            return ret;
      };
      $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                  $scope.currentPage--;
            }
            $scope.calculateLength();
      };
      $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pagedItems.length - 1) {
                  $scope.currentPage++;
            }
            $scope.calculateLength();
      };
      $scope.setPage = function () {
            $scope.currentPage = this.n;
            $scope.calculateLength();
      };

      
      //Specific functions
      //to add applicant into favourite applicant list
      $scope.copyApplicant = function(item, from, to) {
            var idx=from.indexOf(item);
            //to check for uncommon objects
            $scope.Applicants[idx].selected = !$scope.Applicants[idx].selected;
            if($scope.Applicants[idx].selected){
                
                var check = true;
                if (idx != -1) {
                      for (var i = 0; i <= $scope.lengthOfFavouriteApplicants; i++) {
                            if(JSON.stringify(item) === JSON.stringify($scope.favouriteApplicants[i]) ){
                                  check = false;
                            }
                      };
                      if(check == true){
                            $scope.Applicants[idx].selected = false;
                            item.selected = true;
                            to.push(item);
                      }
                }   

            }else{
                $scope.deleteApplicant(item, to,from);
            }
            $scope.lengthOfFavouriteApplicants = $scope.favouriteApplicants.length;
      };
      //to remove the applicant from favourite applicants list
      $scope.deleteApplicant = function(item, from, to){
            var idx=from.indexOf(item);
            var idx2=to.indexOf(item);
            if (idx != -1) {
                  from.splice(idx, 1);
            }   
            $scope.Applicants[idx2].selected = false;
            $scope.lengthOfFavouriteApplicants = $scope.favouriteApplicants.length;
      }
      //to clear all th search result
      $scope.clearSearch = function(){
            $scope.Applicants = [];
            $scope.pagedItems = [];
            $scope.lengthOfApplicants = $scope.Applicants.length;
            $scope.lengthOfApplicantsPerPage = $scope.pagedItems.length;
      }
      $scope.dismissModal = function() { }
      $scope.openModal = function(object) {
            $scope.modalApplicant = object;
       }
       //show more show less
       $scope.letterLimit = 150;


       //CONTACT MODAL WNDOW
       $scope.mouseover8 = function(){
             $("#contact-replies8").popover({
                      placement : 'top',
                      trigger: "mouseover"
                });      
            $("#contact-replies8").popover('show');
        }
        $scope.mouseover8leave = function(){
            $("#contact-replies8").popover('hide');   
        }

       $scope.mouseover9 = function(){
             $("#contact-replies9").popover({
                      placement : 'top',
                      trigger: "mouseover"
                });      
            $("#contact-replies9").popover('show');
        }
        $scope.mouseover9leave = function(){
            $("#contact-replies9").popover('hide');   
        }

       $scope.mouseover10 = function(){
             $("#contact-replies10").popover({
                      placement : 'top',
                      trigger: "mouseover"
                });      
            $("#contact-replies10").popover('show');
        }
        $scope.mouseover10leave = function(){
            $("#contact-replies10").popover('hide');   
        }

       $scope.mouseover11 = function(){
             $("#contact-replies11").popover({
                      placement : 'top',
                      trigger: "mouseover"
                });      
            $("#contact-replies11").popover('show');
        }
        $scope.mouseover11leave = function(){
            $("#contact-replies11").popover('hide');   
        }
});

OrgVolApp.controller('modalVolCtrl', function($scope) {
      $scope.jobPost = [{jobTitle: "Volunteer grant writers", client:"Posted 1 month ago by Hans Klevenbeek" ,Applicants: 50, messaged: 3, hired:2, status:"Open"},
          {jobTitle: "Outreach volunteer", client:"Posted 2 years ago by Hans Klevenbeek", Applicants: 27, messaged: 1, hired:0, status:"Closed"},
          {jobTitle: "Volunteer coordinator - volunteer", client:"Posted 4 days ago by Hans Klevenbeek", Applicants: 34, messaged: 1, hired:1, status:"Open"},
          {jobTitle: "Crowd control volunteering", client:"Posted 6 weeks ago by Hans Klevenbeek", Applicants: 43, messaged: 3, hired:0, status:"Open"},
          {jobTitle: "Football refree volunteer", client:"Posted 2 months ago by Hans Klevenbeek", Applicants: 27, messaged: 2, hired:0, status:"Closed"},
          {jobTitle: "Volunteering coordinator", client:"Posted 3 weeks ago by Hans Klevenbeek", Applicants: 34, messaged: 5, hired:3, status:"Open"},
          {jobTitle: "Crowd control volunteer", client:"Posted 2 weeks ago by Hans Klevenbeek", Applicants: 43, messaged: 4, hired:2, status:"Closed"},
          {jobTitle: "Football refree volunteering", client:"Posted 1 month ago by Hans Klevenbeek", Applicants: 34, messaged: 1, hired:0, status:"Closed"},
          {jobTitle: "Public relation intern - volunteer", client:"Posted 10 days ago by Hans Klevenbeek", Applicants: 34, messaged: 3, hired:2, status:"Open"}];
      var message = "Hello, \n\n"+
                  "I'd like to personally invite you to apply to my job. Please review the job post and apply if you are available \n\n"+
                  "Hans Klevenbeek";
      $("#modalMessage").val(message);
});

$(document).ready(function(){
    $("#contact-replies").popover({
          placement : 'top',
          trigger: "mouseover"
    });
    $( "#contact-replies" ).mouseover(function(event) {
        event.preventDefault();
        $("#contact-replies").popover('show');
        event.stopPropagation();
    });
    $( "#contact-replies" ).mouseout(function() {
        event.preventDefault();
        $("#contact-replies").popover('hide');
        event.stopPropagation();
    });
    $("#contact-replies1").popover({
          placement : 'top',
          trigger: "mouseover"
    });
    $( "#contact-replies1" ).mouseover(function(event) {
        $("#contact-replies1").popover('show');
    });
    $( "#contact-replies1" ).mouseout(function() {
        $("#contact-replies1").popover('hide');
    });

    $("#contact-replies2").popover({
          placement : 'top',
          trigger: "mouseover"
    });
    $( "#contact-replies2" ).mouseover(function(event) {
        $("#contact-replies2").popover('show');
    });
    $( "#contact-replies2" ).mouseout(function() {
        $("#contact-replies2").popover('hide');
    });

    $("#contact-replies3").popover({
          placement : 'top',
          trigger: "mouseover"
    });
    $( "#contact-replies3" ).mouseover(function(event) {
        $("#contact-replies3").popover('show');
    });
    $( "#contact-replies3" ).mouseout(function() {
        $("#contact-replies3").popover('hide');
    });

    $("#contact-replies4").popover({
          placement : 'top',
          trigger: "mouseover"
    });
    $( "#contact-replies4" ).mouseover(function(event) {
        $("#contact-replies4").popover('show');
    });
    $( "#contact-replies4" ).mouseout(function() {
        $("#contact-replies4").popover('hide');
    });

    $("#contact-replies5").popover({
          placement : 'top',
          trigger: "mouseover"
    });
    $( "#contact-replies5" ).mouseover(function(event) {
        $("#contact-replies5").popover('show');
    });
    $( "#contact-replies5" ).mouseout(function() {
        $("#contact-replies5").popover('hide');
    });

    $("#contact-replies6").popover({
          placement : 'top',
          trigger: "mouseover"
    });
    $( "#contact-replies6" ).mouseover(function(event) {
        $("#contact-replies6").popover('show');
    });
    $( "#contact-replies6" ).mouseout(function() {
        $("#contact-replies6").popover('hide');
    });
    $("#contact-replies7").popover({
          placement : 'top',
          trigger: "mouseover"
    });
    $( "#contact-replies7" ).mouseover(function(event) {
        $("#contact-replies7").popover('show');
    });
    $( "#contact-replies7" ).mouseout(function() {
        $("#contact-replies7").popover('hide');
    });

    $("#contact-replies8").popover({
          placement : 'top',
          trigger: "mouseover"
    });
    $( "#contact-replies8" ).mouseover(function(event) {
        $("#contact-replies8").popover('show');

    });
    $( "#contact-replies8" ).mouseout(function() {
        $("#contact-replies8").popover('hide');
    });
});
