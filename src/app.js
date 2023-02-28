const express = require("express");
const app = express();
const path = require("path");


app.set("vierws",path.resolve(__dirname,"./vierws"));
app.use(express.static(path.resolve(__dirname,"../public")));

app.listen(port,console.log("Servidor ok"));

const port = process.env.PORT ||3020;

// ruta
app.get("/",(req,res)=>{
    res.sendfile(path.join(__dirname,"./vierws/index.html"));
})


app.get("/",(req,res)=>{
    res.sendfile(path.join(__dirname,"./vierws/register.html"));
})
app.get("/",(req,res)=>{
    res.sendfile(path.join(__dirname,"./vierws/login.html"));
})
