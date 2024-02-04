import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: String,
  uid: String,
  phone: String,
  altPhone: String,
  pincode: String,
  locality: String,
  address: String,
  city: String,
  state: String,
});

export default mongoose.models.Address || mongoose.model("Address", schema);
