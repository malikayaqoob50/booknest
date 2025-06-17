const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'], // Name is required
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true, // Remove leading/trailing spaces
  },
  password: {
    type: String,
    required: [true, 'Password is required'], // Password is required
    minlength: 6, // Minimum password length
  },
});

// Export the model based on the schema
module.exports = mongoose.model('User', userSchema);
