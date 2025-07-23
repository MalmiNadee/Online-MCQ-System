const express = require('express');
const router = express.Router();
const ResultModel = require('../models/ResultModel');
const QuestionModel = require('../models/QuestionModel');
const UserModel = require('../models/UserModel');
const ExamModel = require('../models/ExamModel');

router.post('/', async (req, res) => {
  try {
    const { userId, examId, answers } = req.body;

    const user = await UserModel.findByPk(userId);
    if (!user) return res.status(400).json({ error: 'Invalid userId' });

    const exam = await ExamModel.findByPk(examId);
    if (!exam) return res.status(400).json({ error: 'Invalid examId' });

    let score = 0;
    const evaluatedAnswers = [];

    for (const answer of answers) {
      const question = await QuestionModel.findByPk(answer.questionId);
      if (!question) {
        return res.status(400).json({ error: `Question ${answer.questionId} not found` });
      }
      const is_correct = question.correct_option === answer.selectedOption;
      if (is_correct) score++;
      evaluatedAnswers.push({ ...answer, is_correct });
    }
    const result = await ResultModel.create({
      user_id: userId,
      exam_id: examId,
      score,
    });

    res.json({ 
      id: result.id,
      user_id: userId,
      exam_id: examId,
      score,
      answers: evaluatedAnswers,
    });

  } catch (error) {
    console.error('Error submitting results:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
