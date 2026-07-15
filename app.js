const express = require("express");
const app = express();
const productsRoute = require("./routes/products");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://crescentdede_db_user:${process.env.DATABASE_SECRETS}@cluster0.xccfa1t.mongodb.net/?appName=Cluster0`,
  )
  .then(() => console.log("Connection to db successful"))
  .catch((err) => console.log(err));

app.use("/products", productsRoute);
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = { app };
