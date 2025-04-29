const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM wishlist", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { id, image, brand, product, price, actualprice, discount } = req.body;

  db.query(
    "INSERT INTO wishlist (id, image, brand, product, price, actualprice, discount) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [id, image, brand, product, price, actualprice, discount],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      res.status(201).send("Added to wishlist");
    }
  );
});

router.delete("/:id", (req, res) => {
  db.query("DELETE FROM wishlist WHERE id = ?", [req.params.id], (err) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.send("Removed from wishlist");
  });
});

module.exports = router;
