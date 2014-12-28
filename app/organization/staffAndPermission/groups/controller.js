
OrgVolApp.controller('landingPage', ['$scope', '$filter', 'ngTableParams', function ($scope, $filter, ngTableParams) {
    
    $scope.permissions = [];
    $scope.permissionsGiven = {tags: []};
    $scope.data = [{ groupName:"Red Cross UI Developers" , users:"2", status:"Active"},
                { groupName:"Red Cross .net Developers",  users:"3", status:"Archived", reason: "Declined by You"},
                { groupName:"Red Cross Administration",  users:"3", status:"Hired"},
                { groupName:"Red Cross Managers",  users:"2", status:"Hired"},
                { groupName:"Red Cross Business Analyst",  users:"4", status:"Sent"},
                { groupName:"Red Cross Designers",  users:"2", status:"Archived", reason: "Declined by You"}];


    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 20,          // count per page
        sorting: {
            groupName: 'asc'     // initial sorting
        }
    }, {
        total: $scope.data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')($scope.data, params.orderBy()) :
                                $scope.data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
    $scope.deleteUser = function(user){
      var idx=$scope.data.indexOf(user);
        console.log($scope.data);
        if (idx != -1) {
            $scope.data.splice(idx, 1);  
        }
        $scope.tableParams.reload();
    }
    $scope.addGroups = function(){
      if(typeof $scope.groupName !== 'undefined' && $scope.groupName !== ''){
        $scope.permissions = ["Post a job", "Manage job postings", "Edit profile", "Manage users", "Manage groups", "Approve timesheet"];
      }
    };
    $scope.givePermissions =function(){
      $scope.data.push({ groupName:$scope.groupName , users:"0", status:"Active"}); 
      $scope.tableParams.reload();
      console.log($scope.permissionsGiven);  
    }
    $scope.refreshmodal = function(){
      $scope.permissions = [];
      $scope.groupName = '';
      $scope.permissionsGiven = {tags: []};
    }
}]);

