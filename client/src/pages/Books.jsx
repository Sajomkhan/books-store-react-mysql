import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([])
  const endRef = useRef()

  useEffect(()=>{
    endRef.current?.scrollIntoView(
      {behavior: "smooth"}
    )
  })

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5010/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>Ajom Books Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <div ref={endRef}></div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
};

export default Books;
