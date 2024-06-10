const User = require('../models/user')

exports.createuser = async (req, res) => {
  const name = req.body.email;
  const password = req.body.password;

  const newUser = new User({ name, address});

  const savedUser = await newUser.save();
  res.status(201).json({
    message: 'User login successfully'
  });

}