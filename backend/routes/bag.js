const express = require("express");
const router = express.Router();
const db = require("../db");

// Fetch all bag items
router.get("/", (req, res) => {
  db.query("SELECT * FROM bag", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Add item to bag
router.post("/", (req, res) => {
  const { id, image, brand, product, price, actualprice, discount } = req.body;
  db.query(
    "INSERT INTO bag (id, image, brand, product, price, actualprice, discount) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [id, image, brand, product, price, actualprice, discount],
    (err) => {
      if (err) {
        console.error("DB insert error:", err);
        return res.status(500).json({ error: err });
      }
      res.status(201).send("Added to bag");
    }
  );
});

// Delete item from bag
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM bag WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.send("Removed from bag");
  });
});

module.exports = router;
