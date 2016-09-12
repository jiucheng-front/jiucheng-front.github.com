/**
 * Created by Administrator on 2016/9/12.
 */
window.onload=function(){
   var fixed_btn=document.getElementById("js-fixed");
   var show_fixed=document.getElementById("js-item");
   //var show_fixed=document.getElementsByClassName("fixed-big")[0];
    fixed_btn.onmouseover=will_block;
    fixed_btn.onmouseout=will_none;
    function will_block(){
        //show_fixed.className="fixed-big"+" will-show";
        show_fixed.style.display="block";
    }
    function will_none(){
        //show_fixed.className="fixed-big";
        show_fixed.style.display="none";
    }
};