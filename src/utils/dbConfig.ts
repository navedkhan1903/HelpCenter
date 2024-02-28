import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
