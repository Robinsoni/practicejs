var http = require('http');
require('child_process').fork('async.js');
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    console.log('hellow')
    response.end();
}
 //change the path depending on where the file is.

http.createServer(onRequest).listen(8000);