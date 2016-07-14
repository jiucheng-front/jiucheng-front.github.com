/**
 * Created by Administrator on 2016/7/14.
 */
var btn=document.getElementById("btn");
function addDiv(){
    var arr=[];
    var str=[];
    for(var i=0;i<3;i++){
        var divs=document.createElement("div");
        var imgs=document.createElement("img");
        var parent=document.getElementById("parent");
        arr[i]=divs;
        str[i]=imgs;
        str[i].src="images/top_bottom.jpg";
        arr[i].appendChild(str[i]);
        parent.appendChild(arr[i]);
        console.log(arr,str);
    }
}
btn.onclick=addDiv;