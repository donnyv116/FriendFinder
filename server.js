// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Configuration
var app = express();

// Sets initial port
var PORT = process.env.PORT || 8080;

// Uses BodyParser to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Router: the code below give server direction on how to respond when users visit or request data from various URLs
require(path.join(__dirname, '/app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes.js'))(app);

// Listener: starts server
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
})