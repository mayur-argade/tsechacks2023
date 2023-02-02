const express = require('express')
const app = express();
var morgan = require('morgan')

// morgan middleware
app.use(morgan('tiny'))

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// temp check (setting up ejs as a render engine)
app.set("view engine", "ejs")

// test route
app.get('/signuptest', (req, res) => {
    res.render('signuptest')
})

// import all the routes here
const home = require('./routes/HomeRoute')
const user = require('./routes/UserRoute')

// router middleware
app.use('/api/v1', home)
app.use('/api/v1', user)

//export app.js
module.exports = app;
