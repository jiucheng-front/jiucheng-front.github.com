/**
 * Created by Administrator on 2016/10/14.
 * //几种屏蔽查看源码的方式
 */
var elemFailed={
    //屏蔽查看源码
    failedConsole:function(){
        document.onkeydown=function(){
            var e=window.event||arguments[0];
            if(e.keyCode==123){
                alert("小样你想干嘛？");
                return false;
            }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
                alert("还是不给你看。。");
                return false;
            }else if((e.ctrlKey)&&(e.keyCode==85)){
                alert("还是算了吧……^_^");
                return false;
            }
        };
        document.oncontextmenu=function(){
            alert("小样不给你看");
            return false;
        };
    }
};
elemFailed.failedConsole();