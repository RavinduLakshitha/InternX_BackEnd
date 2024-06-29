const RegisterdUser = require("../models/registereduser");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new RegisterdUser({ email, password });

  try {
    const user = await RegisterdUser.findOne({ email });

    if (!user) {
      return res.status(400).send("Invalid email or password.");
    }
    if (user.password !== password) {
      return res.status(400).send("Invalid email or password.");
    }

    res.status(200).send("Login successfully!");
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Login not complete.");
  }
};
