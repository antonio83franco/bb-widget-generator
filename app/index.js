'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var toDashCase = function(input) { 
	return input.replace(/\s+/g, '-').toLowerCase();
} 
var yoWidget = yeoman.generators.Base.extend({

	promptUser: function() {
		var done = this.async();
 
		// have Yeoman greet the user
		console.log(this.yeoman);

		var prompts = [{
			name: 'wdgName',
			message: 'Type your widget\'s name',
			default: 'my Widget'
		}];
 
		this.prompt(prompts, function (props) {
			this.wdgName = props.wdgName;
			done();
		}.bind(this));
	},
	scaffoldFolders: function(){
	    this.mkdir("css");
	    this.mkdir("data");
	    this.mkdir("js");
	    this.mkdir("target");
	    this.mkdir("templates");
	},
	copyAndRenderFiles: function(){
	    var context = { 
	        wdg_name: this.wdgName,
	        wdg_name_dash : toDashCase(this.wdgName),
	        wdg_name_camel : this._.classify(this.wdgName),
	        wdg_artifact_id : "${project.artifactId}"
	    };

	    this.template("_main.css", "css/"+context.wdg_name_dash+".css", context);
	    this.template("_main.js", "js/"+context.wdg_name_dash+".js", context);
	 	this.template("_pom.xml", "pom.xml", context);
	 	this.template("_config.xml", "config.xml", context); 
	    this.template("_wdg-body.html", "index.html", context);
	},
	// runNpm: function(){
	//     var done = this.async();
	//     this.npmInstall("", function(){
	//         console.log("\nEverything Setup !!!\n");
	//         done();
	//     });
	// }
	end: function(){
		console.log("\nEverything is Set-up, enjoy !!!\n");
	}
});
 
module.exports = yoWidget;