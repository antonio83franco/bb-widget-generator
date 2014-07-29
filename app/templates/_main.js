/*global gadgets */
define([
	"jquery",
	"angular",
	"launchpad/lib/common"
], function($, angular, common) {

	"use strict";

	var module = angular.module("launchpad-<%= wdg_name_dash %>", ["common"]);

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Main controller
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	module.controller("<%= wdg_name_camel %>Controller", [ '$scope', '$element', 'widget'
		function($scope, $element, widget) {
			var initialize = function() {
			};

			initialize();
	}]);


	return function(widget) {
		module.value("widget", widget);
		angular.bootstrap(widget.body, ["launchpad-<%= wdg_name_dash %>"]);
	};
});