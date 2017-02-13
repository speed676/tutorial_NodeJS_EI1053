net=require('net');

var sockserver=net.createServer(function(socket){
        socket.write("hello world\n");
        socket.on('data',function(data){
                   if (data.toString().trim()==="quit"){
                        socket.end("\tBYE\n");
                   }
                   else {
                        socket.write("\t"+data.toString().toUpperCase());
                   }
        });
});

sockserver.listen(8001);

