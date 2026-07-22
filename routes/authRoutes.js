const express = require('express');
const { registerUser, loginUser, verifyOtp, resendOtp,
    forgotPassword,
    resetPassword, getUsers,
    verifyResendOtp, } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post("/verify-otp", verifyOtp);
router.post('/login', loginUser);
router.get('/users', protect, admin, getUsers);
router.post("/forgot-password", forgotPassword);
router.post("/resend-otp", resendOtp);
router.post("/verify-resend-otp", verifyResendOtp);
router.post("/reset-password", resetPassword);

module.exports = router;
