const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Initialize the app
const app = express();

// Middlewares
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Seting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Bring in the  routes
const users = require('./routes/api/user');
app.use('/api/user', users);

const patient = require('./routes/api/patient');
app.use('/api/patient', patient)

const waitList = require('./routes/api/waitlist');
app.use('/api/waitlist', waitList)



// =================== mysql2================================

const db = require("./models"); 


const PORT = process.env.PORT || 4000;

db.sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
})

