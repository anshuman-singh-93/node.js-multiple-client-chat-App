/**
 * Created by ansh on 4/14/2016.
 */

var net= require('net');
var socket= net.connect({port:8111}, function(){

    socket.write("hello form tcp client");
});
socket.on('data',function(data){
    console.log(data.toString());
});
/*
setInterval(function(){
    socket.write('ping pong...');
},1000);
*/
socket.on('close', function(){

    console.log('client closing the connection');
})