const express = require('express');
const likeController = require('../controllers/likeController');

const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('', validateToken, likeController.createDeleteLike);
router.get('', validateToken, likeController.getLikes);

module.exports = {
  router,
};
