var db = require("../models");
const path = require("path");


module.exports = (app) => {
//expenses page
  app.get("/table", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/table.html"));
  });
// Home page 
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/index.html"));
  });
// User breakdown page
  app.get("/userbreakdown", (req, res) => {
    res.sendFile(path.join(__dirname, "/../userbreakdown.html"));
  });
  // Render 404 page for any unmatched routes
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/pages/404.html"));
  });
};

