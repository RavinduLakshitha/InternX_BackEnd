const Company = require("../models/company");
const bcrypt = require('bcryptjs');
const { generateToken } = require("../middleware/authMiddleware");

exports.createcompany = async (req, res) => {
  const { companyname, email, password,role} = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with hashed password
    const newCompany = new Company({ companyname, email, password: hashedPassword,role});

    // Save the user to the database
    await newCompany.save();

    // Generate JWT token for the company
    const token = generateToken(newCompany._id, newCompany.role);
    
    res.status(201).send("Registered successfully!");
  } catch (err) {
    console.error("Error during user registration:", err);
    res.status(500).send("Registration not complete.");
  }
};
