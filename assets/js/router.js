/* var router = new Backbone.Router({
	routes: {
		"":	"root",
		"index.html":	"root",
		"about.html": function(){
			console.log("about");
		}
	}
});

router.on("route:root", function(fragment) {
	console.log("on:root");
});
*/

/**
 * Custom Router can use method as the route event callback.
 */
var Workspace = Backbone.Router.extend({
	routes: {
		"":	"root",
		"about": "about"
	},
	root: function(fragment) {
		alert("workspace:root");
	},
	about: function() {
		$("#about").show();
	}
});

/* Multiple router instances are permitted, but the same route, the later one will override previous one */
var router2 = new Workspace();

$(function(){
	console.log(Backbone.history.start({root:'/demo/', pushState:false}));
});