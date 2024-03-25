const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateAndSaveToken } = require('../utils/token'); // Import necessary token functions
const generateVerificationToken = require('../utils/generateVerificationToken');
// const sendEmail = require('../utils/sendEmail');

// Signup
// Signup function
const signup = async (req, res) => {
    const { name, username, email, password, gender } = req.body;
  
    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user
      user = new User({
        name,
        username,
        email,
        password,
        // gender,
      });
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
  
      // Save user to database
      await user.save();
  
      // Generate verification token
      const verificationToken = generateVerificationToken();
  
      // Save verification token to database
      await generateAndSaveToken(verificationToken, user._id);
  
      // Send verification email
      const message = `Your verification token is: ${verificationToken}`;
      await sendEmail(email, 'Email Verification', message);
  
      // Return response
      res.status(201).json({ message: 'User registered successfully. Please check your email for verification' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };


// Verify Email
const verifyEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const tokenObj = await Token.findOne({ token });

    if (!tokenObj) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    await User.findByIdAndUpdate(tokenObj.userId, { isEmailVerified: true });
    await Token.findByIdAndDelete(tokenObj._id);

    res.status(200).json({ message: 'Email verification successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken({ userId: user._id });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Forgot Password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = generateVerificationToken();
    const token = generateToken({ userId: user._id });

    await Token.create({ token: resetToken, userId: user._id });

    const message = `Please click on the following link to reset your password: ${resetToken}`;
    await sendEmail(email, 'Reset Password', message);

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Reset Password
const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;

  if (!password || !confirmPassword) {
    return res.status(400).json({ message: 'Please provide both password and confirm password' });
  }

  try {
    const tokenObj = await Token.findOne({ token });

    if (!tokenObj) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }

    const user = await User.findById(tokenObj.userId);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    await Token.findByIdAndDelete(tokenObj._id);

    res.status(200).json({ message: 'Password reset successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update Details
const updateDetails = async (req, res) => {
  // Logic for updating user details
};

// Logout
const logout = async (req, res) => {
  // Logic for logout
};

module.exports = {
  signup,
  verifyEmail,
  login,
  forgotPassword,
  resetPassword,
  updateDetails,
  logout
};