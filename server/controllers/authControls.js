const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateAndSaveToken, generateToken, validateToken } = require('../utils/token'); // Import necessary token functions
const generateVerificationToken = require('../utils/generateVeriToken');
const sendEmail = require('../utils/sendEmail');

// Signup
// Signup function
const signup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    zipcode,
    month,
    day,
    year } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({
      firstName,
      lastName,
      email,
      password,
      zipcode,
      month,
      day,
      year
    });


    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    const savedUser = await user.save();
    const { role, ...user_data } = savedUser._doc;

    // Generate verification token
    const verificationToken = generateVerificationToken();

    // Save verification token to database
    await generateAndSaveToken(verificationToken, user._id);

    // Send verification email
    const message = `Your verification token is: ${verificationToken}`;

    await sendEmail(email, 'Email Verification', message);

    // Return response
    res.status(201).json({
      message: 'User registered successfully. Please check your email for verification', data: [user_data],
    });

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

    res.cookie("token", token, {
      httpOnly: true,
    });

    const { pass, ...user_data } = user._doc;

    res.status(200).json({
      status: "success",
      id: user_data._id,
      message: "You have successfully logged in.",

    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Forgot Password
const forgotPassword = async (req, res) => {
  // logic 
};

// Reset Password
const resetPassword = async (req, res) => {
  // logic
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