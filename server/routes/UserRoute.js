const express = require("express");
const router = express.Router();

const { getallroommates, getoneroommate, getroommatebylocation } = require("../controllers/UserController");

router.route("/roommates").get(getallroommates);
router.route("/roomates/:id").get(getoneroommate);
router.route("/roommatesbylocation").get(getroommatebylocation);

module.exports = router;
