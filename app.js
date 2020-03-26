var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const operations = require('./operations.js');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
    socket.on('calculate_bmi', (data) => {
        console.log("calculating bmi");
        let bmi = operations.calculateBmi(data.heightFeet, data.heightInches, data.weightPounds);
        socket.emit('recieve_bmi', bmi);
    });

    socket.on('calculate_retirement', (data) => {
        console.log("calculating retirement");
        let retirementAge = operations.calculateRetirement(data.currentAge, data.salary, data.percentage, data.goal);
        socket.emit('recieve_retirement', retirementAge);
    });
});

http.listen(process.env.PORT || 3000, function () {
    console.log('listening on *:3000');
});