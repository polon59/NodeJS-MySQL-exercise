var http = require('http');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();


http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);


function emit(){
    eventEmitter.emit('scream');
}

var myEventHandler = function () {
  console.log('I hear a scream!');
}