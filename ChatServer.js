/**
 * Created by ansh on 4/14/2016.
 */

var net= require('net');
var total_socket=[];
var server= net.createServer();
server.on('connection',function(socket){
   console.log('connection esatblished from '+ socket.remoteAddress);
    socket.setEncoding('utf8');
    total_socket.push(socket);
    socket.on('data',function(data){


        console.log(data);
            var client = total_socket.length;
            for (var i = 0; i < client; i++)
            {
                if(total_socket[i]==socket)
                    continue;
                total_socket[i].write(data);
            }


    });

    socket.on('error',function(){

        console.log('something went wrong');
    });

    socket.on('end',function(){

        total_socket.splice(total_socket.indexOf(socket),1);
        var client = total_socket.length;
        var who_is_disconnected=socket.remoteAddress;
        for (var i = 0; i < client; i++) {
            if(total_socket[i]==socket)
            continue;
            total_socket[i].write(who_is_disconnected + "disconnected");
        }

    });


});

server.listen(8111,function(){

    console.log("server started listening");
})