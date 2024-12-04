const express = require("express");
const cors = require("cors");
const router = express.Router();
const {
  addInvestmentData,
  getInvestmentData,
} = require("../controllers/investment_data_controller");

router.use(express.urlencoded({ extended: true }));

router.post("/upload", cors(), addInvestmentData);
router.get("/", getInvestmentData);

module.exports = router;
