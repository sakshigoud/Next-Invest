const mongoose = require("mongoose");

const news_letter_subscription_schema = new mongoose.Schema({
  email: { type: String, required: true },
});

module.exports = mongoose.model(
  "News_letter_subscription",
  news_letter_subscription_schema
);
