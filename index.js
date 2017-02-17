
const port = 8001;

var engine = require('engine.io');
var emitter = require('./events');
var server = engine.listen(port);


console.log('Socket Started, listening port', port, '...');

server.on('connection', function(socket){
	console.log('Client Connected');
  	socket.send('utf 8 string');
  	socket.on('message', function(data){
  		var event = data.event,
    	 	params = data.params;
  		emitter.emit(event, params);
  	})

});

