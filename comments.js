// Create web server with Node.js
// 1. Create server
// 2. Create route
// 3. Create response
// 4. Listen for requests
// 5. Send response

// 1. Create server
const http = require('http');
const server = http.createServer((req, res) => {
    // 2. Create route
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
    }
    // 3. Create response
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `);
});

// 4. Listen for requests
server.listen(5000);

