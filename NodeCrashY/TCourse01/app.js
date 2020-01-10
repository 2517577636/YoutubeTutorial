const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // if(req.url == '/'){
    //     fs.readFile(path.join(__dirname, '/public', 'index.html'), 'utf8', (err,data)=>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(data);
    //     })
    // }
    // if(req.url == '/about'){
    //     fs.readFile(path.join(__dirname, '/public', 'about.html'), 'utf8', (err,data)=>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(data);
    //     })
    // }
    // if(req.url == '/api/users'){
    //     const users = [
    //         {name: 'Bob Smith', age: 40},
    //         {name: 'John Doe', age: 30}
    //     ];

    //     res.writeHead(200, {"Content-Type": "application/json"});
    //     res.end(JSON.stringify(users));
    // }

    // Build file path
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    );

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = "text/html";

    // Check ext and set content type
    switch(extname){
        case '.js': 
            contentType = "text/javascript";
            break;
        case '.css':
            contentType = "text/css";
            break;
        case '.html':
            contentType = "text/html";
            break;
        case '.jpg':
            contentType = "iamge/jpeg";
            break;
        case '.json':
            contentType = "application/json";
            break;
    }

    // Read File
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if(err){
            if(err.code = 'ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname, "public", "404.html"), "utf8", (err, data)=>{
                    if(err) throw err;
                    res.writeHead(200, {"Content-Type": contentType});
                    res.end(data);
                });
            }else{
                // Some server error
                res.writeHead(500);
                res.end("Server Error:" + error.code);
            }
        }else{
            fs.readFile(filePath, 'utf8', (err, data) => {
                res.writeHead(200, {"Content-Type": contentType});
                res.end(data);
            })
        }
    })


});

const PORT = process.env.PORT || 5000; 

server.listen(PORT, (err)=> {
    if(err) throw err;
    console.log(`Server running... and the Port is ${PORT}`);
})

