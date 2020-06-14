const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (token) {
      console.log("token", token);
      const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
      console.log(decodedToken);
      const userId = decodedToken.userId;
      if (req.body.userId && req.body.userId !== userId) {
        throw "Invalid user ID";
      } else {
        req.user = userId;

        next();
      }
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
