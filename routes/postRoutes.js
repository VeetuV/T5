const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @route GET && POST && PUT - /posts/
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

router.route("/:id").get(postControllers.getByPostId);
router.route("/:id").put(postControllers.updatePost);
router.route("/:id").delete(postControllers.deletePost);

module.exports = router;
