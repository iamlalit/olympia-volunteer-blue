
OrgVolApp.controller('landingPage', ['$scope', '$filter', 'ngTableParams', function ($scope, $filter, ngTableParams) {
    
    $scope.data = [{ groupName:['Red Cross UI Developers', "Red Cross Designers"], fullName:"Jan-Klaassen Groot", username: "jan.groot", status:"Active"},
                { groupName:["Red Cross .net Developers"],  fullName:"Joep Jacobs", username: "joep.jacobs", status:"Archived", reason: "Declined by You"},
                { groupName:["Red Cross Administration", "Red Cross Business Analyst", "Red Cross Managers"],  fullName:"Sterre Jansen", username: "s.jansen", status:"Hired"},
                { groupName:["Red Cross Managers"],  fullName:"Hendrik Brouwer", username: "hen.brouwer"},
                { groupName:["Red Cross Business Analyst", "Red Cross Managers"],  fullName:"Hans Dijkstra", username: "janhans.dijkstra", status:"Sent"},
                { groupName:["Red Cross Designers"],  fullName:"Driel Hendriks", username: "driel.hendriks", status:"Archived", reason: "Declined by You"}];


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
        if (idx != -1) {
            $scope.datadata.splice(idx, 1);  
        }
        $scope.tableParams.reload();
    }


    //manage joining requests
    $scope.joiningReq = [{ fullName:"Marleen bosch", username: "marleen.bosch", status:"Active", date: new Date(2014,9,30).getDate() + '-' + new Date(2014,9,30).getMonth() + '-' + new Date(2014,9,30).getFullYear()},
                { fullName:"Geertruda Brouwer", username: "g.rouwer", status:"Archived", reason: "Declined by You", date: new Date(2014,4,12).getDate() + '-' + new Date(2014,4,12).getMonth() + '-' + new Date(2014,4,12).getFullYear()},
                { fullName:"Hendrik Jansen", username: "hendrik.jansen", status:"Hired", date: new Date(2014,10,16).getDate() + '-' + new Date(2014,10,16).getMonth() + '-' + new Date(2014,10,16).getFullYear()},
                { fullName:"Driel Jacobs", username: "driel.jacobs", date:new Date(2014,9,7).getDate() + '-' +  new Date(2014,9,7).getMonth() + '-' + new Date(2014,9,7).getFullYear()},
                { fullName:"Sterre Jansen", username: "sterre.jansen", status:"Sent", date: new Date(2014,9,1).getDate() + '-' + new Date(2014,9,1).getMonth() + '-' + new Date(2014,9,1).getFullYear()},
                { fullName:"Els Dekker", username: "els.dekker", status:"Archived", reason: "Declined by You", date:  new Date(2014,9,13).getDate() + '-' + new Date(2014,9,13).getMonth() + '-' +  new Date(2014,9,13).getFullYear()}];


    $scope.tableParams1 = new ngTableParams({
        page: 1,            // show first page
        count: 20,          // count per page
        sorting: {
            groupName: 'asc'     // initial sorting
        }
    }, {
        total: $scope.joiningReq.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')($scope.joiningReq, params.orderBy()) :
                                $scope.joiningReq;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });


}]);
