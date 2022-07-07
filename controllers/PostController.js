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
        try {
            const post = new Post(req.body);
            await post.save();
            res.json({ message: 'Post created successfuly' });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    },
    update: async (req, res) => {
        const post = Post.findOne({ _id: req.params.id });
        if (!post) res.status(404).json({ message: 'Post not found' });
        try {
            await Post.updateOne({ _id: req.params.id }, {$set: req.body}, {
                runValidators: true,
            });
            res.json({ message: 'Post updated successfuly' });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = PostController;