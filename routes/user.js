const bcrypt = require("bcrypt");
const express = require("express");
const UserModel = require("../models/usermodel");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const alreadyExistingUser = await UserModel.find({ email: req.body.email });
  if (alreadyExistingUser.length >= 1) {
    return res.status(400).json({ message: "this email is already in use!!!" });
  }
  const hashedpassword = await bcrypt.hash(
    req.body.password,
    10,
    // "goonygoogoolooneycuckoo",
  );
  console.log(hashedpassword);

  try {
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedpassword,
    });
    await user.save();
    res.status(200).json({ message: "Registration success!" });
  } catch (e) {
    console.log("failed to create  user");
    res.status(406).json({ message: "failed to register user" });
  }
});

router.post("/signin", async (req, res) => {
  const alreadyExistingUser = await UserModel.find({ email: req.body.email });
  if (alreadyExistingUser.length >= 1) {
    try {
      const comparePasswords = await bcrypt.compare(
        req.body.password,
        alreadyExistingUser[0].password,
      );
      // console.log(compareaPasswords);

      res.status(200).json({ meessage: "user logged in successfully" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: " wrong email or password" });
    }
  } else {
    res.status(400).json({ message: " wrong email or password" });
  }
});

module.exports = router;
