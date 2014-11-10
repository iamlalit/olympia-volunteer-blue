
OrgVolApp.controller('searchJob', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
    //search job logi starts
      $scope.categories = ['Aggriculture', 'Animals', 'Arts', 'Communications access', 
    'Community development', 'conflict resolution'];
    
      $scope.skills = ['Answering Telephones', 'Accounting', 'Administration', 'Business Correspondence', 'Client Relations', 'Communication',
            'Crowd Control', 'Crime & Safety', 'Customer Service', 'Cooking', 'Clerical', 'Document Management', 'Disaster Relief', 
            'Event Coordination', 'Employee Relations', 'Legal Familiarity', 'Meeting Planning', 'Office Administration',
            'Organizational Skills', 'Problem Solving', 'Public Relations', 'Public Speaking', 'People Management', 'Receptionist', 'Stenography', 
            'Travel Arrangements', 'Word Processing', 'Written Communication'];
    
      $scope.diplomas = ['First Aid Diploma', 'Community Service Coordination', 'Football Referee License', 'Active Volunteering', 'Training and Assessmement', 
                  'Program Coordination', 'Effective Communication', 'Negotiation', 
                  'Customer Service', 'Risk Management'];

      $scope.languages = ['Afrikaans','Albanian', 'Arabic', 'Armenian', 'Azerbaijani', 'Basque', 'Belarusian', 'Bengali', 'Bosnian', 'Bulgarian', 
            'Catalan', 'Cebuano', 'Chinese', 'Danish', 'Dutch', 'English', 'Esperanto', 'Estonian', 'Filipino', 'French', 'Georgian', 
            'German', 'Greek', 'Hausa', 'Hebrew', 'Hindi', 'Hungarian', 'Indonesian', 'Irish', 'Italian', 'Japanese', 
            'Korean', 'Lao', 'Latin', 'Mongolian', 'Norwegian', 'Persian', 'Portuguese', 'Punjabi', 'Romanian', 'Russian', 'Serbian', 
            'Spanish',  'Swedish', 'Thai', 'Turkish', 'Ukrainian', 'Urdu', 'Vietnamese', 'Welsh', 'Yoruba',
             'Zulu'];

      $scope.timePreference = ['Monday - Full day', 'Tuesday - Full day', 'Wednesday - Full day', 'Thursday - Full day', 'Friday - Full day', 'Saturday - Full day', 'Sunday - Full day', 
            'Monday - Morning', 'Tuesday - Morning', 'Wednesday - Morning', 'Thursday - Morning', 'Friday - Morning', 'Saturday - Morning', 'Sunday - Morning', 
            'Monday - Afternoon', 'Tuesday - Afternoon', 'Wednesday - Afternoon', 'Thursday - Afternoon', 'Friday - Afternoon', 'Saturday - Afternoon', 'Sunday - Afternoon', 
            'Monday - Evening', 'Tuesday - Evening', 'Wednesday - Evening', 'Thursday - Evening', 'Friday - Evening', 'Saturday - Evening', 'Sunday - Evening', 
            'Monday - Late Night', 'Tuesday - Late Night', 'Wednesday - Late Night', 'Thursday - Late Night', 'Friday - Late Night', 'Saturday - Late Night', 'Sunday - Late Night'];
         
      $scope.organizationTypes = [ 'Profit organizations', 'Non profit organizations', 'Political organizations', 'Volunteer groups']      
    $scope.sortByList = ['Newest Organizations', 'Best Match', 'Oldest Organizations'];
    
    $scope.Organizations = [];
    $scope.Organizations.push({Name:"Electronic Information for Libraries",
            typeOfInformation: 'Non-Profit Organization',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'Electronic Information for Libraries (EIFL) works with libraries worldwide to enable access to digital information for people in developing and transition countries. They are an international not-for-profit organisation based in Europe with a global network of partners.',
            about: 'About 1 hour ago',
            image: '/.tmp/img/eifl.jpg',
            invited: true,   
            selected: false,
            value: false
    }); 
    $scope.Organizations.push({Name:"Samsara Foundation",
            typeOfInformation: 'Volunteer Groups',
            city: 'Hippolytushoef, Noord Holland', 
            bodyText: 'Samsara works in Northern Thailand - especially in one of the country’s poorest provinces, Mae Hong Son. Priority is given to very basic and concrete projects like the installation of water purification systems, the building of kitchens and dormitories and the provision of educational tools.Besides these projects, Samsara provides scholarships for individual children who have promising school results but may not have the means to continue their studies without financial support.',
            status: '4/4 diploma/certificate/skills',     
            about: 'About 5 hours ago',
            image: '/.tmp/img/SF.jpg',
            invited: false,
            selected: false,
            value: false
    }); 
    $scope.Organizations.push({Name:"HarambeeHolland",
            typeOfInformation: 'Profit Organization',
            city: 'De Kwakel, Noord Holland', 
            bodyText: "Harambee Foundation Holland (HFH) is a non-profit organization set up in the Netherlands, whose activities are aimed at creating a substantial improvement of educational opportunities and living conditions in developing countries. The foundation's main focus is on primary and technical education.",
            about: 'About 3 hours ago',
            image: '/.tmp/img/HH.png',
            invited: false,
            selected: false,
            value: false    
    }); 
    $scope.Organizations.push({Name:"Hivos",
            typeOfInformation: 'Volunteer Groups',
            city: 'Drechterland, Noord Holland', 
            bodyText: 'Hivos (Humanist Institute for Cooperation in full, Dutch: Humanistisch Instituut voor Ontwikkelingssamenwerking) is a Dutch organization for development. Hivos provides financial support to organizations in Africa, Latin America and Asia, it provides advocacy and it supports knowledge sharing in particular in the field of social change, digital activism and rural innovations.',
            about: 'About 6 hours ago',
            image: '/.tmp/img/hivos.png',
            invited: false,
            selected: true,      
            value: false
    }); 
    $scope.Organizations.push({Name:"Samenwerkende Hulporganisaties",
            typeOfInformation: 'Non-Profit Organization',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'The Samenwerkende Hulporganisaties (Dutch for Cooperating Aid Organizations) is a cooperative effort of aid organizations. The organizations work together to give humanitarian aid to people in disaster areas. The SHO cooperatively collects donations and informs to the public. The SHO had campaigns for Iraq, Bam, Darfur, the 2004 Indian Ocean earthquake, for the 2005 Kashmir earthquake, Birma, the 2010 Haiti earthquake, 2010 Pakistan floods and most recently the 2011 Horn of Africa drought.',
            about: 'About 1 hours ago',
            image: '/.tmp/img/SHO.jpg',
            invited: true,
            selected: false,
            value: false      
    }); 
    $scope.Organizations.push({Name:"SNV Netherlands Development Organisation",
            typeOfInformation: 'Political Organization',
            city: 'Drechterland, Noord Holland', 
            bodyText: 'United African Organization is a dynamic coalotion of African community-based organizations that promotes social and economic justice, civic participation, and empowerment of African immigrants and refugees in Illinois',
            about: 'About 6 hours ago',
            image: '/.tmp/img/SNV_logo_web.gif',
            invited: false,
            selected: false,      
            value: false
    }); 
    $scope.Organizations.push({Name:"Centre for Research on Multinational Corporations",
            typeOfInformation: 'Profit Organization',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'The Centre for Research on Multinational Corporations (SOMO–Dutch: Stichting Onderzoek Multinationale Ondernemingen), is an independent, non-profit research and network organisation working on social, ecological and economic issues related to sustainable development. Since 1973, the organisation investigates multinational corporations and the consequences of their activities for people and the environment around the world.',
            about: 'About 2 hours ago',
            image: '/.tmp/img/Somo.jpg',
            invited: false,
            selected: false,      
            value: false
    }); 
      
    $scope.Organizations.push({Name:"ArchiAfrika",
            typeOfInformation: 'Profit Organization',
            city: 'Amsterdam, Noord Holland', 
            bodyText: 'ArchiAfrika\'s aim is to put African architecture on the map, to ensure that African Architecture is represented within the international architectural debate, to contribute to the understanding and development of African architecture by offering a platform for the exchange of knowledge and information on activities, people and projects dealing with architecture in Africa, and to stimulate the dialogue between Africa and the rest of the world on African architecture.',
            about: 'About 1 hour ago',
            image: '/.tmp/img/AA.png',
            invited: true,   
            selected: false,
            value: false
    }); 
    $scope.Organizations.push({Name:"Amsterdam Institute of Finance",
            typeOfInformation: 'Political Organization',
            city: 'Hippolytushoef, Noord Holland', 
            bodyText: "Amsterdam Institute of Finance, or AIF, is a financial training institute for finance specialists and other professionals based in The Netherlands. AIF offers open enrollment training programs at its premises in Amsterdam and in other major cities around the world in partnership with CFA Institute and New York University Stern School of Business. In addition, AIF runs customized in-company training programs and has organized programs for clients in Asia, the Middle East, South America, and throughout Europe.",
            status: '4/4 diploma/certificate/skills',     
            about: 'About 5 hours ago',
            image: '/.tmp/img/AIF.jpg',
            invited: false,
            selected: false,
            value: false
    }); 
    $scope.Organizations.push({Name:"Fietsersbond",
            typeOfInformation: 'Non-Profit Organization',
            city: 'Aalsmeerderbrug, Noord Holland', 
            bodyText: 'The Dutch Fietsersbond (Cyclists\' Union) is an organisation which represents the interests of cyclists in the Netherlands by working towards the expansion and improvement of bicycle friendly infrastructure. The Fietsersbond does this by lobbying, and working with, all levels of government on urban planning, policies, and laws, etc. to improve cycling conditions and make Dutch cities, towns and country areas safer and easier to get around in for anyone who rides a bike',
            about: 'About 1 hour ago',
            image: '/.tmp/img/FSB.jpg',
            invited: true,
            selected: false,
            value: false      
    }); 


      $scope.favouriteOrganizations = [];
      $scope.groupedItems = [];
      $scope.OrganizationsPerPage = 8;
      $scope.pagedItems = [];
      $scope.currentPage = 0;
      $scope.lengthOfOrganizations = $scope.Organizations.length;
      $scope.lengthOfFavouriteOrganizations = $scope.favouriteOrganizations.length;
      
      // calculate page in place
      $scope.calculateLength = function(){
            $scope.lengthOfOrganizationsPerPage = $scope.pagedItems[$scope.currentPage].length;
      }
      $scope.groupToPages = function () {
        $scope.pagedItems = [];
        
        for (var i = 0; i < $scope.lengthOfOrganizations; i++) {
            if (i % $scope.OrganizationsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.OrganizationsPerPage)] = [ $scope.Organizations[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.OrganizationsPerPage)].push($scope.Organizations[i]);
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
      //to add Organization into favourite Organizationlist
      $scope.copyOrganization= function(item, from, to) {
            var idx=from.indexOf(item);
            //to check for uncommon objects
            $scope.Organizations[idx].value = !$scope.Organizations[idx].value;
            if($scope.Organizations[idx].value){
                
                var check = true;
                if (idx != -1) {
                      for (var i = 0; i <= $scope.lengthOfFavouriteOrganizations; i++) {
                            if(JSON.stringify(item) === JSON.stringify($scope.favouriteOrganizations[i]) ){
                                  check = false;
                            }
                      };
                      if(check == true){
                            $scope.Organizations[idx].value = false;
                            item.value = true;
                            to.push(item);
                      }
                }   

            }else{
                console.log("unselect me");
                $scope.deleteOrganization(item, to,from);
            }
            $scope.lengthOfFavouriteOrganizations = $scope.favouriteOrganizations.length;
      };
      //to remove the Jobfrom favourite Jobs list
      $scope.deleteOrganization= function(item, from, to){
            var idx=from.indexOf(item);
            var idx2=to.indexOf(item);
            if (idx != -1) {
                  from.splice(idx, 1);
            }
            console.log($scope.Organizations[idx2]);     
            $scope.Organizations[idx2].value = false;
            $scope.lengthOfFavouriteOrganizations = $scope.favouriteOrganizations.length;
      }
      
      $scope.dismissModal = function() { }
      $scope.openModal = function(object) {
            $scope.modalJob= object;
       }

       $scope.CreateObject = function( job ) {
            window.location.href = "/organization/organizationpcms/organizationpcms.html?organizationName=" + job.Name +"&organizationDate=" + job.about + "&owner=" + $rootScope.owner;
       }


    //search job logic ends
}]);

