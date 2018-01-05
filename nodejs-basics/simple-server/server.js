// create a server to display "hello world" on localhost:8000
// command to run: node server.js

var http = require('http');
// 'http' is a core module of nodejs and bind to variable http
var fs = require('fs');
// 'file system' to access files
//var module1 = require('./module1');
//var module2 = require('./module2');

function onRequest(request, response){
  response.writeHead(200,{'Content-Type': 'text/html'});
  // http 200 = OK : render text as html
  fs.readFile('./index.html', null, function(error, data) {
    if (error) {
        response.writeHead(404);
        response.write('File not found!');
    } else {
        response.write(data);
    }
    response.end();
  });

  //response.write('Hello World');
  //response.write(module1.mod1string);
  //module1.mod1func();
  //response.write(module2.mod2var);
  //module2.mod2func();
  //response.end();
}

http.createServer(onRequest).listen(8000);
