const { Post } = require('../models');

const PostController = {
    index: async (req, res) => {
        const posts = await Post.find();
        res.json(posts);
    },
    show: async (req, res) => {
        const post = await Post.findOne({ _id: req.params.id })
        res.json(post);
    }
};

module.exports = PostController;