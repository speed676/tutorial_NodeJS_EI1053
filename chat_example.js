net=require('net');
var sockets=[];
var sockserver=net.createServer(function(socket){
        socket.write("wellcome to the chat!\n");
        sockets.push(socket);
        socket.on('data',function(data){
                  if (data.toString().trim()==="quit"){
                      socket.end("\tBYE\n");
                  }
                  else{
                    for(var i=0;i<sockets.length;i++){
                      sockets[i].write("\t"+data.toString().toUpperCase());
                    }
                  }
        });
    });

sockserver.listen(8002);

