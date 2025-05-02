import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./db.js";
import userRouter from "./controllers/users.js";
import postRouter from "./controllers/posts.js";
import tokenValidation from "./middlewares/tokenValidation.js";

const app = express();
dotenv.config();  // Load environment variables

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", userRouter); 
app.use("/posts", tokenValidation, postRouter);

// Start the server
app.listen(PORT, () => {
  dbConnect();
  console.log(`[server]: listening on port ${PORT}`);
});
