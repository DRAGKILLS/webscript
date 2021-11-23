const http = require("http")
const rl = require("readline")

const host = "0.0.0.0"
const port = 8000

const server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    let f = require("./HtmlFile.js");
    res.end(new f().f());
});

server.listen(port, host, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});

let line = rl.createInterface({
    input: process.stdin
});

line.on("line", args => {
    if(args.trim() === ""){
        return false;
    }
    if(args === "stop"){
        process.exit(8);
        line.close();
    }
})