const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, required: true }
});

const Book = mongoose.model("Article", articleSchema);

module.exports = articleSchema;
