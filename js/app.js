/**
 * AngularJS Application Controller
 * Manages section visibility and navigation between Skills, Education, and Work Experience
 */
(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.controller('myCtrl', function($scope) {
		// Initialize section visibility states
		$scope.educationShow = false;
		$scope.workShow = false;
		$scope.skillShow = true; // Default to skills section

		/**
		 * Navigation Functions
		 * Control which section is displayed
		 */
		$scope.work = function() {
			$scope.educationShow = false;
			$scope.workShow = true;
			$scope.skillShow = false;
		};

		$scope.edu = function() {
			$scope.educationShow = true;
			$scope.workShow = false;
			$scope.skillShow = false;
		};

		$scope.skill = function() {
			$scope.educationShow = false;
			$scope.workShow = false;
			$scope.skillShow = true;
		};

		/**
		 * Watch for section changes to trigger typewriter animation
		 * Animates the name header whenever user navigates between sections
		 */
		$scope.$watchGroup(['skillShow', 'educationShow', 'workShow'], function() {
			if (typeof Typewriter !== 'undefined') {
				Typewriter.animate('KINGSLEY BESIDONNE');
			}
		});

		/**
		 * Initialize typewriter animation on page load
		 */
		setTimeout(function() {
			if ($scope.skillShow && typeof Typewriter !== 'undefined') {
				Typewriter.animate('KINGSLEY BESIDONNE');
			}
		}, 300);
	});
})();

