var express = require('express');
var app = express();
app.use(express.static("APP")); // App will be the same folder name.
app.get('/', function (req, res) {
res.redirect('/');
});
app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080");