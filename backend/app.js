const express = require("express");

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const app = express();
const cors = require("cors");
const auth = require("./middleware/auth");

const hospitalRoutes = require("./routes/hospital");
const quarRoutes = require("./routes/quarantine");
const userRoutes = require("./routes/users");
const testRoutes = require("./routes/book_test");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: true }));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

app.use("/api/hospital", auth, hospitalRoutes);
app.use("/api/quarantine", auth, quarRoutes);
app.use("/api/user", userRoutes);
app.use("/api/BookTest", auth, testRoutes);

module.exports = app;
