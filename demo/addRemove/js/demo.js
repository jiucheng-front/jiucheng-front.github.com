window.onload=function(){
        //1、ClassName切换,是否含有指定class
         function hasClass(elem,cls){
             return elem.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
         }
         // 2、没有就追加指定class
         function addClass(elem,cls){
             if(!hasClass(elem,cls)){
                 elem.className+=" "+cls;
             }
         }
         // 3、有就移除指定class
         function removeClass(elem,cls){
             if(hasClass(elem,cls)){
                 var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)');
                 elem.className=elem.className.replace(reg,"");
             }
         }
         // 4、改变body的class样式
         var elem=document.body;
         var addbtn=document.getElementsByClassName('addbtn')[0];
         var removebtn=document.getElementsByClassName('removebtn')[0];
         addbtn.onclick=function(){
            addClass(elem,"bg");
         }
         removebtn.onclick=function(){
            removeClass(elem,"bg");
         }
}