const express = require('express')

//import homeController
const { home } = require('../controllers/HomeController') 
const router = express.Router(); // New router instance from express library

//routes
router.route("/").get(home)

module.exports = router
