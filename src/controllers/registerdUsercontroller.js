const RegisteredUser = require('../models/registereduser');

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);

  try {
    const existingUser = await RegisteredUser.findOne({ email });

    if (!existingUser) {
      return res.status(400).send("Invalid email or password.");
    }
    if (existingUser.password !== password) {
      return res.status(400).send("Invalid email or password.");
    }

    res.status(200).send("Login successfully!");
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Login not complete.");
  }
};
