const User = require("../models/user");

exports.createuser = async (req, res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ fullname, email, password });

  try {
    await newUser.save();
    res.status(201).send("Registered successfully!");
  } catch (err) {
    res.status(500).send("Registered not complete.");
  }
};
