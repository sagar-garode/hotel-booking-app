import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log("1111111111", user);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json("NOt Found");
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (e) {
    res.status(500).json("Internal issue");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.json("user not found");
    res.status(201).json("User Updated");
  } catch (e) {
    res.status(500).json("Internal issue");
  }
});

export default router;
