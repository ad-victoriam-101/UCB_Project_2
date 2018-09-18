// Requiring path to so we can use relative routes to our HTML files
var path = require("path");


// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res){
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
  app.get("/game/:id", isAuthenticated, function() {
    // i dont know if we are still using handlebars or desided otherwise.
    // res.sendFile(path.join(__dirname, "../public/" + variable + ".html"));
  });

  app.get("/home", function(req, res){
    // If the user already has an account send them to the members page
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/site/index.html"));
    } else{
      res.sendFile(path.join(__dirname, "../public/site/index.html"));
    }
  });




  app.get("/profile", function(req, res){
  // If the user already has an account send them to the members page
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/site/profile.html"));
    } else{
      res.sendFile(path.join(__dirname, "../public/site/profile.html"));
    }
  });

  app.get("/challenges", function(req, res){
    // If the user already has an account send them to the members page
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/site/challenges.html"));
    } else{
      res.sendFile(path.join(__dirname, "../public/site/challenges.html"));
    }
  });

  app.get("/pong", function(req, res){
    // If the user already has an account send them to the members page
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/game/pong/index.html"));
    } else{
      res.sendFile(path.join(__dirname, "../public/game/pong/index.html"));
    }
  });

  app.get("/maze", function(req, res){
    // If the user already has an account send them to the members page
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/game/maze/index.html"));
    } else{
      res.sendFile(path.join(__dirname, "../public/game/maze/index.html"));
    }
  });

  app.get("/breakout", function(req, res){
    // If the user already has an account send them to the members page
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/game/breakout/index.html"));
    } else{
      res.sendFile(path.join(__dirname, "../public/game/breakout/index.html"));
    }
  });

  app.get("/outrun", function(req, res){
    // If the user already has an account send them to the members page
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/game/outrun/index.html"));
    } else{
      res.sendFile(path.join(__dirname, "../public/game/outrun/index.html"));
    }
  });



};