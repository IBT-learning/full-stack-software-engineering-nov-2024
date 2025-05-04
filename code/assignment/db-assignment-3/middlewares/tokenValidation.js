import jwt from "jsonwebtoken";

const JWT_KEY = "this is a secret";

const authenticateToken = (req, res, next) => {
    try {
      // First, try reading token from the Authorization header
      let token = req.headers.authorization;
  
      if (token && token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
      } else {
        // If no token in header, try reading from cookies
        token = req.cookies.token;
      }  
      if (!token) {
        return res.status(401).json({ message: "Authorization token missing" });
      }
      const payload = jwt.verify(token, JWT_KEY);
      if (!payload) {
        return res.status(401).json({ message: "User not authorized" });
      }
      req.user = payload; // ✅ Attach payload to request
      next();
    } catch (err) {
      console.error("JWT error:", err);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };

export default authenticateToken;