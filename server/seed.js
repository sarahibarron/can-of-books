const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  Book.create({
    name: "String",
    imgUrl: "String",
    author: "String",
    year: 0,
    rating: 0,
    summary: "String",
  });
  mongoose.disconnect();
}

seed();
