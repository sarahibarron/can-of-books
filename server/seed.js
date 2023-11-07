const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create([
    {
      title: "Moby Dick",
      imgUrl: "https://productimages.worldofbooks.com/184022830X.jpg",
      author: "Herman Melville",
      year: 1851,
      rating: 3.54,
      summary:
        "A book mostly about a guy who is really angry about whales and which contains an incredible number of whale facts",
      status: "Read",
    },
    {
      title: "Javascript for Kids for Dummies",
      imgUrl: "https://m.media-amazon.com/images/I/51tcu2bj86L.jpg",
      author: "Chris Minnick and Eva Holland",
      year: 2015,
      rating: 3.13,
      summary:
        "Javascript for Kids for Dummies is an introduction to the basics of Javascript coding. Designed for kids of all ages, with no coding experience, we strive to introduce this technical topic in a fun, engaging, and interactive way",
      status: "Unread",
    },
    {
      title: "Rage Becomes Her",
      imgUrl:
        "https://m.media-amazon.com/images/I/71H7yqqeyYL._AC_UF1000,1000_QL80_.jpg",
      author: "Soraya Chemaly",
      year: 2018,
      rating: 4.35,
      summary:
        "A transformative book urging twenty-first century-women to embrace their anger and harness it as a tool for lasting personal and societal change.",
      status: "Read",
    },
    {
      title: "The Family",
      imgUrl: "https://productimages.worldofbooks.com/009953326X.jpg",
      author: "Mario Puzo",
      year: 2001,
      rating: 3.83,
      summary:
        "Pope Alexander VI (formerly Rodrigo Borgia) believes God will ultimately forgive his many sins simply because, as pope, he is infallible and divine. The Family focuses on this cunning, ambitious despot and his children—the ruthless Cesare and the beautiful but wicked Lucrezia.",
      status: "Read",
    },
  ]);
  console.log("This is working really well!");
  mongoose.disconnect();
}

seed();
