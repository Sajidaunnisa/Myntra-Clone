const express = require("express");
const router = express.Router();
const db = require("../db");

// Add to Bag
router.post("/bag", (req, res) => {
  const { product_id, name, image, price } = req.body;
  const sql =
    "INSERT INTO bag (product_id, name, image, price) VALUES (?, ?, ?, ?)";
  db.query(sql, [product_id, name, image, price], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Product added to bag");
  });
});
console.log("Bag API initialized");
// Get Bag Items
router.get("/bag", (req, res) => {
  db.query("SELECT * FROM bag", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Delete from Bag
router.delete("/bag/:id", (req, res) => {
  db.query("DELETE FROM bag WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Item removed from bag");
  });
});

// Wishlist APIs (same structure)
router.post("/wishlist", (req, res) => {
  const { product_id, name, image, price } = req.body;
  const sql =
    "INSERT INTO wishlist (product_id, name, image, price) VALUES (?, ?, ?, ?)";
  db.query(sql, [product_id, name, image, price], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Added to wishlist");
  });
});

router.get("/wishlist", (req, res) => {
  db.query("SELECT * FROM wishlist", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

router.delete("/wishlist/:id", (req, res) => {
  db.query("DELETE FROM wishlist WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Removed from wishlist");
  });
});

module.exports = router;
