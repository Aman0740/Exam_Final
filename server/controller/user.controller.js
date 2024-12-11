  const express = require("express");
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(500).json({ message: "Error hashing password" });
      }

      const user = new userModel({
        username,
        email,
        password: hash,
      });

      await user.save();
      res.status(201).json({ message: "User created successfully" });
    });
  } catch (error) {
     res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
     return res.status(400).json({ error: "invalid not found " });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(400).json({ err: "Error comparing password" });
      }

      if (!result) {
        return res.status(400).json({ error: "Invalid password" });
      }
      const { password, ...rest } = user._doc;

        var token = jwt.sign({ userdata: rest }, "zxcvbnm");
      if (!token) {
        return res.status(500).json({ error: "Error generating token" });
      }

      res
        .cookie("Access_Token", token)
        .status(200)
        .json({ message: "Login Successfully" });
    });
  } catch (error) {
    return res.status(400).json({ error: error.massage });
  }
};

module.exports = { signup, login };

