(function(){
  var socket = io.connect(window.location.hostname + ':' + 3000);
  var study=document.getElementById('study');
  var tube=document.getElementById('tube');
  var night=document.getElementById('night');

  socket.on('connect',function(){
    console.log("joined server");
  });

  study.addEventListener('click',function(){
    socket.emit('study_on');
  });
  tube.addEventListener('click',function(){
    socket.emit('tube_on');
  });
  night.addEventListener('click',function(){
    socket.emit('night_on');
  });
}());
