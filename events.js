const EventEmitter = require('events');
//class RobotEmitter extends EventEmitter {}
const emitter = new EventEmitter(); // new RobotEmitter();

emitter.on('MOVE', function(data) {
	var direction = data.direction,
		speed = data.speed,
		x = data.x,
		y = data.y;

	console.log(direction, speed, x, y);
	// send message to robot here

})


module.exports = emitter;
