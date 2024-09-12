const mongoose = require("mongoose");

//creating user schema for user model

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  }
}, { timestamps: true })


//creating user model

const User = mongoose.model("User", userSchema);

module.exports = User;