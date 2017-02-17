# Kano Robot Socket Server

Message Structure


```javascript
var messageObject = {
	event:'',
    params: {}
}
```

Communicate between server and client with:
```javascript
var messageObject = {
	event:'MOVE',
    params: {
    	direction: 'forward',
        druation: 5000,
        speed: 300
    }
}
socket.send(messageObject);
```

Event Handling:
```javascript
socket.on('message',function(data){
	var event = data.event,
    var params = data.params;
    EventHandling.emit(data);
});
```
