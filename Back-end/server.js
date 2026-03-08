const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// middleware
const contactRoutes = require("./routes/contactRoutes");
app.use(cors());
app.use(bodyParser.json());
app.use("/api/contact", contactRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/contactDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Contact API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

