const express = require('express')
const app = express();
var morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// morgan middleware
app.use(morgan('tiny'))

// regular middlewares
const corsOption = {
    credentials: true,
    origin: ["http://localhost:3000"],
  };
  app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

// temp check (setting up ejs as a render engine)
app.set("view engine", "ejs")

// test route
app.get('/signuptest', (req, res) => {
    res.render('signuptest')
})

// import all the routes here
const home = require('./routes/HomeRoute')
const user = require('./routes/UserRoute')
const auth = require('./routes/AuthRoute')
const flat = require('./routes/FlatRoute')


// router middleware
app.use('/api/v1', home)
app.use('/api/v1/user', user)
app.use('/api/v1/auth', auth)
app.use('/api/v1/flat', flat)

//export app.js
module.exports = app;
