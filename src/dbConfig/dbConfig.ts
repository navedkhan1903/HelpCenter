import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
  } catch (err) {
    throw new Error("Error connecting to Database");
  }
}
