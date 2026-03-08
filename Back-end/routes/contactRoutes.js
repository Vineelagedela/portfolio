const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST API
router.post("/send", async (req, res) => {

  try {

    const { name, email, subject, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();

    res.json({
      success: true,
      message: "Message saved successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

module.exports = router;