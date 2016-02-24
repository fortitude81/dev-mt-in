angular.module('devMtIn')		// create new controller on angular.moudle,
.controller('homeCtrl', function($scope, profileService) {  // give controller name and pass in a cb function w/ $scope param
											//inject profileService

	$scope.editing = false;  //disables profile editing unless the editing button is clicked


	$scope.myProfile = profileService.checkForProfile();  // due to local storage, no need to be equal to friends list



	$scope.saveProfile = function( profile ) {  // comunicate between view and services
		profileService.saveProfile(profile);
		$scope.editing = false;
	}

	$scope.deleteProfile = function() {
		profileService.deleteProfile();
		$scope.myProfile = profileService.checkForProfile();
	}

	$scope.sortOptions = [{
	    display: 'Ascending'
	  , value: false
	  },
	  {
	    display: 'Descending'
	  , value: true
	  }
	];
	
	


});