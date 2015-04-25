var totalNum = 0;

var i =0;
process.argv.forEach(function(item){
    if (i>1) {
         totalNum = totalNum + parseInt(item);
    }
    i++;
});
console.log(totalNum);