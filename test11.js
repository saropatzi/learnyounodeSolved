var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    var content = '';
    var fileReadStream = fs.createReadStream(process.argv[3]);
    fileReadStream.on('data',function(chunk){
       content+=chunk;
    }).setEncoding('utf8');

    fileReadStream.on('end',function(){
       res.end(content);
    });

});

server.listen(process.argv[2]);