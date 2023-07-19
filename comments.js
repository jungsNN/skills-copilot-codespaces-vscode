// Create web server
var http = require("http");
var port = 8080;
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    var member = skillsMember();
    response.write("<h1>" + member.name + "</h1>");
    response.write("<p>Age: " + member.age + "</p>");
    response.write("<ul>");
    for (var i = 0; i < member.skills.length; i++) {
        response.write("<li>" + member.skills[i] + "</li>");
    }
    response.write("</ul>");
    response.end();
}).listen(port);
console.log("Server listening on: http://localhost:%s", port);
// Run the code and test it in the browser.
