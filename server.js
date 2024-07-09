const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on ${process.env.MONGO_URI}:${PORT}`);
});
