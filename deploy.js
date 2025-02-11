var http =require("http")
var fs = require("fs")
var server = http.createServer((req,res)=>{
    fs.readFile("index.json","utf-8",(err,data)=>{
        if(err){
            res.write("You got error")
            res.end()
        }
        res.end(data)
    })

})
server.listen(3005,()=>{
    console.log("Server is running")
})