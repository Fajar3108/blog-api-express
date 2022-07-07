const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
    title: {
        type: String,
        required: true,
    },
    description: { 
        type: String, 
        required: false,
    },
});

module.exports = Post;