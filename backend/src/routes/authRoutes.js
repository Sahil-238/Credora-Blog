const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected routes
router.use(protect);
router.get('/me', authController.getMe);
router.patch('/updateProfile', authController.updateProfile);
router.patch('/updatePassword', authController.updatePassword);

module.exports = router; 