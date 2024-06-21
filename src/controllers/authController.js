const User = require("../controllers/authController");

exports.createuser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ email, password });

  const savedUser = await newUser.save();
  res.status(201).json({
    message: "User login successfully",
    user: savedUser,
  });
};