var application_root=__dirname,
    express = require("express"),
    path = require("path")

var app = express();

app.use(express.static(path.join(application_root,"public")));

app.get('/hola',function(req,res){res.send("Hola mundo!");});

app.get('/index',function(req,res){
        res.sendFile("public/index.html",{root:application_root});
        });

app.listen(8000);
