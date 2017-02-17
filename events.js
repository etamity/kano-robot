const EventEmitter = require('events');
class RobotEmitter extends EventEmitter {}
const emitter = new RobotEmitter();

emitter.on('MOVE', function(data) {
	var direction = data.direction,
		duration = data.duration,
		speed = data.speed;

	// send message to robot here

})


module.exports = emitter;