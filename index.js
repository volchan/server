const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/user");
require("./services/passport");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cookieSession({
    maxAge: 2592000000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

mongoose.connect(keys.mongoURI);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
