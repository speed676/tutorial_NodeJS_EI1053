var fs = require('fs');

var writestream = fs.createWriteStream('./tmp.txt');
writestream.on('finish',function(){
               console.log('grabado!');
               });
writestream.write(JSON.stringify(process.env));
writestream.end();

var readstream = fs.createReadStream("./tmp.txt");
readstream
         .on('data',function(chunk){
             console.log(chunk.toString());
          });

