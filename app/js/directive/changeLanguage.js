
OrgVolApp.directive('changeLanguage', function($rootScope) {
    return {
     restrict: 'A',
     link: function (scope, element, attrs, ctrl) {
     	element.on('click', function(){
            alert('here');
            console.log($(this).closest('a'))
     	});
     }
    };
});
