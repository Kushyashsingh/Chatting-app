const express = require("express");
const { Socket } = require("socket.io");
const app = express();
const http = require('http').createServer(app)

app.use(express.static(__dirname + '/public'))

app.get("/",(req,res) =>{
    res.sendFile(__dirname+"/index.html")
})


http.listen(5000,()=>{
    console.log("server is up")
})

//socket

const io = require("socket.io")(http);

io.on('connection',(socket)=>{
    console.log('connected...')
})
