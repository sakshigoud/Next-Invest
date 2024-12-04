const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const connectToDB = require("./connections/db_connection");
const investmentDataRoute = require("./routes/investment_data_route");
const adminAuthRoute = require("./routes/admin_auth_route");
const newsLetterSubscriptionRoute = require("./routes/news_letter_subscription_route");

const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

connectToDB(MONGO_URL);

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Replace '*' with specific origin if needed
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Origin"
  );
  next();
});

app.use("/api/admin", adminAuthRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/investment_data", investmentDataRoute);

app.use("/api/newsletter", newsLetterSubscriptionRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.json({ test: "test" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
