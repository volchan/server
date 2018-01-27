const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RecipientSchema = require("./Recipient")

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  yes: {type: Number, default: 0},
  no: {type: Number, default: 0}
});

mongoose.model("surveys", surveySchema);
