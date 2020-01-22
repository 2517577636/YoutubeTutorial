const http = require('http');

// create a server the instance of Server, the req is an instance of the class IncomingMessage.
// the res is an instance of the class ServerResponse.
http.createServer((req, res) =>{
    // console.log("running!");
   
    // res.write("Hello Node.js!!!");
    res.write(`req.url: ${req.url} \n`); 
    res.write(`req.aborted: ${req.aborted} \n`);
    res.write(`req.headers: ${req.headers} \n`);

    // return the http version
    res.write(`req.httpVersion: ${req.httpVersion} \n`);
    
    // return request method 
    res.write(`req.method: ${req.method} \n`);

    // Return supported methods
    res.write(`https.METHODS: ${http.METHODS} \n`);

    res.write(`req.statusCode: ${req.statusCode} \n`);
    // req.write(`req.complete: ${req.complete}`);
    res.end();
}).listen(3000, ()=>{console.log("Server running...")})

// 
