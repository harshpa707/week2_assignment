import express from "express";
import dotenv from "dotenv";
// import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running"
  });
});

// connectDB().then(() => {
//   app.listen(8000, () => {
//     console.log("Server running on http://localhost:8000");
//   });
// });
  app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
  });