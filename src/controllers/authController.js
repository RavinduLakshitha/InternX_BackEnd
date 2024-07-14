const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.createuser = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with hashed password
    const newUser = new User({ fullname, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    res.status(201).send("Registered successfully!");
  } catch (err) {
    console.error("Error during user registration:", err);
    res.status(500).send("Registration not complete.");
  }
};
