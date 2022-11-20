const http = require("http");
const fs = require("fs");
var port = process.argv.slice(2)
port = parseInt(String(port).slice(7))
console.log(port);

let homeContent ="";
let projectContent = "";
let registrationContent = "";

fs.readFile("Home.html", (err, home)=> {
    if (err) {
        throw err;
    }
    homeContent = home;
});

fs.readFile("Project.html", (err, project) => {
    if (err) {
        throw err;
    }
    projectContent = project;
});

fs.readFile("Registration.html", (err, registration) => {
    if (err) {
        throw err;
    }
    registrationContent = registration;
});

http
.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, {"Content-Type": "text/html"});
    switch (url) {
        case "/Project":
            response.write(projectContent);
            response.end();
            break;
        case "/Registration":
            response.write(registrationContent);
            response.end();
            break;
    }
})
.listen(port);