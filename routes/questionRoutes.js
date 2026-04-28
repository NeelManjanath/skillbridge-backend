const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

console.log("Routes file loaded");
// GET all questions
router.get("", async (req, res) => {
  try {
    console.log("GET /questions hit");  
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new question
router.post("/", async (req, res) => {
  try {
    const { title, company, description, duration, deadline, difficulty } = req.body;

    const question = new Question({
      title,
      company,
      description,
      duration,
      deadline,
      difficulty
    });

    const saved = await question.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;