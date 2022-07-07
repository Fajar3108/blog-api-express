const { Post } = require('../models');

const PostController = {
    index: async (req, res) => {
        const posts = await Post.find();
        res.json(posts);
    },
};

module.exports = PostController;