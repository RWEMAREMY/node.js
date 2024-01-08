import User from "../models/user.js";
import bcrypt from "bcrypt";
import errorFunc from "../utils/errors.js";

const singupController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // VALIDATE PASSWORD

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // MAKE THE FIRST USER AN ADMIN
    const users = await User.find();

    // CHECK IF A USER ALREADY EXISTS
    const userExists = await User.findOne({ email });

    // CHECK IF THERE ARE USERS
    if (users.length === 0) {
      if (userExists) {
        return res.status(409).json({
          message: "User already exists",
        });
      } else {
        // CREATE A NEW USER
        const user = await User.create({
          username,
          email,
          password: hashedPassword,
          role: "admin",
        });

        // SEND RESPONSE
        res.status(201).json({
          message: "User created successfully",
          data: user
        });
      }
    } else {
      // CHECK IF USER EXISTS
      if (userExists) {
        return res.status(409).json({
          message: "User already exists",
        });
      } else {
        // CREATE A NEW USER
        const user = await User.create({
          username,
          email,
          password: hashedPassword,
          role: "user",
        });

        // SEND RESPONSE
        res.status(201).json({
          message: "User created successfully",
          data: user
        });
      }
    }
  } catch (error) {
    const message = error.message;
    const status = 500;
    errorFunc(res, message, status);
  }
};

export default singupController;
