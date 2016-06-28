/**
 * Created by Administrator on 2016/6/28.
 */
window.onload=function(){
    (function(){
        var moveItem=document.getElementById("moveItem");
        var step=0.9;
        var a=0;
        setInterval(function(){
            a=(a-0.9).toFixed(1);//减到第七次-6.30000000010时候停住
            moveItem.style.top=a+"rem";
            if(a==-6.3){
                a=0;
                moveItem.style.top=a+"rem";
            }
        },3000);
    })()
};
