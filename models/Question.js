const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String },

  duration: { type: String, required: true },
  deadline: { type: String, required: true },

  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "easy"
  }
}, { timestamps: true });

module.exports = mongoose.model("Question", QuestionSchema);