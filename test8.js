var http = require('http');


http.get(process.argv[2], function(res){
    var coso = '';
    var total=0;
    res.on("data",function(data){
        coso+=data;
        total = data.length;
    }).setEncoding('utf8');
    res.on("end",function(){
        /*var coso1 = coso.toString();
        var coso2 = coso1.replace(",","");*/

        console.log(coso2.length);
        console.log(coso2);
    });
});