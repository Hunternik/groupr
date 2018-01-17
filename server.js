const express = require('express');
const PORT = process.env.PORT || 1738;
const app = express();

require("./services/passport");

require('./routes/authRoutes.js')(app);

// app is listening on PORT 1738
app.listen(PORT, function() {
    console.log("App running on port " + PORT);
})