var landingController = angular.module('recommendationController', []);
landingController.controller('recommendationPage', ['$scope', function ($scope) {


//ask for recommendation dummy data
$scope.schools = [];
$scope.jobs = [];
$scope.schools.push({'name': "University of Amsterdam",
					'degree': "BSC",
					'areaOfStudy': 'Science',
					'startDate': '2004',
					'endDate': '2007'
					});
$scope.jobs.push({'name': 'Red Cross NL',
				'city': 'Amsterdam',
				'country': 'Netherlands',
				'title': "Volunteer",
				'month1': '1',
				'startDate': '2010',
				'month2': '9',
				'endDate': '2014'});
$scope.owner = [];
$scope.owner.push({'email': 'sander_mrborwn@email.com'});
$scope.owner.push({'email': 'mrborwn@email.com'})

$scope.modalMessage = "Hello, \n\n"+
              "I'm sending this to ask you for a brief recommendation of my work/school that I can include in my Volunteer profile. If you have any questions, let me know. \n\n"+
              "Thanks in advance for helping me out. \n\n" +
              "sander_mrborwn";
}]);
