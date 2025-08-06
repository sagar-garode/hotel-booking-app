import mongoose from "mongoose";
const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: mongoose.Schema.Types.ObjectId, ref: "City", required: true },
  address: { type: String },
  starRating: { type: Number },
  image: { type: String },
});

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
