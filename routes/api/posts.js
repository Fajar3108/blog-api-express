const postRouter = require('express').Router();
const { PostController } = require('../../controllers');

postRouter.get('/', PostController.index);
postRouter.get('/:id', PostController.show);
postRouter.post('/', PostController.store);

module.exports = postRouter;