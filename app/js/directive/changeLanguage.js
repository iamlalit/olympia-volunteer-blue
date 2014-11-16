
OrgVolApp.directive('changeLanguage', function($rootScope) {
    return {
     restrict: 'A',
     link: function (scope, element, attrs, ctrl) {
     	element.on('click', function(){
            $("ul.flag li ul li").removeClass('active');
            var source = $(this).children( "a" ).children( "img" ).attr("src");
            $(this).parents("li.pull-right").children("#icons-header-right").children( "img" ).prop("src", source);
            $(this).addClass('active');
     	});
     }
    };
});
