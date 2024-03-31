const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const connectDB = require('./configuration/db');
const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoute');
const authMiddleware = require('./middleware/authMid');
const error = require('./middleware/errorMid');
const app = express();
dotenv.config();


// middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());



// Connect to database
connectDB();

// Routes

app.use('/api/', authRoutes);
app.use('/api/users', authMiddleware, userRoutes);

// Dashboard Route Handler
app.get('/api/users/:userId/dashboard', authMiddleware, (req, res) => {
    // Check if authenticated user matches requested userId
    if (req.user.id !== req.params.userId) {
        return res.status(403).json({ message: 'Unauthorized access to dashboard' });
    }

    // Proceed with fetching dashboard data for the authenticated user
    // ...
});


//The 404 Route (ALWAYS Keep this as the last route)
app.use(error)

app.get('*', function (req, res) {
    // res.status(404).send('404, Page not found please contact the admin for more information ');
    try {
        res.status(200).json({
            status: "success",
            data: [],
            message: "Welcome to our API homepage!",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }

});



mongoose.connection.once('open', () => {

    const PORT = process.env.PORT || 4000;
    try {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => { console.log(`listening for request on ${PORT}`) });
    } catch (error) {
        console.log("Can not connect to MongoDB ", error);
    }

});



