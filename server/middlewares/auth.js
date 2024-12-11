const jwt = require("jsonwebtoken");
const isAuth = (req, res, next) => {
  const { Access_Token } = req.cookies;
  jwt.verify(Access_Token, "zxcvbnm", function (err, decoded) {
    if (err) {
      return res.status(401).json({ msg: "Invalid token" });
    }
    const user = decoded.userdata;

    req.user = user;
    next();
  });
};

module.exports = isAuth;
