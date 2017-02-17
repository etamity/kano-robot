
const port = 8000;

var engine = require('engine.io');
var server = engine.listen(port);

console.log('Socket Started, listening port', port, '...');
server.on('connection', function(socket){
	console.log('Client Connected');
  	socket.send('utf 8 string');
  	socket.on('message', function(data){
  		console.log(data);
  	})

});