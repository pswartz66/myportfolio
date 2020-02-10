const express = require('express');
// const mongoose = require('mongoose');
// const passport = require('./config/passport');
// const db = require('./models')
// const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();

//Middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport and restore authentication state, if any, from the session.
// app.use(passport.initialize());
// Calls the deserializeUser
// app.use(passport.session());

// Serve up static assets (on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Use routes
// app.use(routes);

// no routes are currently setup so instead of using above
// we'll run a app.get
app.get((req, res) => {
    // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// const endpoint = '';
//Start up the mongoose server
// mongoose.connect(process.env.MONGODB_URI ||  `mongodb://localhost/${endpoint}`);

//Start up our server:
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
