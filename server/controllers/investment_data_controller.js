const multer = require("multer");
const Investment_data = require("../models/investment_data_model");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

async function addInvestmentData(req, res) {
  try {
    upload.single("image")(req, res, async function (err) {
      if (err) {
        console.log(`error: ${err}`);
        return res.status(400).json({ error: err.message });
      }
      if (req.file) {
        const imageUrl = `/uploads/${req.file.filename}`;

        const investmentData = new Investment_data({
          ...req.body,
          image: imageUrl,
        });

        await investmentData.save();

        res.status(201).json({ message: "Investment data added successfully" });
      } else {
        console.log("File not found");
        res.status(400).json({ error: "File not found" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getInvestmentData(req, res) {
  try {
    const investmentData = await Investment_data.find();
    res.status(200).json(investmentData);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
    console.log(error);
  }
}

module.exports = { addInvestmentData, getInvestmentData };
