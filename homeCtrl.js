angular.module('devMtIn')		// create new controller on angular.moudle,
.controller('homeCtrl', function($scope) {  // give controller name and pass in a cb function w/ $scope param
	$scope.myProfile = {
		
		friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
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