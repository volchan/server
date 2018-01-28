const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

module.exports = app => {
  app.get("/api/surveys", requireLogin, (req, res) => {});

  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    
  });
};
