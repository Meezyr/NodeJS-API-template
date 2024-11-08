const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth/userAuth");
const verifyRight = require("../middlewares/right/verifyRight");

// Import controller functions

router.get('/', [auth, verifyRight("")], 'controller function');
router.get('/:id', [auth, verifyRight("")], 'controller function');

module.exports = router;