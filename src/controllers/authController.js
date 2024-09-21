const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middleware/authMiddleware");


exports.createuser = async (req, res) => {
  const { fullname, email, password, role} = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with hashed password
    const newUser = new User({ fullname, email, password: hashedPassword, role });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token for the user
    const token = generateToken(newUser._id, newUser.role);
console.log("new user", newUser);
    res.status(201).json({ message: "Registered successfully!", token: token, role: newUser.role });
  } catch (err) {
    console.error("Error during user registration:", err);
    res.status(500).send("Registration not complete.");
  }
};
