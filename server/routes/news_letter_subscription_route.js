const express = require("express");
const router = express.Router();
const {
  saveNewsletterSubscription,
  getNewsletterSubscriptions,
} = require("../controllers/news_letter_subscription_controller");

router.post("/save", saveNewsletterSubscription);
router.get("/get", getNewsletterSubscriptions);

module.exports = router;
