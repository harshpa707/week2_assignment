import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";


function generateToken(user) {

  return jwt.sign(
    {
      id: user._id,
      email: user.email
    },

    process.env.JWT_SECRET,

    {
      expiresIn: "1d"
    }
  );
}


export async function register(req, res) {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    if (!name || !email || !password) {

      return res.status(400).json({
        message: "All fields are required"
      });

    }

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {

      return res.status(409).json({
        message: "Email already registered"
      });

    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = generateToken(user);

    res.status(201).json({

      success: true,

      message: "Registration successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }

    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
}


export async function login(req, res) {

  try {

    const {
      email,
      password
    } = req.body;

    const user = await User.findOne({
      email
    });

    if (!user) {

      return res.status(401).json({
        message: "Invalid email or password"
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(401).json({
        message: "Invalid email or password"
      });

    }

    const token = generateToken(user);

    res.json({

      success: true,

      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }

    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
}