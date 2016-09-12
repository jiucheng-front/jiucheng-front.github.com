/**
 * Created by Administrator on 2016/9/12.
 */
var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("Hello express");
});
var server=app.listen(8080,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log("DEMO访问地址",host,port);
});