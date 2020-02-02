const express = require("express");
const router = require('./router');
// const birds = require('./birds');

// create a server
const app = express();

const PORT = process.env.PORT || 3000;

// load the router module in the app:
app.use("/",router)
// app.use('/birds', birds);

//router handler
// app.get('/', (req, res, next)=>{
//     console.log("the response will be sent by the next funciton ...");
//     next();
// },(req, res)=>{
//     res.send("Hello from B");
// })

// // test app.route()
// app.route("/book")
// .get(function(req, res){
//     res.send('Get a random book')
// })
// .post(function(req,res){
//     res.send("Add a book")
// })

// app.get("/about", (req,res, next)=>{
//     res.end("Hello from the About")
// })

// Note: the function must be at the very bottom of the stack(below all other functions) to
// handle a 404 response.
// 404 Not Found
app.use(function(req, res, next){
    res.status(404).send("Sorry can't find that!");
})

app.listen(PORT, ()=>{
    console.log(`The server is running at port ${PORT}`);
})