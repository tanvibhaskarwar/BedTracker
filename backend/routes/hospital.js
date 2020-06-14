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
  //console.log('Connected to the MySQL server.');
});

//insert hospital
router.post("/", (req, res, next) => {
  console.log(req.body);
  connection.query(
    "insert into hospital(name,address,icu_avail,non_icu_avail,city) values(?,?,?,?,?)",
    [
      req.body.name,
      req.body.address,
      req.body.icu_avail,
      req.body.non_icu_avail,
      req.body.city,
    ],
    (err, rows, fields) => {
      if (!err) {
        console.log("inserted");
      } else console.log(err);
    }
  );
  connection.query(
    "update hospital set capacity=icu_avail+non_icu_avail,vacant=icu_avail+non_icu_avail",
    (err, rows, fields) => {
      if (!err) {
        console.log("inserted and updated");
        res.status(201).json({
          message: "Thing created successfully!",
        });
      } else console.log(err);
    }
  );
});

//book bed
router.post("/bookHospital", (req, res, next) => {
  connection.query(
    "call BookHosp(?,?,?)",
    [req.body.hid, req.user, req.body.tid],
    (err, rows, fields) => {
      if (!err) {
        console.log("bed booked");
        res.status(200).json(rows);
      } else console.log(err);
    }
  );
});
/*
router.put('/icu/:id',(req,res,next)=>{
  connection.query('update hospital set icu_occ=icu_occ+1,vacant=vacant-1 where hid=?',[req.params.id],(err,rows,fields)=>{
    if(!err){
      console.log('yay');
      res.status(201).json({
        message: 'icu booked'
      });
    }
    else
      console.log(err);
  })
});

router.put('/nonicu/:id',(req,res,next)=>{
  connection.query('update hospital set non_icu_occ=non_icu_occ+1,vacant=vacant-1 where hid=?',[req.params.id],(err,rows,fields)=>{
    if(!err){
      console.log('yay');
      res.status(201).json({
        message: 'normal bed booked'
      });
    }
    else
      console.log(err);
  })
});*/
router.use("/city/:city", (req, res, next) => {
  connection.query(
    "select * from hospital where city=?",
    [req.params.city],
    (err, rows, fields) => {
      if (!err) {
        //console.log('connecteddd');
        res.status(200).json(rows);
      } else console.log(err);
    }
  );
});

//get particular hospital facility
router.use("/getParticularHosp/:id", (req, res, next) => {
  connection.query(
    "select * from hospital where hid=?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        //console.log('connecteddd');
        res.status(200).json(rows);
      } else console.log(err);
    }
  );
});

//get all hospitals
router.use("/getHospitals", (req, res) => {
  connection.query("select * from hospital", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;
