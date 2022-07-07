const postRouter = require('express').Router();
const { PostController } = require('../../controllers');

postRouter.get('/', PostController.index);
postRouter.get('/:id', PostController.show);

module.exports = postRouter;