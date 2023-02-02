const express = require('express')

//import homeController
const { createad, oneflat, flatlist, getflatbykeyword } = require('../controllers/FlatController') 
const router = express.Router(); // New router instance from express library

//routes
router.route("/createad").post(createad)
router.route("/flats").get(flatlist)
router.route("/getoneflat").get(getflatbykeyword)
router.route("/flats/:id").get(oneflat)

module.exports = router
