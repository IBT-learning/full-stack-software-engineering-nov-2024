// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET;

// const tokenValidation = (req, res, next) => {
//   try {
//     let token = req.headers.authorization;
//     if (!token) {
//       return res.status(401).json({ error: "Authorization missing" });
//     }
    
//     if (token.includes("Bearer")) {
//       token = token.split(" ")[1];
//     }
    
//     const payload = jwt.verify(token, JWT_SECRET);
//     req.user = payload; // Attach payload to req.user (user data)

//     next();
//   } catch (err) {
//     console.error(err);
//     return res.status(401).json({ error: "Invalid or expired token" });
//   }
// };

// export default tokenValidation;

