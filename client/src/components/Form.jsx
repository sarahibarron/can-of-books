import { useState } from "react";
import axios from "axios";

export default function Form({ books, setBooks, book, setBook }) {
  const [formData, setFormData] = useState(
    book ?? {
      title: "",
      imgUrl: "",
      author: "",
      year: "",
      rating: "",
      summary: "",
      status: false, //changed from ""
    }
  );

  function handleChange(event) {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    async function addBook(event) {
      event.preventDefault();
      const API = "http://localhost:8080/books";
      const res = await axios.post(API, formData);
      setBooks([...books, res.data]);
    }

    async function updateBook(event) {
      event.preventDefault();
      const API = `http://localhost:8080/books/${book._id}`;
      await axios.put(API, formData);
      setBook(formData);
    }

    return (
      <form onSubmit={book?.title ? updateBook : addBook}>
        <input
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={formData.title}
        />
        <input
          name="imgUrl"
          placeholder="imgUrl"
          onChange={handleChange}
          value={formData.imgUrl}
        />
        <input
          name="author"
          placeholder="author"
          onChange={handleChange}
          value={formData.author}
        />
        <input
          name="year"
          placeholder="year"
          onChange={handleChange}
          value={formData.year}
        />
        <input
          name="rating"
          placeholder="rating"
          onChange={handleChange}
          value={formData.rating}
        />
        <input
          name="summary"
          placeholder="summary"
          onChange={handleChange}
          value={formData.summary}
        />
        <input
          name="status"
          type="checkbox"
          onChange={handleChange}
          value={formData.status}
        />
        <button>{book?.title ? "Update Book" : "Add Book"}</button>
      </form>
    );
  }
}
