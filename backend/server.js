import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cityRoutes from "./src/routes/city.routes.js";
import hotelRoutes from "./src/routes/hotel.routes.js";
import userRoutes from "./src/routes/users.routes.js";
import bookingROutes from "./src/routes/booking.routes.js";
import roomRoutes from "./src/routes/room.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json()); //parses incoming JSON
app.use(cookieParser());
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      scriptSrc: ["'self'"],
      defaultSrc: ["'self'"],
      objectSrc: ["'none'"],
      upgradeInsecurerequests: [],
    },
  }),
);

app.use("/api/cities", cityRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingROutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/auth", authRoutes);

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello from your Express server!");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
  });
});
