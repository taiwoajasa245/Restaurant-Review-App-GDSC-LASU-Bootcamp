const nodemailer = require('nodemailer');

// Create a transporter with SMTP authentication
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '<your_gmail_email_Address>', // Your Gmail email address
    pass: '<your_gmail_password>', // Your Gmail password
  },
});

module.exports = transporter;