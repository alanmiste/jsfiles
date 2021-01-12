const http = require('http');

const requestListener = function (req, res) { // server callback function - request/response paramiters
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all clients to access 
  res.writeHead(200); //status code for OK
  console.log(Date.now()) // loging in the server not to the browser
  //res.end('Hello, World!');
  console.log(req.url)
  res.end(JSON.stringify({todo1:"hello"}))
}

const server = http.createServer(requestListener);
server.listen(8080); // port range 3000 - 65000