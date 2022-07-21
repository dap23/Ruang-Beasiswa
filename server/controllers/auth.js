const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const createError = require("../utils/createError");

module.exports.signUp = async (req, res, next) => {
  try {
    const newUser = new User({
      ...req.body,
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(401, "Wrong Credentials!"));

    const isPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!isPassword) return next(createError(401, "Wrong Credentials!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...other } = user._doc;

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...other });
  } catch (error) {
    next(error);
  }
};
