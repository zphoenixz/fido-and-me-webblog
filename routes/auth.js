const path = require('path');

const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.post('/user/session', authController.postSession);

module.exports = router;