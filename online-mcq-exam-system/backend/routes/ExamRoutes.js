const express = require('express');
const ExamModel = require('../models/ExamModel');
const QuestionModel = require('../models/QuestionModel');
const router = express.Router();

// Get all exams
router.get('/', async (req, res) => {
  try {
    const exams = await ExamModel.findAll();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exams' });
  }
});

// Get questions for a specific exam
router.get('/:id/questions', async (req, res) => {
  try {
    const questions = await QuestionModel.findAll({ where: { exam_id: req.params.id } });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

module.exports = router;