OrgVolApp.controller('modalVolCtrl', function($scope) {
      $scope.jobPost = [{jobTitle: "Volunteer Grant Writers", client:"Posted 1 month ago by Hans Klevenbeek" ,Applicants: 50, messaged: 3, hired:2, status:"Open"},
          {jobTitle: "Outreach Volunteer", client:"Posted 2 years ago by Hans Klevenbeek", Applicants: 27, messaged: 1, hired:0, status:"Closed"},
          {jobTitle: "Volunteer Coordinator - Volunteer", client:"Posted 4 days ago by Hans Klevenbeek", Applicants: 34, messaged: 1, hired:1, status:"Open"},
          {jobTitle: "Crowd Control Volunteering", client:"Posted 6 weeks ago by Hans Klevenbeek", Applicants: 43, messaged: 3, hired:0, status:"Open"},
          {jobTitle: "Football Refree Volunteer", client:"Posted 2 months ago by Hans Klevenbeek", Applicants: 27, messaged: 2, hired:0, status:"Closed"},
          {jobTitle: "Volunteering Coordinator", client:"Posted 3 weeks ago by Hans Klevenbeek", Applicants: 34, messaged: 5, hired:3, status:"Open"},
          {jobTitle: "Crowd Control Volunteer", client:"Posted 2 weeks ago by Hans Klevenbeek", Applicants: 43, messaged: 4, hired:2, status:"Closed"},
          {jobTitle: "Football Refree Volunteering", client:"Posted 1 month ago by Hans Klevenbeek", Applicants: 34, messaged: 1, hired:0, status:"Closed"},
          {jobTitle: "Public Relation Intern - Volunteer", client:"Posted 10 days ago by Hans Klevenbeek", Applicants: 34, messaged: 3, hired:2, status:"Open"}];
      var message = "Hello, \n\n"+
                  "I'd like to personally invite you to apply to my job. Please review the job post and apply if you are available \n\n"+
                  "Rob";
      $("#modalMessage").val(message);
});