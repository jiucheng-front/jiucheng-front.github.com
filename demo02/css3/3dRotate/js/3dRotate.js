/**
 * Created by Administrator on 2016/5/26.
 */
window.onload=function () {
    var oDiv=document.getElementById('div1');
    var aImg=oDiv.children;
    for(var i=0; i<aImg.length; i++){
        aImg[i].I=rndNum(-5,5);
        if(aImg[i].I==0)aImg[i].I=1;
        aImg[i]._I=aImg[i].I;
        aImg[i].style.width=100+i*20+'px';
        aImg[i].style.margin=-10*i+'px';
    }
    setInterval(function (){
        for(var i=0; i<aImg.length; i++) {
            aImg[i].style.WebkitTransform='rotate('+aImg[i].I+'deg)';
            aImg[i].style.MozTransform='rotate('+aImg[i].I+'deg)';
            aImg[i].style.msTransform='rotate('+aImg[i].I+'deg)';
            aImg[i].I+=aImg[i]._I;
        }
    });
};
function rndNum(m, n){
    n++;
    //var s=parseInt(Math.random()*(n-m)+m);
    //console.log(s);
    //return s;
    return parseInt(Math.random()*(n-m)+m);
}