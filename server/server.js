const express = require('express');
const dotenv = require('dotenv')
const somethingRoutes = require('./routes/something');
const app = express();
dotenv.config();

// middleware 
app.use(express.json());

// Routes
app.use('/api/home', somethingRoutes);

app.get('/', (req, res) => res.status(200).json({message: "Welcome Back Taiwo"});

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening for request on port ${port}`);
})
