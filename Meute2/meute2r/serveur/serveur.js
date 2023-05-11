let express = require("express");
let mysql = require("mysql2");
let app = express();
let cors = require("cors");

const PORT = process.env.PORT || 7000;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "m2_email_r",
});

app.use(cors());

app.use(express.json());

app.get("/", function (req, res) {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.send("<h1>Hello from Node</h1>");
});

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

/**user: "root",
  host: "localhost",
  password: "root",
  database: "m2_email_r", */
