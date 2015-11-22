angular.module('babyBuddy', ['ngRoute'])
	.config(['$routeProvider', BBConfig])
	.controller('BBController', ['$http', '$location', BBController]);

function BBConfig($routeProvider) {
    $routeProvider.
		when('/', {
			templateUrl: 'landing.html'
		}).
		when('/months', {
			templateUrl: 'page1.html',
			controller: 'BBController'
		}).
		otherwise({
			redirectTo: '/'
		});
};
function BBController($http, $location) {
    var vm = this;
    $http.get('pregnancy.json').success(function(data) {
    	vm.months = data.months;
    });
    vm.selectTab = function(id) {
    	vm.months[id].selected = true;
    	$location.path("/months");
    };
};
