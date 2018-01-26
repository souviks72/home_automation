var express=require('express');
var app=express();
var http=require('http');
var server=http.createServer(app);
var socketIO=require('socket.io');
var io=socketIO(server);
var five=require('johnny-five');
var board=new five.Board();

app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
  res.sendFile(__dirname+'index.html');
});

board.on('ready',function(){
  console.log('board is ready');
  io.on('connection',function(socket){
    console.log('client has joined');

    socket.on('study_on',function(){
      var led = new five.Led(11);
      led.on();
    });

    socket.on('tube_on',function(){
      var led = new five.Led(10);
      led.on();
    });

    socket.on('night_on',function(){
      var led = new five.Led(9);
      led.on();
    });
  });
});

server.listen(3000,function(){
  console.log('server is up on port 3000');
});
