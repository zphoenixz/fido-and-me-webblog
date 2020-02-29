const path = require('path');

const express = require('express');

const rootController = require('../controllers/root');

const router = express.Router();

router.get('/', rootController.getHome);
router.get('/home', shopController.getHome);

// router.get('/products', shopController.getProducts);

// router.get('/products/:productId', shopController.getProduct);

// router.get('/cart', shopController.getCart);

// router.post('/cart', shopController.postCart);

// router.post('/cart-delete-item', shopController.postCartDeleteProduct);

// router.get('/orders', shopController.getOrders);

// router.get('/checkout', shopController.getCheckout);

module.exports = router;