const express = require("express");

const router = express.Router();

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

//insert centre
router.post("/", (req, res, next) => {
  console.log(req.body);
  connection.query(
    "insert into quarantine(name,address,capacity,city) values(?,?,?,?)",
    [req.body.name, req.body.address, req.body.capacity, req.body.city],
    (err, rows, fields) => {
      if (!err) {
        console.log("inserted");
        res.status(201).json({
          message: "Thing created successfully!",
        });
      } else console.log(err);
    }
  );
});

//book facility
router.post("/bookQuar", (req, res, next) => {
  connection.query(
    "call BookQuar(?,?,?)",
    [req.body.qid, req.user, req.body.tid],
    (err, rows, fields) => {
      if (err) throw err;
      res.send(rows);
      console.log("Done!");
    }
  );
});

//get facilities in a city
// router.use("/city/:city", (req, res, next) => {
//   connection.query(
//     "select * from quarantine where city=?",
//     [req.params.city],
//     (err, rows, fields) => {
//       if (!err) {
//         console.log("connecteddd");
//         res.status(200).json(rows);
//       } else console.log(err);
//     }
//   );
// });

//get particular quarantine facility
// router.use("/:id", (req, res, next) => {
//   connection.query(
//     "select * from quarantine where id=?",
//     [req.params.id],
//     (err, rows, fields) => {
//       if (!err) {
//         console.log("connecteddd");
//         res.status(200).json(rows);
//       } else console.log(err);
//     }
//   );
// });

//display all centres
router.get("/", (req, res, next) => {
  connection.query("select * from quarantine", (err, rows, fields) => {
    if (!err) {
      console.log("connecteddd");
      res.status(200).json(rows);
    } else console.log(err);
  });
});

module.exports = router;
