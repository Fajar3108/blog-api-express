const { Post } = require('../models');

const PostController = {
    index: async (req, res) => {
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch(error) {
            res.status(500).json({ message: error.message });
        }
    },
    show: async (req, res) => {
        try {
            const post = await Post.findOne({ _id: req.params.id })
            res.json(post);
        } catch(error) {
            res.status(404).json({ message: error.message });
        }
    },
    store: async (req, res) => {
        try {
            const post = new Post(req.body);
            await post.save();
            res.json({ message: 'Post created successfuly' });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    },
    update: async (req, res) => {
        try {
            await Post.updateOne({ _id: req.params.id }, {$set: req.body}, {
                runValidators: true,
            });
            res.json({ message: 'Post updated successfuly' });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    },
};

module.exports = PostController;