const http = require("node:http");
const fs = require("fs");

//note that javascript can now access the file system with fs

// const path = require("node:path");

//explain the arguments
// after eexplaing IPs => localhost
server.listen(3000, "localhost", () => {
  //use dynamic values and variables later

  console.log(`Server running at http://localhost:3000/`);
});

//requets made but no response
//code doesnt run on browser console

// let path;
// const server = http.createServer((req, res) => {
//   req.url == "/" ? (path = "index.html") : "";
//   console.log("request made");
//   fs.readFile(`./views/${path}`, (err, data) => {
//     res.write(data);
//   });
// });
