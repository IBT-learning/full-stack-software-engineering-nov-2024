import express from "express";
import Recipe from "../models/recipe.js";
import { mongoose } from "../db.js";
import User from "../models/user.js";
import recipe from "../models/recipe.js";
import tokenValidation from "../middlewares/tokenValidation.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const { author, title, instructions, ingredients, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const userId = user._id;

      const newRecipe = new Recipe({
        author,
        title,
        instructions,
        ingredients,
        createdBy: userId,
      });

      await newRecipe.save();
      res.json(newRecipe);
      console.log("yes");
    } else {
      res.status(401).send("User Not Found! Please input a valid email");
    }
  } catch (err) {
    res.send(err);
  }
});

router.put("/update", async (req, res) => {
  const { createdBy } = req.body;
  if (mongoose.Types.ObjectId.isValid(createdBy)) {
    try {
      const findUser = await Recipe.findOne({ createdBy });
      if (!findUser) {
        res.status(404).send("user does not exist");
      } else {
        res.status(200).send(findUser);
        // console.log("done");
      }
    } catch (err) {
      console.log(err);
      res.status(400).send("invalid request");
    }
  } else {
    res.status(401).send("invalid input");
  }
});

router.delete("/delete", async (req, res) => {
  const { createdBy } = req.body;
  try {
    const deleteUser = await Recipe.deleteOne({ createdBy });
    if (!deleteUser) {
      res.status(404).send("user does not exist");
    } else {
      res.status(200).send(deleteUser);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("Invalid Request");
  }
});

export default router;
