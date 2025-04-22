import jwt from "jsonwebtoken";

const JWT_KEY = "Secret_key";

const tokenValidation = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // console.log(req.headers);
    if (!token) {
      res.status(401).send("authorization missing");
    } else {
      const payload = jwt.verify(token, JWT_KEY);
      // req.user = payload.userId;
      if (!payload) {
        res.status(401).send("user not authorized");
      } else {
        next();
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const tokenValidation2 = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    // console.log(req.headers);
    if (!token) {
      res.status(401).send("authorization missing");
    } else {
      if (token.includes("Bearer")) {
        token = token.split(" ")[1];
      }
      const payload = jwt.verify(token, JWT_KEY);
      // req.user = payload.userId;
      if (!payload) {
        res.status(401).send("user not authorized");
      } else {
        next();
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export default tokenValidation;
