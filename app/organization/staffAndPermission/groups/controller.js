
OrgVolApp.controller('landingPage', ['$scope', '$filter', 'ngTableParams', function ($scope, $filter, ngTableParams) {
    
    $scope.permissions = [];
    $scope.permissionsGiven = {tags: []};
    $scope.data = [{ groupName:"Resource manager",  users:"3"},
                { groupName:"Admin",  users:"3"},
                { groupName:"Staffing manager",  users:"2"},
                { groupName:"Recruitment manager",  users:"4"},
                { groupName:"Volunteer",  users:"10 "}];
    $scope.permissions = ["Contact volunteer","Apply for job","Contact organization","Post job","Job posting","Recruit","Edit profile","Manage job applications","Manage users", "Manage groups","Manage timesheet"];


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
    $scope.givePermissions =function(){
      $scope.data.push({ groupName:$scope.groupName , users:"0", status:"Active"}); 
      $scope.tableParams.reload();
    }
    $scope.refreshmodal = function(){
      $scope.permissions = [];
      $scope.groupName = '';
      $scope.permissionsGiven = {tags: []};
    }
}]);

