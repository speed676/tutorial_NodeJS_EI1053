var application_root = __dirname,
    express = require("express"),
    path = require("path")

var app = express();

app.use(express.static(path.join(application_root,"public")));

var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var backend = require("fs");

app.get('/hello',function(req,res){res.send("Hola Mundo!");});

app.get('/index',function(req,res){
        res.sendFile("public/index.html",{root:application_root});
        });

app.get('/public/:fname',function(req,res){
        console.log(req.params.fname);
        res.sendFile(req.params.fname,{root:application_root});
        });

app.post('/persona',function(req,res){
        console.log(req.body);
        backend.appendFileSync("./data/personas.json",JSON.stringify(req.body)+"\n");
        res.send({result:"ok"});
        });

app.listen(8000);

