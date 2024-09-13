const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");

const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.send("User created!");

  } catch (error) {
    next(error);
  }
}

module.exports = { signUp }