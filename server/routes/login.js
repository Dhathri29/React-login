const router = require("express").Router();

const { addDetails } = require("../controllers/login");

router.route("/login").post(addDetails);

module.exports = router;
