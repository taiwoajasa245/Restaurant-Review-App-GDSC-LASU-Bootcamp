const express = require('express');
const dotenv = require('dotenv')
const somethingRoutes = require('./routes/something');
const app = express();
dotenv.config();

// middleware 
app.use(express.json());

// Routes
app.use('/api/home', somethingRoutes);



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening for request on port ${port}`);
})
