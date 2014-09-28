var landingController = angular.module('landingController', []);
landingController.controller('landingPage', ['$scope', function ($scope) {


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

}]);
