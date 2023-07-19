// Create web server
// In the root of the project, create a file called server.js.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
// Run the server
// In the root of the project, run the following command:

// $ node server.js

// You should see the following output:

// Example app listening on port 3000!

// Now, open a browser and navigate to http://localhost:3000. You should see the following output:

// Hello World!