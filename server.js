const express = require('express');
const PORT = process.env.PORT || 1738;
const app = express();

app.get('/', function(req, res) {
    res.send({ hi: "there" });
})

// app is listening on PORT 1738
app.listen(PORT, function() {
    console.log("App running on port " + PORT);
})