const mongose = require("mongoose");

const investment_data_schema = new mongose.Schema({
  tag: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  getPrice: { type: Number, required: true },
  securityType: { type: String, required: true },
  investmentMultiplier: { type: Number, required: true },
  maturity: { type: Number, required: true },
  minInvestment: { type: Number, required: true },
});

module.exports = mongose.model("Investment_data", investment_data_schema);
