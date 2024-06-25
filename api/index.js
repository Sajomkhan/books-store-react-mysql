import express from "express";
import mysql from "mysql";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sak01911",
  database: "test",
});

app.get("/", (req, res) => {
  res.send("Hello This Is Home Page");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books",(req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if(err) return res.json(err);
    return res.json ("Book has been created successfully")
  })
})

app.listen(5010, () => {
  console.log("App is running at http://localhost:5010");
});
