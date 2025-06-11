const http = require('http');


const server = http.createServer((req, res) => {
    res.write("Hello!\nYou're into HTTP!");
    res.end();
});

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});