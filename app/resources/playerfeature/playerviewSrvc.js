angular.module('rocketleague.service', [])

	.factory('playerviewSrvc', ['$http', function($http){

		var players = [];
		var url = 'http://www.rocketleaguereplays.com/api/players/';
		
		var searchByName= function(username){
			$http({
		   		method:'GET',
		    	url: url
		 	}).then(function successCallback(response){
		    	camera = response.data;
		  		console.log(camera);
			});
			return camera;
		}
		
	}]);