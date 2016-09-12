/**
 * Created by Administrator on 2016/9/8.
 */
var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>about Nodejs</h1>");
    res.end("<h1>Hello shi</h1>");
}).listen(3000);
console.log("Server running at http://127.0.0.1:3000/");