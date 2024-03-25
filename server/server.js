const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const Home= require('./routes/home');
const error = require('./middleware/errorMid'); 
const app = express();
dotenv.config();


// middleware 
app.use(express.urlencoded({extended: false})); 
app.use(express.json());
app.use(cors());



// Routes
app.use('/api/', Home);



//The 404 Route (ALWAYS Keep this as the last route)
app.use(error)
app.get('*', function (req, res) {
    res.status(404).send('404, Page not found please contact the admin for more information ');
    
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening for request on port ${port}`);
})
