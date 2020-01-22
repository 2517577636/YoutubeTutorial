const qs = require('querystring');
const url = require('url');
const http = require('http');

http.createServer((req, res) => {
    // parse the same as decode 
    let myUrl = new URL(req.url);
    // let resultParse = qs.parse(myUrl.search);

    // console.log(resultParse);
    console.log(myUrl);
    
    
    res.write("welcome to the node tutorial!");
    // res.write(`${resultParse}`);

    // parse
    // res.write(`req.parse: ${resultParse}`);

    // stringfy the same as encode 

    res.end();
}).listen(3000, ()=> {
    console.log("Server is running at port 3000");
})