const mongoose = require("mongoose");

function connectToMongoDB() {
  mongoose
    .connect(
      "mongodb+srv://crescentdede_db_user:gJuTlCuIVXOXkpQi@cluster0.xccfa1t.mongodb.net/?appName=pindclasstest",
    )
    .then(() => console.log("Connected!"))
    .catch((err) => console.log("11111111111111111111111", err));
}
connectToMongoDB();

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date,
});

const ProductSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product
