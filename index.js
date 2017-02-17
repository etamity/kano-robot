
const port = 8001;
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(port);
console.log('Socket Started, listening port', port, '...');
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  	socket.emit('READY');
	socket.on('MOVE', function(data) {
		var direction = data.direction,
			speed = data.speed,
			x = data.x,
			y = data.y;

		console.log(JSON.stringify(data), direction, speed, x, y);
		// send message to robot here

	})
});
