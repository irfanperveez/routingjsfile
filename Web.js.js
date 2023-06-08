const http = require("http")
const port = 7000
const server = http.createServer(function(req,res){
    res.write("Hello Node My name is Irfan Pervez")
    res.write("I belongs from AJK")
    res.end()
})

server.listen(port, function(error)
{
    if (error) {
        console.log("Something went wrong", error)
    } else {
        console.log(" Server is listening on port" + port)
    }
})