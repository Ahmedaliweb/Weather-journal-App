// Setup empty JS object to act as endpoint for all routes

// Require Express to run server and routes
const express = require('express');
const app = express()

// Start up an instance of app
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

let projectData = {};
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 6500;

const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running at http://localhost:${port}`);
  };

app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData).status(200);
};

app.post('/add', callBack);

function callBack(request, response){
  projectData = request.body;
 console.log(projectData);
    response.send("post received").status(200);
};


