// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });

  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/questions.html"));
  });

  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  app.get("/settings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/settings.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
};
