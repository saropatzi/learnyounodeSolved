var fs =require('fs');

var inputFilePath = process.argv[2];


var bufferedData = fs.readFileSync(inputFilePath);
var stringBuffer = bufferedData.toString();
var splittedString = stringBuffer.split('\n');
var nCount= splittedString.length - 1;
console.log(nCount);