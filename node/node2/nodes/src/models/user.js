import mongoose from "mongoose";
import bycrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: [6, "Password is too short"] },
  role: { type: String, required: true, default: "user" },
  createdAt: { type: Date, default: Date.now() },
});


const User = mongoose.model("User", userSchema);

export default User;
