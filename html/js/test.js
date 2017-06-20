var object={
  a:10,
  b:20,
  add:()=>{
    // ES6箭頭函數內的this指向了：window而不是期望的值
    // console.log(this.a+this.b);
  }
}
object.add();

// test
var div=document.getElementById("div");
div.addEventListener("click",change);
function change(){
  console.log(this);
}
function clickMe(){
  console.log("what are you doing now ?");
}

var p=document.createElement("p");
p.innerHTML="你弄个啥子？";
div.appendChild(p);
