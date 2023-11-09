const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  imgUrl: String,
  author: String,
  year: Number,
  rating: Number,
  summary: String,
  status: Boolean, //need to find out if we can change this from string to boolean
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
