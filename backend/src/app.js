// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const morgan = require('morgan');
// const dotenv = require('dotenv');

// // Import routes
// const authRoutes = require('./routes/authRoutes');
// const blogRoutes = require('./routes/blogRoutes');
// const courseRoutes = require('./routes/courseRoutes');

// // Load environment variables
// dotenv.config();

// const app = express();

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Middleware
// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/courses', courseRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     status: 'error',
//     message: 'Something went wrong!'
//   });
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({
//     status: 'fail',
//     message: 'Route not found'
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// module.exports = app; 


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Webhook } = require('svix');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware to parse raw body for webhook verification
app.use('/api/webhooks', bodyParser.raw({ type: 'application/json' }));

app.post('/api/webhooks', async (req, res) => {
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
