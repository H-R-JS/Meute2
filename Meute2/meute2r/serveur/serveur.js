let express = require("express");
let mysql = require("mysql2");
let app = express();
let cors = require("cors");

const PORT = 7000;

const db = mysql.createConnection({
  user: "rat31_",
  host: "127.0.0.1:3306",
  password: "Louna31470",
  database: "m2r_database",
});

app.use(cors());

app.use(express.json());

app.post("/api/m2r", (req, res) => {
  const email = req.body.email;
  console.log(email);

  db.query(
    "INSERT INTO email_table (email) VALUES (?)",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`On est sur le port ${PORT}`);
});
