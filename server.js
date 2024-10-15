const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<h1>Hello World</h1>');
    res.end();
  }
});

server.listen(3000);

console.log('Server is listenining on port 3000...');
