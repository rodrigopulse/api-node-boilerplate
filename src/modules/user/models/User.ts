import mongoose from "mongoose";

export interface IUser {
  name: "string";
  email: "string";
  password: "string";
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
