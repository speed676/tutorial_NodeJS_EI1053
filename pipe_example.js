var fs = require('fs');
var split  = require('split');

var readstream = fs.createReadStream(process.argv[2]);

var lineas=0;
readstream.pipe(split())
                .on('data',function(line){
                    lineas++;
                 })
                .on('end',function(){
                    console.log("tiene "+lineas+" lineas")
                 });

