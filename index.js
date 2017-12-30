const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/user");

const app = express();
const PORT = process.env.PORT || 3000;
require("./routes/authRoutes")(app);

mongoose.connect(keys.mongoURI);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
