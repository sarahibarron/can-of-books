const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  imgUrl: String,
  author: String,
  year: Number,
  rating: Number,
  summary: String,
  status: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
