/**
 * Created by Administrator on 2016/10/14.
 * 防止$符号冲突的解决方式：封装匿名函数自调
 *
 */


(function($){
    $.fn.changeColor2=function(colorStr){
        this.css("color",colorStr);
        return this;
    }
})(jQuery);