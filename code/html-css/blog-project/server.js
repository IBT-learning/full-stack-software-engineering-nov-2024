import express from "express";
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.static("public"));


const PORT= 4000;

app.get("/data", (req, res) => {
  const mainData = fs.readFileSync("./public/data.json");
  const info = JSON.parse(mainData);
  res.send(info);
})

app.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  const mainData = fs.readFileSync("./public/data.json");
  const info = JSON.parse(mainData)

  if (info[id]) {
    res.send(info[id]);
  } else {
    console.log("not found")
  }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));