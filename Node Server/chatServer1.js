var exp = require('express')();
var fs = require('fs');
var http = require('http').Server(exp);
var io = require('socket.io')(http);

exp.get('/', function(req, res) {


	res.sendFile(__dirname + '/interface/interface1.html');
		
		exp.get('/style1.css', function(req, res){
	
				
				res.sendFile(__dirname + '/interface/style1.css');
	
		});
		
		exp.get('/quickfix.js', function(req, res){
			
		
			res.sendFile(__dirname + '/interface/quickfix.js');
		
		});
	

	
});





io.on('connection', function(socket){
	
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user left');
		
		
	});
	
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
	
	socket.on('user', function(username){
		io.emit('user', username);
	});

	
});


http.listen(8069, function(){
	console.log('listening on 8069');
});