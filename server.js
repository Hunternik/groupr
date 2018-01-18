const express = require('express');
const passport = require('passport');
const PORT = process.env.PORT || 1738;
const app = express();

require("./services/passport");

app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app);

// app is listening on PORT 1738
app.listen(PORT, function() {
    console.log("App running on port " + PORT);
})