angular.module('rocketleague.controller',[])
	.controller('playerviewCtrl', function($scope, playerviewSrvc){
		$scope.users=[];

		var search= function(username){
			$scope.users= playerviewSrvc.searchByName(username);
		};
	});