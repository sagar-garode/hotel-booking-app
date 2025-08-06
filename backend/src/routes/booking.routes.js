import express from "express";
import Booking from "../models/Bookings.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new Booking(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json("NOt Found");
  }
});

router.get("/hotel/:hotelId", async (req, res) => {
  try {
    const bookings = await Booking.find({ hotel: req.params.hotelId })
      .populate("user")
      .populate("hotel");
    res.status(201).json(bookings);
  } catch (e) {
    res.status(500).json("Internal issue");
  }
});

export default router;
