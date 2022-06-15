const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  // takes few things from request body
  const { name, email, password, pic } = req.body;

  //   if name and email and password is undefined throw error and pic is optional
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Details");
  }

  //   check if user already exists in database
  // findone is mongodb query
  const userExists = await User.findOne({ email });

  //   show error if user already exits
  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }
  //otherwise create new user
  //create is query where it will create new user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  // if something inside user , operation completed successfully
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

module.exports = { registerUser };
