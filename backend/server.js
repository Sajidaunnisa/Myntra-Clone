const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/products");
const beautyRoutes = require("./routes/beauty");

app.use("/api/beauty", beautyRoutes);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", productRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
