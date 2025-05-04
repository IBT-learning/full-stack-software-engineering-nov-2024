import express from 'express';
import dbConnect from './db/db.js';
import router from './controller/users.js';
import recipeRouter from './controller/recipes.js';
import authenticateToken from './middlewares/tokenValidation.js';
import cookieParser from "cookie-parser";



const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/auth", router);
app.use("/recipes", authenticateToken, recipeRouter);





app.listen(4000, () => {
    dbConnect();
    console.log(`Server listening to port: ${PORT}`);
});
