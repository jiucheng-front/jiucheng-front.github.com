/**
 * Created by Administrator on 16-3-17.
 */
function randomPos(x,y){
    //让div出现在outer内的随机位置
    var outer=document.querySelector("#outer");
    //计算div最大的横坐标、纵坐标
    var outerStyle=getComputedStyle(outer);
    var maxTop=parseInt(outerStyle.height)-50;
    //文档显示区的高
    var maxLeft=parseInt(outerStyle.width)-50;
    do{
        //随机计算div的横坐标、纵坐标
        var rTop=parseInt(Math.random()*(maxTop+1));
        var rLeft=parseInt(Math.random()*(maxLeft+1));
        if(arguments.length!=0){
            //判断rTop和rLeft是否包含传入的x,y
            if(!((x>=rLeft&&x<=rLeft+50)&&(y>=rTop&&y<=rTop+50))){break;}
        }
    }while(arguments.length!=0);

    var div=document.querySelector("#outer div");
    div.style.top=rTop+"px";
    div.style.left=rLeft+"px";
}
//钟表
window.$=function(selector){
    return document.querySelectorAll(selector);
};
//动画每一步执行的任务
function calc(){
    //计算当前时间的时针，分针，秒针，分别转的角度
    var now=new Date();
    var s=now.getSeconds();
    var m=now.getMinutes();
    var h=now.getHours();
    h>12&&(h-=12);
    //角度：（当前经过的时间/转一圈需要的时间）*360度
    //60s   3600s   43200s
    //6:22:45
    var rh=(h*60*60+m*60+s)/(3600*12)*360;
    var rm=(m*60+s)/3600*360;
    var rs=s/60*360;
    /*找到三个指针对象
     分别将角度设置到指针对象的style属性的transform
     值为："rotate("+rx+"deg)"
     */
    $("#h")[0].style.transform="rotate("+rh+"deg)";
    $("#m")[0].style.transform="rotate("+rm+"deg)";
    $("#s")[0].style.transform="rotate("+rs+"deg)";
    setTimeout(calc,1000);//1秒动一下1s=1000ms
}
window.onload=function(){
    calc();
    randomPos();
    document.querySelector("#outer div").onmouseover=function(){
        //this-->div
        //调用randomPos()，传入鼠标当前的x,y坐标
        var e=window.event||arguments[0];
        var x=e.offsetx;
        var y=e.offsety;
        randomPos(x,y);
    }
};
