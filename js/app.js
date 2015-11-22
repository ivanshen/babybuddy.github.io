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
    vm.tabs = ["FIRST MONTH","SECOND MONTH","THIRD MONTH","FOURTH MONTH","FIFTH MONTH","SIXTH MONTH","SEVENTH MONTH ","EIGHT MONTH","NINTH MONTH"];
    $http.get('pregnancy.json').success(function(data) {
    	vm.months = data.months;
    });
    vm.selectTab = function(id) {
    	vm.selectedTab = id;
    	$location.path("/months");
    };
    vm.switchTab = function(id) {
    	vm.selectedTab = id;
    };
    vm.goHome = function() {
    	$location.path("/");
    }
    vm.selectedTab = 0;
};
