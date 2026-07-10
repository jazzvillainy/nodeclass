const express = require("express");
const router = express.Router();
const { productsList } = require("../constants");
// const { route } = require("../app");
const { app } = require("../app");
const Product = require('../models/productModel')
// const mongoose = require("../app");

router.get("/", (req, res) => {
  res.status(200).json(productsList);
});

router.get("/:id", (req, res) => {
  const singleItem = productsList.filter((item) => item.id == req.params.id);
  res.status(200).json(singleItem);
});

router.post("/add", async (req, res) => {
  try {
    const product = new Product({
      category: req.body.category,
      description: req.body.description,
      price: Number(req.body.price),
      title: req.body.title,
    });

    await product.save();
    // mongoose.disconnect();
  } catch (e) {
    console.log(e);
  }
});

router.delete("/:id", (req, res) => {
  const newlist = productsList.filter(
    (item) => item.id !== Number(req.params.id),
  );

  res.status(200).json(newlist);
});

module.exports = router;
