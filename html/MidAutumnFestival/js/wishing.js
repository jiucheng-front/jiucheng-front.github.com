!function(){
    // 1、通用綁定事件
    function bind(elem,eventType,callback){
        if(elem.addEventListener){
            elem.addEventListener(eventType,callback,false);
        }else{
            elem.attachEvent("on"+eventType,function(){
                callback.call(elem);
            });
        }
    }

    // 限制1秒內多次許願
    function  throttle(func,wait){
        var timeout;
        return function(){
            var context=this;
            var args=arguments;
            if(!timeout){
                timeout=setTimeout(function(){
                    timeout=null;
                    func.apply(context,args);
                },wait);
            }
        }
    }
    // 4、彈框許願
    var dialogMask=document.getElementById("dialogMask");
    var wishingBtns=document.getElementById("wishingBtns");
    // 4.1 動態變化的禮物盒子
    var giftLists=document.getElementById("giftLists");
    
    var giftCout=0;
    // 4、顯示彈框（內部判斷重新顯示）
    function showDialog(){
        var e=window.event||arguments[0];
        var target=e.srcElement||e.target;
        if(target.id=="wishingOne"){
            if(giftCout==0){
                var gift_str="";
                gift_str+='<div class="wishing_nocount">';
                gift_str+='<p class="purple">抽獎次數不足，</p>';
                gift_str+='<p class="purple">快去給主播的月桂樹搗亂吧！</p>';
                gift_str+='</div>';
                gift_str+='<div id="agreeNocount"></div>';
                gift_str+='<p class="purple">剩餘破壞值：0</p>';
                giftLists.innerHTML=gift_str;
                dialogMask.style.display="block";
            }else{
                var gift_str="";
                gift_str+='<div class="one_gift">';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask02.png" alt="">';
                gift_str+='<p class="purple">阳光X999</p>';
                gift_str+='</div><ul class="mask_btns"><li id="maskOne"></li><li id="maskTen"></li></ul>';
                gift_str+='<p class="purple">剩餘破壞值：999999</p>';
                giftLists.innerHTML=gift_str;
                dialogMask.style.display="block";
            }
            console.log(1);
        }else if(target.id=="wishingTen"){
            if(giftCout==0){
                var gift_str="";
                gift_str+='<div class="wishing_nocount">';
                gift_str+='<p class="purple">抽獎次數不足，</p>';
                gift_str+='<p class="purple">快去給主播的月桂樹搗亂吧！</p>';
                gift_str+='</div>';
                gift_str+='<div id="agreeNocount"></div>';
                gift_str+='<p class="purple">剩餘破壞值：0</p>';
                giftLists.innerHTML=gift_str;
                dialogMask.style.display="block";
            }else{
                var gift_str="";
                gift_str+='<div class="ten_gifts">';
                gift_str+='<ul><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask07.png" alt="">';
                gift_str+='<p class="purple">阳光x999</p>';
                gift_str+='</li><li class="additional">';
                gift_str+='<h4>額外獲得</h4>';
                gift_str+='<img src="/html/MidAutumnFestival/images/wishing_mask08.png" alt="">';
                gift_str+='<p class="purple">阳光x999999</p>';
                gift_str+='</li></ul></div>';
                gift_str+='<ul class="mask_btns">';
                gift_str+='<li id="maskOne"></li>';
                gift_str+='<li id="maskTen"></li>';
                gift_str+='</ul>';
                gift_str+='<p class="purple">剩餘破壞值：999999</p>';
                giftLists.innerHTML=gift_str;
                dialogMask.style.display="block";
            }
            console.log(10);
        }else if(target.id=="superOne"){

        }else if(target.id=="superTen"){

        }
        // 
        
    }
    bind(wishingBtns,"click",throttle(showDialog,1000));
    // 5、隱藏彈框
    function hideDialog(){
        var e=window.event||arguments[0];
        var target=e.srcElement||e.target;
        // 关闭和没有次数的确认按钮
        if(target.id=="closeMask"||target.id=="agreeNocount"){
            dialogMask.style.display="none";
        }
    }
    bind(dialogMask,"click",hideDialog);
}()