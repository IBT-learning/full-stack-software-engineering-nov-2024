import express from 'express';
import connectDB  from './db/db.js';
import router from './controller/recipes.js';


const PORT = 4000;
const app = express();
app.use(express.json());

app.use("/recipes", router);



connectDB();
app.listen(4000, () => {
    console.log(`Server listening to port: ${PORT}`);
});