const http = require("http");
const server = http.createServer((req, res) => {
   if (req.url == "/"){
    res.end("Hello from the home sides");

   } else if(req.url == "/name")
   { 
    res.end("<h1>My name is irfan</h1>");
   }
   else if (req.url == "/about")
   {
    res.end ("<h1>i am from ajk</h1>");
   } else {
    
    res.end("<h1>404 error pages. page doesn't exist</h1>");
   }
});
server.listen(7000, "127.0.0.1" , () => {
    console.log("listening to the port no 7000");
});