var http = require('http');
var dataArray = [];

var i = 0;
var callbackIndex = 0;
var callbackLength = process.argv.length - 2;



function getter(url,i,callback){
   http.get(url, function(res){
       var dataStream = '';
        res.on('data',function(data){
            dataStream+=data;
        }).setEncoding('utf8');

        res.on('end', function(){
            callback(i,dataStream);
            dataStream='';
        });
   });
}

function printArrayData(data){
    dataArray.forEach(function(item){
        console.log(item);
    })
}

process.argv.forEach(function(item){
    if (i>1){
        getter(item,i, function(i,data){
            dataArray[i]= data;
            callbackIndex++;
            if (callbackIndex==callbackLength){
                printArrayData(dataArray);
            }
        })
    }
    i++;
});