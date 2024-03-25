const express = require('express');
const router = express.Router();
const { signup, login, forgotPassword, resetPassword, logout } = require('../controllers/authControls');

router.post('/signup', signup);
router.post('/login', login);
// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password/:resetToken', resetPassword);
router.get('/logout', logout);

module.exports = router;