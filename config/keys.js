if (prosses.env.NODE_ENV === "productrion") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
