const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter with SMTP authentication
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USERNAME, // Your Gmail email address
    pass: process.env.MAIL_PASSWORD, // Your Gmail password
  }, 
  secure: false, // true for 465, false for other ports
  tls: {
    rejectUnauthorized: false // Disable SSL certificate verification
  },
});

module.exports = transporter;