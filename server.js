var http = require('http');
var fs = require('fs');
var path = require('path');

var mimeTypes = {
    '.html': 'text/html',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.css': 'text/css',
    '.js': 'application/javascript',
};

var requestHandler = function (req, res) {
    var routes = {
        '/': './index.html',
        '/index': './index.html',
        '/introduction': './introduction.html',
    };

    var filePath = routes[req.url] || `.${req.url}`;
    var ext = path.extname(filePath).toLowerCase();
    var contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, function (err, content) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading file');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
};

var PORT = 3000;
http.createServer(requestHandler).listen(PORT, function () {
    console.log(`Server is running at http://localhost:${PORT}`);
});
