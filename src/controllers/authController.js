const User = require("../models/user");

exports.createuser = async (req, res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ fullname, email, password });

  const savedUser = await newUser.save();
  res.status(201).json({
    message: "User login successfully",
    user: savedUser,
  });
};