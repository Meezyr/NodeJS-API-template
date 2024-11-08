const express = require('express');
const router = express.Router();
const {loginUserAuth, refreshTokenAuth} = require('../controllers/authControllers');

router.post('/login', loginUserAuth);
router.post('/refresh', refreshTokenAuth);

module.exports = router;