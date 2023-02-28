const express = require("express");
const app = express();
const path = require("path");


app.use(express.static("public"));

const port = process.env.PORT || 3020;

app.listen(port,() => 
console.log ("el Servidor ta on" + port)
);

app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname,"./vierws/home.html"));
})

app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname,"./vierws/register.html"));
})


app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname,"./vierws/login.html"));
})