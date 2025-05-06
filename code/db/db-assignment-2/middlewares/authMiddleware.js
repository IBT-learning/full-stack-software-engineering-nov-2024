import jwt from "jsonwebtoken";
const JWT_SECRET_KEY = "IamtheSecretKey";
const authMiddleware = async (req, res, next) => {

    // Check if token exists
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer")) {
      return res.status(400).json({
        message: "No Token Exists or Invalid format",
      });
    }
    // Get the token
    const token = authorization.split(" ")[1]


  try {
    const payload = jwt.verify(token, JWT_SECRET_KEY)
    console.log(payload)
    req.user = payload
    console.log("Request User Object: ", req.user )
    next()
  } catch (error) {
    console.log(error);
      return res.status(400).json({
        message: "Access Denied. Invalid Token",
      });
  }
};

export default authMiddleware;
