const express = require('express');
const cors = require('cors');
require('dotenv').config();
const UserModel = require('./models/UserModel');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/exams', require('./routes/ExamRoutes'));
app.use('/api/results', require('./routes/ResultRoutes'));

app.post('/api/login', async(req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ where: { email, password } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

   res.json({
      id: user.id,
      email: user.email,
      name: user.name || '',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
