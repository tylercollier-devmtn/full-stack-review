const axios = require('axios');
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const checkUserStatus = require('./middlewares/checkUserStatus');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    // Two weeks
    maxAge: 60 * 60 * 24 * 14 * 1000
  }
}));

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
}).catch(error => {
  console.log('massive error', error);
});

app.get('/auth/callback', authController.connect);
// app.get('/api/user-data', checkUserStatus, userController.getUser);
app.get('/api/user-data', (req, res) => {
  // return res.status(403).json({ message: 'sorry!' });
  res.json({
    user: {
      name: 'T$',
      email: 'etc',
    }
  })
})
app.post('/api/logout', userController.logoutUser);

const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
