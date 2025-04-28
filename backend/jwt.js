const jwt = require("jsonwebtoken");
require("dotenv").config();


const VerifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ errMsg: "Invalid JWT Token" });
  }

  const jwtToken = authHeader.split(" ")[1];
  jwt.verify(jwtToken, process.env.USER_SECRET_TOKEN, (err, payload) => {
    if (err) {
      return res.status(401).send("Invalid JWT Token");
    }
    req.username = payload.username;
    next();
  });
};

module.exports =  VerifyUser;  