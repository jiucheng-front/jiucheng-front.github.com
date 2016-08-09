/**
 * Created by Administrator on 2016/6/2.
 */
//自适应的JS控制屏幕宽度
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
window.onload=function(){
    (function(){
        document.onscroll=function(){
            var elem=document.getElementById("header");
            var sum=parseFloat(getComputedStyle(elem).height);
            var willHeight=parseFloat(document.body.scrollTop);
            if(willHeight>sum){
                elem.style.position="fixed";
            }else{
                elem.style.position="relative";
            }
        }
    })();
};