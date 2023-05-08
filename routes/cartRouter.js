const express = require('express');
const cartController = require('../controllers/cartController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('', validateToken, cartController.createCart);
router.get('', validateToken, cartController.getCarts);
router.patch('', validateToken, cartController.modifyQuantity);

module.exports = {
  router,
};
