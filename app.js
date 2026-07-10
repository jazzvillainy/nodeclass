const express = require("express");
const app = express();
const productsRoute = require("./routes/products");
// const userRoute = require("./routes/user");

// const { MongoClient, Int32, Double } = require("mongodb");

// const client = new MongoClient(
//  );
app.use(express.json());

// const product = new Product({category: })

// async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("You successfully connected to MongoDB!");
//     return client;
//   } catch (err) {
//     console.dir(err);
//   }
// }

app.use("/products", productsRoute);



// app.use("/user", userRoute);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = {app};
// module.exports =mongoose;
// app.get("/", (req, res) => {
//   res.send({ message: "this is the home page" });
// });
// app.get("/about", (req, res) => {
//   res.send("this is the about page");
// });

// app.get("/profile", (req, res) => {
//   res.send("This is the profile page");
// });

// app.post("/form-data", (req, res) => {
//   console.log(req.body);
//   res.json({ message: "your form data has been recieved" });
// });
