import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Book from "./pages/book";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  async function deleteBook(id) {
    const check = confirm("You sure about that?");
    if (check) {
      const API = `http://localhost:8080/books/${id}`;
      await axios.delete(API);
      getBooks();
    } else {
      alert("Phew, that was a close one!");
    }
  }

  return (
    <BrowserRouter>
      <header>
        <h1>Fantastic Four's Book Club</h1>
        <p>The ultimate book Database</p>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Home books={books} setBooks={setBooks} deleteBook={deleteBook} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>

      <footer>
        <p>Fantastic Four's Book Club &copy;</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
