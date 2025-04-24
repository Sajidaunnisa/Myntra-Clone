const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/", require("./routes/home"));
app.use("/api/men", require("./routes/men"));
app.use("/api/women", require("./routes/women"));
app.use("/api/kids", require("./routes/kids"));
app.use("/api/beauty", require("./routes/beauty"));
app.use("/api/home-living", require("./routes/homeLiving"));
app.use("/api/wishlist", require("./routes/wishlist"));
app.use("/api/bag", require("./routes/bag"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
