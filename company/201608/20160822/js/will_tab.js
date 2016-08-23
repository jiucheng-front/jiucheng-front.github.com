/**
 * Created by Administrator on 2016/8/22.
 */
window.onload=function(){
  var sum=true;
    var fourBtn=document.getElementsByClassName("four_bigbtn")[0];
    var the_item=document.getElementsByClassName("will_showmsg")[0];
    function will_showitem(){
        if(sum){
            the_item.className="will_showmsg"+" will_showitem";
            sum=false;
        }else{
            the_item.className="will_showmsg";
            sum=true;
        }
    }
    fourBtn.onclick=will_showitem;
};