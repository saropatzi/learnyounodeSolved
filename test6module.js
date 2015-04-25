var fs =require('fs');
var path = require('path');


var printList = function(dirPath, extension, callback){
    fs.readdir(dirPath, function(err, list){
        if (err) return callback(err);
        var filtered = [];
        list.forEach(function(item){
           if (path.extname(item)=='.'+extension){
               filtered.push(item);
           }
        });
        return callback(err,filtered);
    });
};


module.exports = printList;