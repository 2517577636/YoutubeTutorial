const express = require("express");
const dotenv = require("dotenv");

// Create a server
const app = express();

app.config();

const port = process.env.port || 8000;

// 
app.listen(port, () => {
    console.log(`Server running at ${port}`);
    
})
