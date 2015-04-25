var printList = require('./test6module');
var path = require('path');

printList(process.argv[2], process.argv[3], function(err,list){
    list.forEach(function(item){
            console.log(item);
    })
});