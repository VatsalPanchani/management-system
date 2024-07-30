const express = require('express');
const db = require('./database');
const routes1 = require('./routes/employeeRoutes');
const routes2 = require('./routes/companyRoutes');
const routes3 = require('./routes/workingdayRoutes');
const routes4 = require('./routes/userWorkingdayRoutes');
const employeeController = require('./controllers/employeeController');
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', routes1);
app.use('/', routes2);
app.use('/', routes3);
app.use('/', routes4);


// Start the server
const PORT = process.env.PORT || 1680;
db.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
