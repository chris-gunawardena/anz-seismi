'use strict';

/**
 * @ngdoc function
 * @name anzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anzApp
 */
angular.module('anzApp').controller('MainCtrl', function ($scope,$http) {

	$scope.filter = {
		'magnitude': { 'from':0, 'to': 100 },
		'depth': { 'from':0, 'to': 100 }
	};

    //load data
	$http.get('/test_data.json').success(function(data) {
		$scope.filtered_data = $scope.data = data.earthquakes;
		//extract locations
		var locations = {};
		for( var i=0; i<$scope.data.length;i++)
		{	locations[ $scope.data[i].region ] = 1;
		}
		$scope.locations = Object.keys(locations).sort();
	});


	//UPDATE on filter change change
	$scope.$watch('filter', function(new_value, old_value) {
		if( !angular.equals(new_value, old_value) && !angular.isUndefined(old_value) && !angular.isUndefined(new_value) )
		{	$scope.filtered_data = $scope.data.filter( function(el){
				if  ( 	$scope.filter.magnitude.from/10 <= parseFloat(el.magnitude) && parseFloat(el.magnitude) <= $scope.filter.magnitude.to/10
						&& $scope.filter.depth.from*10 <= parseFloat(el.depth) && parseFloat(el.depth) <= $scope.filter.depth.to*10
					)
				{
					return true;
				}
				else{
					return false;
				}
			});
		}
	},true);


});
