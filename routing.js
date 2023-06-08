const express = require('express');
const app = express();
app.get("/", function(req, res){
    res.send("This is Home Page")
});
app.get("/name", function(req, res){
    res.send("My name is Irfan")
});
app.get("/Work", function(req, res){
    res.send("I am working in Leed Software")
});
app.listen(7000,()=> { console.log("Listening to the port 7000")
});


