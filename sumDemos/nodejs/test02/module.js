/**
 * Created by Administrator on 2016/9/8.
 */
var name;
exports.setName=function(thyName){
    name=thyName;
};
exports.sayHello=function(){
    console.log("Hello"+name);
};