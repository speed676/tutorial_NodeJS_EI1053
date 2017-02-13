process.stdin
        .on('data',function(chunk){
            console.log(chunk);
    		process.stdout.write(chunk.toString().toUpperCase());
        })
        .on('end',function(){
            console.log("bye");
        });

