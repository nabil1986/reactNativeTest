const mongoose = require('mongoose');
const User = require('../models/userModel');

mongoose.connect('mongodb+srv://nabil:nabilliban@cluster0.pnzwfz0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  
  User.insertMany([
    { firstName: 'John', lastName: 'Doe', age: 30 },
    { firstName: 'Jane', lastName: 'Doe', age: 25 },
    { firstName: 'Mark', lastName: 'Smith', age: 40 }
  ]).then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  }).catch(err => console.error('Error inserting data', err));
}).catch(err => console.error('Could not connect to MongoDB', err));
