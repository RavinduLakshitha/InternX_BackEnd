const User = require("../models/user");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);

  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (!existingUser) {
      return res.status(400).send("Email not found");
    }
    if (existingUser.password !== password) {
      return res.status(400).send("Invalid password.");
    }

    res.status(200).send("Login successfully!");
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Login not complete.");
  }
};
