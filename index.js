const express = require("express");
require("./services/passport");

const app = express();
const PORT = process.env.PORT || 3000;

require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
