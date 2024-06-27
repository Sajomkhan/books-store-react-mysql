import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [book, setBook] = useState(location.state);
  const [error, setError] = useState(null);
  
  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5010/books/update/` + bookId, book);
      navigate("/books");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div className="update">
      <input
        type="text"
        name="title"
        value={book.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        value={book.desc}
        placeholder="Description"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={book.price}
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cover"
        value={book.cover}
        placeholder="Cover"
        onChange={handleChange}
      />
      <p style={{color: "red"}}>{error}</p>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default Update;
