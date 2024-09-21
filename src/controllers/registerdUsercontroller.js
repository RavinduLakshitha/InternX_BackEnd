const User = require("../models/user");
const Company = require("../models/company");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let existingUser = await User.findOne({ email });
    if(!existingUser){
       existingUser = await Company.findOne({ email });

    }
console.log("existing user",existingUser)
    if (!existingUser) {
      return res.status(400).send("Email not found");
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(400).send("Invalid password.");
    }

    res.status(200).send({message:"Login successfully!",user:existingUser});
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Login not complete.");
  }
};
