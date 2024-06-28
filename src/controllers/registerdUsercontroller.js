const RegisterdUser = require('../models/registereduser')

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new RegisterdUser({ email, password });

  try {
    await newUser.save();
    res.status(201).send("Login successfully!");
  } catch (err) {
    res.status(500).send("Login not complete.");
  }
};