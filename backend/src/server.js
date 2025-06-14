require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Webhook } = require('svix');
const User = require('./models/User');
const cors = require('cors');

const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use('/webhook', bodyParser.raw({ type: 'application/json' }));
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../../build')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.send('Server is running');
});

// Catch-all handler to serve React's index.html for any other requests (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.post('/webhook', async (req, res) => {
  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

  let evt;

  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return res.status(400).send('Invalid webhook signature');
  }

  const { type, data } = evt;

  if (type === 'user.created') {
    const {
      id,
      email_addresses,
      primary_email_address_id,
      first_name,
      last_name,
      image_url,
      phone_numbers,
      primary_phone_number_id,
    } = data;

    const emailObj = email_addresses.find(
      (email) => email.id === primary_email_address_id
    );
    const phoneObj = phone_numbers.find(
      (phone) => phone.id === primary_phone_number_id
    );

    const newUser = new User({
      clerkId: id,
      email: emailObj ? emailObj.email_address : '',
      firstName: first_name || '',
      lastName: last_name || '',
      imageUrl: image_url || '',
      phoneNumber: phoneObj ? phoneObj.phone_number : '',
    });

    try {
      await newUser.save();
      console.log('User saved:', newUser);
    } catch (err) {
      console.error('Error saving user:', err);
    }
  }

  res.status(200).json({ message: 'Webhook received' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
