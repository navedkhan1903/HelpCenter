import mongoose from "mongoose";

const schema = new mongoose.Schema({
  uid: String,
  name: String,
  ratings: Number,
  review: String,
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", schema);
