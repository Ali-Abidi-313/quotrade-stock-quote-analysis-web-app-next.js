import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
  
  
});

export default mongoose.model.User ||
 mongoose.model("User" , UserSchema);