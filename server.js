const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors({
  origin: "https://skillbridge115768.netlify.app/"
}));
app.use(express.json());

// ✅ TEST ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  console.log("ROOT HIT");
  res.send("Server is working");
});

// ✅ CONNECT DB FIRST
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// ✅ IMPORT ROUTES
const questionRoutes = require("./routes/questionRoutes");

// ✅ USE ROUTES
app.use("/api/questions", questionRoutes);

console.log("Server file loaded");

app.listen(5000, () => {
  console.log("Server running on port 5000");
});