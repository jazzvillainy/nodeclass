const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const BlogPost = new Schema({
//   author: ObjectId,
//   title: String,
//   body: String,
//   date: Date,
// });

// const ProductSchema = new Schema({
//   id: Number,
//   title: String,
//   price: Number,
//   description: String,
//   category: String,
// });

// const Product = mongoose.model("Product", ProductSchema);

// module.exports = Product
