const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tanvi123#",
  database: "Hackathon",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

router.post("/signup", (req, res, next) => {
  connection.query(
    "call signup(?,?)",
    [req.body.email, req.body.password],
    (err, rows, fields) => {
      if (!err) {
        console.log("inserted");
        res.status(201).json(rows);
      } else {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
    }
  );
});

router.post("/login", (req, res, next) => {
  connection.query(
    "call login(?,?,@id2);",
    [req.body.email, req.body.password],
    (err, rows, fields) => {
      if (!err) {
        var userId1 = rows[0][0].abc;
        if (userId1 == -1) {
          res.send("Incorrect password");
        } else if (userId1 == -2) {
          res.send("Invalid user");
        } else {
          const token = jwt.sign({ userId: userId1 }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          });

          res.status(200).json({
            userId: userId1,
            token: "Bearer " + token,
          });
          next();
        }
      } else {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
    }
  );
});

module.exports = router;
