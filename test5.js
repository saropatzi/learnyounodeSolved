var fs =require('fs');
var path = require('path');

/*if (process && typeof process!='undefined' && typeof process.argv !='undefined' && process.argv[2] && process.argv[3]) {
    dirPath = process.argv[2];
    extension = process.argv[3];
}*/

dirPath = process.argv[2];
extension = process.argv[3];
/*
console.log(process.argv[1]);
console.log(dirPath);
console.log(extension);*/

fs.readdir(dirPath, function(err, list){
    /*console.log('lista',list);                         */
     list.forEach(function(item){
      /*   console.log('cosi',item,path.extname(item));*/

        if (path.extname(item)=='.'+extension){
            console.log(item);
        }
     })
});
