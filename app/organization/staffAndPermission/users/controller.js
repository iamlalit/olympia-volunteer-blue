
OrgVolApp.controller('landingPage', ['$scope', '$filter', 'ngTableParams', function ($scope, $filter, ngTableParams) {
    $scope.data = [{ groupName:["Admin", "Staffing manager", "Recruitment manager"], fullName:"Jan-Klaassen Groot", username: "jan.groot", status:"Active"},
                { groupName:["Admin","Resource manager"],  fullName:"Joep Jacobs", username: "joep.jacobs", status:"Archived", reason: "Declined by You"},
                { groupName:["Admin", "Staffing manager", "Recruitment manager"],  fullName:"Sterre Jansen", username: "s.jansen", status:"Hired"},
                { groupName:["Staffing manager","Volunteer"],  fullName:"Hendrik Brouwer", username: "hen.brouwer"},
                { groupName:["Resource manager"],  fullName:"Hans Dijkstra", username: "janhans.dijkstra", status:"Sent"},
                { groupName:["Volunteer"],  fullName:"Driel Hendriks", username: "driel.hendriks", status:"Archived", reason: "Declined by You"}];
    
    $scope.permissionsGiven = {tags: {}};
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

    $scope.deleteUser = function(user, data, table){
      var idx=data.indexOf(user);
        if (idx != -1) {
            data.splice(idx, 1);  
        }
        table.reload();
    }
    tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    function GetClock(data){
        var d=new Date(data);
        var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear(),nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

        if(nhour==0){ap=" AM";nhour=12;}
        else if(nhour<12){ap=" AM";}
        else if(nhour==12){ap=" PM";}
        else if(nhour>12){ap=" PM";nhour-=12;}

        if(nyear<1000) nyear+=1900;
        if(nmin<=9) nmin="0"+nmin;
        if(nsec<=9) nsec="0"+nsec;

        return(""+nmonth+","+ndate+","+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"");
    }

    //manage joining requests
    $scope.joiningReq = [{ fullName:"Marleen bosch", username: "marleen.bosch", status:"Active", date: GetClock("2014-09-22T19:49:00")},
                { fullName:"Geertruda Brouwer", username: "g.rouwer", status:"Archived", reason: "Declined by You", date: GetClock("2013-07-22T12:49:00")},
                { fullName:"Hendrik Jansen", username: "hendrik.jansen", status:"Hired", date: GetClock("2012-08-21T11:12:00")},
                { fullName:"Driel Jacobs", username: "driel.jacobs", date: GetClock("2012-08-21T11:12:00")},
                { fullName:"Sterre Jansen", username: "sterre.jansen", status:"Sent", date: GetClock("2012-05-24T11:12:00")}];
         
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
    $scope.globalUser = [];
    $scope.groups = [];
    $scope.refreshModal = function(user){
        $scope.permissionsGiven = {tags: {}};
        $scope.globalUser = user;
    }
    
    $scope.addUser = function(data){
        for (group in data) {
            $scope.groups.push(group);
        }
        $scope.data.push({ groupName:$scope.groups, 
                         fullName:$scope.globalUser.fullName, 
                         username: $scope.globalUser.username})
        $scope.tableParams.reload();
        $scope.groups = [];
        $scope.deleteUser($scope.globalUser, $scope.joiningReq, $scope.tableParams1)
    }



}]);
