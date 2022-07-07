const { Post } = require('../models');

const PostController = {
    index: async (req, res) => {
        const posts = await Post.find();
        res.json(posts);
    },
    show: async (req, res) => {
        const post = await Post.findOne({ _id: req.params.id })
        res.json(post);
    },
    store: async (req, res) => {
        const post = new Post(req.body);
        try {
            await post.save();
            res.json({ message: 'Post created successfuly' });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = PostController;