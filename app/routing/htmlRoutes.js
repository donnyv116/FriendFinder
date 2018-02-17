// Dependencies
// include path package to get the correct file path
var path = require("path");


// Routing

module.exports = function(app) {

	// html GET requests
	// handles when users visit a page

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// If no match, default routes to home
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};