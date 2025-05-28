import express from "express";
import User from "../models/user.js";
import Post from "../models/post.js";
import authenticator from "../custommiddleware/tokenValidation.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await Post.find({}); // Missing await!
    res.status(200).send(result);
    // console.log(result);
  } catch (err) {
    console.log(err); // Not sending any error response
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     // const { author } = req.body;
//     const { id } = req.params;
//     const result = await Post.find({ userToken: id });
//     res.send(result);
//   } catch (err) {
//     res.send(err.message);
//   }
// });

router.post("/publish", async (req, res) => {
    const { title, description, ingredients } = req.body; // Remove author from destructuring

  if (!title) {
    return res.status(400).send({
      message: "title is required",
      status: 400,
      success: false
    })
  }

  if (!description) {
    return res.status(400).send({
      message: "description is required",
      status: 400,
      success: false
    })
  }

  if (ingredients.length < 1) {
    return res.status(400).send({
      message: "ingredients are required",
      status: 400,
      success: false
    })
  }

  try {

    const post = new Post({
      title,
      description,
      ingredients
    });

    await post.save();
    res.status(201).json({
      success: true,
      status: 200,
      message: "Successful created a new Recipe"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const iD = req.params.id;

    const articleResult =await Post.findOne({_id:iD})

    if (!articleResult) return res.status(404).send({
      message: "No article found.",
      success:false,
      status: 404
    });

    res.status(200).send(articleResult);

    } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.deleteOne({ _id: id });
    if (!post) return res.status(404).send("This post does not belong to you");
   return res.send(
      {
        status: 200,
        success: true,
        message: "Post deleted successfully.",
      },
    );

  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});



router.put("/:id", async (req, res) => {
    const { titles, descriptions, ingredientItems } = req.body; // Remove author from destructuring

  try {
    // const token = req.params.title;
    const id = req.params.id;

    const article = await Post.findOne({_id: id});

    if (!article) {
      return res.status(404).send({
        message: "No article found.",
        success:false,
        status: 404
      })
    }

    const result =await article.updateOne({
      title: titles.length <= 4 ? article.title : titles,
      description: descriptions.length <= 20 ? article.description : descriptions,
      ingredients: ingredientItems.length <= 4 ? article.ingredients : ingredientItems,
    })

    res.status(200).send(result);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



export default router;
