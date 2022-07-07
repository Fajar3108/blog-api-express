const postRouter = require('express').Router();
const { PostController } = require('../../controllers');

postRouter.get('/', PostController.index);

module.exports = postRouter;