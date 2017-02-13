var fs = require('fs');
var split = require('split');

function getPersonas(callback){
	var readstream = fs.createReadStream("./data/personas.json");
	var lista=[];
        readstream.pipe(split())
    		.on('data',function(line){
                        line=line.trim();
                        if (line.length>0){
			   var data=JSON.parse(line);
             		   lista.push(data);
                        }
    		})
    		.on('end',function(){
             		callback({result: lista});
    		});
};

exports.getPersonas = getPersonas;

