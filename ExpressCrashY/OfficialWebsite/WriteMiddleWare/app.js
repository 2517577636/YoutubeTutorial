const express = require('express');

// create a server
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

let myLogger = function(req, res, next){
    console.log("LOGGED");
    next();
}


app.get('/', (req,res)=>{
    res.send("Hello world!");
})

app.use(myLogger);

// listener
app.listen(PORT, ()=>{
    console.log(`The server is running at port ${PORT}`);
})