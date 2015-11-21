angular.module('babyBuddy', [])
	.controller('BBController', BBController);

function BBController() {
    var vm = this;

    vm.stages = [1,2,3,4,5,6,7,8,9];

};
