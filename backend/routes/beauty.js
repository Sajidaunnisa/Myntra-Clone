const express = require("express");
const router = express.Router();
const db = require("../db"); // assuming you already set up db connection

router.get("/", (req, res) => {
  db.query("SELECT * FROM beauty_products", (err, results) => {
    if (err) {
      console.error("Error fetching beauty products:", err);
      return res.status(500).json({ error: "Server error" });
    }
    res.json(results);
  });
});

module.exports = router;
