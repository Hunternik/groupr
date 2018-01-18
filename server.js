const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = './config/keys';
const PORT = process.env.PORT || 1738;
const app = express();

// connect to mongodb
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);


app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app);

// app is listening on PORT 1738
app.listen(PORT, function() {
    console.log("App running on port " + PORT);
})