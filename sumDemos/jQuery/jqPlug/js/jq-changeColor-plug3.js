/**
 * Created by Administrator on 2016/10/14.
 */


(function($){
    $.fn.changeColor3=function(colorStr,fontSize){
        this.css("color",colorStr).css("fontSize",fontSize+"px");
        return this;
    }
})(jQuery);