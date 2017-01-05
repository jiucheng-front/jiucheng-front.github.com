/**
 * Created by Administrator on 2016/12/26.
 */
window.onload=function(){
    (function(){
        function getElement(a){
            return document.querySelectorAll(a);
        }
        var btns=getElement('.js_hosbtn');
        var divs=getElement('.hospitial_msg');
        function changeItem(btns,divslist){
            for(var i=0;i<btns.length;i++){
                btns[i].index=i;
                btns[i].onclick=function(){
                    for(var j=0;j<btns.length;j++){
                        btns[j].className='js_hosbtn';
                        divslist[j].style.display='none';
                    }
                    this.className='js_hosbtn'+' selected';
                    divslist[this.index].style.display='block';
                };
            }
        }
        changeItem(btns,divs);
    })()
}