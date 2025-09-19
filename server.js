const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

app.get("/",(req, res)=>{
    res.render("index.ejs",{greet:"Good Morning"});
})

io.on("connection",(socket)=>{
    console.log("a user connected", socket.id);
    socket.on("chat",(msg)=>{
        console.log("msg received->", msg);
    });
    socket.emit("chat", "thik hai badhiya");

});
server.listen(3000,()=>{
    console.log("server is running on port 3000");
})