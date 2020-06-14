const express = require("express");

const router = express.Router();

let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tanvi123#",
  database: "Hackathon",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connection has been established with the mysql server");
});

//Referals start
//entering referals into referal table
router.post("/addReferal", (req, res) => {
  connection.query(
    "insert into Referals set ?",
    [req.body],
    (err, rows, fields) => {
      if (err) throw err;
      res.send("Referal added successfully");
    }
  );
});

//Booking a test
router.post("/", (req, res) => {
  connection.query(
    "set @ret:= 0; call BookTest(?,?,?,@ret); select @ret as abc;",
    [req.body.tcid, req.user, req.body.rid],
    (err, rows, fields) => {
      if (err) throw err;
      let data = rows[2][0];
      const { abc } = data;

      if (abc == 0) res.send("Booking unsuccessful");
      else if (abc == 1) res.send("Booking successful");
    }
  );
});

router.post("/add/centre", (req, res) => {
  connection.query(
    "insert into TestingCentre set ?",
    [req.body],
    (err, rows, fields) => {
      if (err) throw err;
      res.send("Successfully inserted row");
    }
  );
});

//get centres according to city
router.get("/city/:city", (req, res) => {
  connection.query(
    "select * from TestingCentre where city = ?",
    [req.params.city],
    (err, rows, fields) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

//finding centres according to city and kits available
router.get("/available/:city", (req, res) => {
  connection.query(
    "select * from TestingCentre where kitsAvailable > 0 and city = ?",
    [req.params.city],
    (err, rows, fields) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

//getting all centres
router.use("/allCentres", (req, res) => {
  connection.query("select * from TestingCentre", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

//Testing Centre End

module.exports = router;
