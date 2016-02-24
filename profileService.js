var app = angular.module('devMtIn')
.service('profileService', function() {  //invoke the service method on an angular.module and pass that method the name of our service and a callback function
											// note * services dont take in the $scope parameter


	this.saveProfile = function(profile) {
  		localStorage.setItem('profile', JSON.stringify(profile));
	}

	//check local storage and return the profile if it exist, otherwise return a default friends list
	this.checkForProfile = function() {
	  if (localStorage.getItem('profile')) {
	    return JSON.parse(localStorage.getItem('profile'));
	  }
	  return {
	    friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
	  }
	}

});