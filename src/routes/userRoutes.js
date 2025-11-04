const express = require('express');
const userController = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware'); 
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', protect, userController.getProfile);

module.exports = router;