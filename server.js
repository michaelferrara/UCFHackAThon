const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const http = require('http').Server(app);
app.use(bodyParser.json());
var request = require("request");
const fs = require('fs');

/*
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/js", express.static(__dirname + '/js'));
*/

// Generates the get request for the website
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.get('/stats', (req, res) => {
    res.sendFile(__dirname+'/stats.html')
})

// Hosts server for website
const server = http.listen(3000, () => {
	console.log('http://localhost:3000')
});