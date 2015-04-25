var net = require('net');
var server = net.createServer(function(socket){
     var actualDate = new Date();
    var year = actualDate.getFullYear();
    var monthRaw = parseInt(actualDate.getMonth())+1;

    var month = (monthRaw>8) ? monthRaw.toString() : '0'+monthRaw;
    var day = actualDate.getDate();
    var hour = actualDate.getHours();
    var minuteRaw = actualDate.getMinutes();
    var minute = (parseInt(minuteRaw)>9) ? minuteRaw : '0'+minuteRaw;
    var fullTime= year+'-'+month+'-'+day+' '+hour+':'+minute+'\n';
    socket.end(fullTime);
});

server.listen(process.argv[2]);