// import mongoose from "mongoose";

// // 1. Define your MongoDB Connection URI
// const MONGO_URI = "mongodb://127.0.0.1:27017/my_database"; // Replace with your actual URI

// // 2. Establish the Database Connection
// async function connectDB() {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("Successfully connected to MongoDB.");
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     process.exit(1);
//   }
// }

// // 3. Define the Blueprint (The Schema)
// // This dictates the structural shape of the documents in your collection.
// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   roles: { type: [String], default: ["user"] },
//   createdAt: { type: Date, default: Date.now },
// });

// // 4. Compile the Model
// // The model is the constructor class built from the schema.
// // Pass the singular name of your collection; Mongoose automatically pluralizes it (e.g., 'User' targets the 'users' collection).
// const User = mongoose.model("User", UserSchema);

// // 5. Instantiation and Insertion Logic
// async function createDocument() {
//   try {
//     // Instantiate a new document instance in memory
//     const newUser = new User({
//       username: "crescent_dev",
//       roles: ["developer", "admin"],
//     });

//     // Save the document persistently to the MongoDB disk layer
//     const savedDoc = await newUser.save();
//     console.log("Document created successfully:", savedDoc);
//   } catch (error) {
//     console.error("Error creating document:", error);
//   } finally {
//     // Disconnect when your operation completes
//     await mongoose.disconnect();
//   }
// }

// // Execution runner
// async function main() {
//   await connectDB();
//   await createDocument();
// }

// main();

// // // import http from "http";
// // // import filesystem from "node:fs";
// // const http = require("http");
// // const filesystem = require("fs");
// // const app = require("./app");

// // let path = "";

// // const server = http.createServer(app);

// // server.listen(3000, "localhost", () => {
// //   console.log("server running on http://localhost:3000");
// // });

// // //   (req, res) => {
// // //   switch (req.url) {
// // //     case "/":
// // //       path = path + "/";
// // //       break;
// // //     case "/about":
// // //       path = path + "/about.html";
// // //       break;
// // //     default:
// // //       path = path + "/404.html";
// // //   }

// // //   //   console.log(req.url);
// // //   //   res.write("<h1>This is the home page</h1>");
// // //   filesystem.readFile(`./views/${path}`, (err, data) => {
// // //     res.write(data);
// // //     res.end();
// // //   });
// // // }
