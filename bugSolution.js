const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  const jsonData = { message: 'Hello from Node.js!' };
  response.writeHead(200);
  response.end(JSON.stringify(jsonData));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});