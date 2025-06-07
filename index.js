const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, function(err, data) {
        if (err) {
            console.error('Error reading file:', err);
            res.writeHead(404);
            res.write('Internal Server Error');
            res.end();
            return;
        }
        res.write(data);
        res.end();
    });
});

server.listen(port, function(error) {
  if (error) {
    console.error('Error starting server:', error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});