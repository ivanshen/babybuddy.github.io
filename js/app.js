angular.module('babyBuddy', ['ngRoute', 'ui.bootstrap'])
	.config(['$routeProvider', BBConfig])
	.controller('BBController', ['$http', '$location', BBController]);

function BBConfig($routeProvider) {
    $routeProvider.
		when('/', {
			templateUrl: 'landing.html'
		}).
		when('/months', {
			templateUrl: 'page2.html',
			controller: 'BBController'
		}).
		otherwise({
			redirectTo: '/'
		});
};
function BBController($http, $location) {
    var vm = this;
    vm.tabs = ["Month 1","Month 2","Month 3","Month 4","Month 5","Month 6","Month 7","Month 8","Month 9"];
    $http.get('pregnancy.json').success(function(data) {
    	vm.months = data.months;
    });
    vm.selectTab = function(id) {
    	vm.months[id].selected = true;
    	$location.path("/months");
    };
    vm.switchTab = function(id) {
    	for (var i = 0; i < vm.months[i].length; i++) {
            vm.months[i].selected = false;
        }
    	vm.months[id].selected = true;
    };
};
