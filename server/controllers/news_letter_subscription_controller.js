const News_letter_subscription = require("../models/news_letter_subscription_model");

async function saveNewsletterSubscription(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    const newsletterSubscription = new News_letter_subscription({
      email: email,
    });
    await newsletterSubscription.save();
    res
      .status(201)
      .json({ message: "Newsletter subscription saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

async function getNewsletterSubscriptions(req, res) {
  try {
    const newsletterSubscriptions = await News_letter_subscription.find();
    res.status(200).json(newsletterSubscriptions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  saveNewsletterSubscription,
  getNewsletterSubscriptions,
};
