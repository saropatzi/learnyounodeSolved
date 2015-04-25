var http = require('http');
var url = require('url');



var server = http.createServer(function(req,res){
    var parsedUrl = url.parse(req.url,true);


    if (parsedUrl.pathname==='/api/parsetime'){
       var dataQuery = parsedUrl.query.iso;
       var dataObj = new Date(dataQuery);
       var dataJson = {
           "hour": dataObj.getHours(),
           "minute": dataObj.getMinutes(),
           "second": dataObj.getSeconds()
       };
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(dataJson));
    } else if (parsedUrl.pathname==='/api/unixtime') {
        var data2 = new Date(parsedUrl.query.iso).getTime();
        var dataJson2 = {"unixtime":data2};
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(dataJson2));
    } else {
        res.writeHead(404);
        res.end();
    }
});


server.listen(process.argv[2]);
