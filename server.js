var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');

var router = express();

var server = http.createServer(router);
var io = socketio.listen(server);

var clients = [];

router.get('/', function(req, res) {
  res.send('hello world');
});

router.get('/login', function(req, res) {
  res.send('Login');
});

router.use(express.static(path.resolve(__dirname, 'public')));



io.on('connection', function (socket) {
	updateUserList(socket);
	socket.on('identify', onIdentify);
	socket.on('change_location', onChangePosition);
	socket.on('disconnect', function(){
		console.log('remove: ' + this.id);
		clients.splice([this.id], 1);
	});

	socket.on('send_message', function(_mensaje){
		console.log(_mensaje);
		for(var i in clients)
		{
			clients[i].emit('new_message', {id:this.id, name:this.name, message:_mensaje})
		}
	});
});

function updateUserList(_s)
{
	console.log('Conexión: ' + _s.id);
	clients[_s.id] = _s;
}

function onIdentify(_name)
{
	if(_name != null)
		this.name = _name;

	// console.log('new user: ' + this.id);

	var lista = [];

	for(var i in clients)
	{
		clients[i].emit('new_user', {id:this.id, name:this.name})
		lista.push({id:clients[i].id, name:clients[i].name});
	}

	this.emit('list_users', lista);
}

function onChangePosition(_coord)
{
	this.lat = _coord.lat;
	this.lon = _coord.lon;
	// console.log(this.lat);
	io.emit('update_position', _coord);
}

server.listen(4000, "192.168.0.127", function () {
	var addr = server.address();
	console.log("Chat server listening at", addr.address + ":" + addr.port);
});
