var fs =require('fs');


fs.readFile(process.argv[2],'utf8', function(err, data){
    var stringBuffer = data.toString();
    var splittedString = stringBuffer.split('\n');
    var nCount= splittedString.length - 1;
    console.log(nCount);
});
