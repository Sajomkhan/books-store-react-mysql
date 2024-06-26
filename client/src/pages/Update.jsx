import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const [error, setError] = useState(null);

  // const [bookCover, setBookCover] = useState({
  //   file: null,
  //   url: "",
  // });

  // const handleChange = (e) => {
  //   setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

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

  console.log(book);

  return (
    <div className="update">
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        placeholder="Description"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cover"
        placeholder="Cover"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default Update;
