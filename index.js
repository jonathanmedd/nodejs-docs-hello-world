const appInsights = require('applicationinsights');
appInsights.setup('ee19390a-512f-420c-8328-e03b3d2405ac').start();

const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!\n Hello There!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
