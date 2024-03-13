import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: String,
  uid: String,
  service: String,
  date: Date,
  slot: String,
  address: Object,
  time: Date,
  status: String,
});

export default mongoose.models.Booking || mongoose.model("Booking", schema);
