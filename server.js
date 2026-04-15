const express = require('express');
const app = express();

app.use(express.json());

let subscription = {
  userId: 1,
  expiresAt: new Date()
};

app.post('/extend-subscription', (req, res) => {
  const { days } = req.body;

  if (!days || days <= 0) {
    return res.status(400).json({ error: 'Invalid days' });
  }

  const currentDate = new Date(subscription.expiresAt);
  currentDate.setDate(currentDate.getDate() + days);
  subscription.expiresAt = currentDate;

  res.json({ message: 'Subscription extended', expiresAt: subscription.expiresAt });
});

app.get('/subscription', (req, res) => {
  res.json(subscription);
});

app.listen(3000, () => console.log('Server running on port 3000'));