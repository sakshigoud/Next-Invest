const express = require("express");
const router = express.Router();
const { adminLogin } = require("../controllers/admin_auth_controller");

router.post("/login", adminLogin);

module.exports = router;
