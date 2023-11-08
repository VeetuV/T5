const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);

    post = await post.save();

    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getByPostId = async (req, res, next) => {
  try {
    let postId = req.params.id;

    let [post, _] = await Post.findById(postId);

    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let { title, body } = req.body;
    let post = new Post(title, body);

    post = await post.updateById(postId);

    res.status(201).json({ message: "Post updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    let postId = req.params.id;

    post = await Post.deleteById(postId);

    res.status(201).json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
