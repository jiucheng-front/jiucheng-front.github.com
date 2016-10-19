/**
 * Created by Administrator on 2016/10/19.
 */

(function($){
    $.fn.changeColor5=function(option){
        var defaultSetting={
            colorStr:"green",
            fontSize:18
        };
        var seeting= $.extend(defaultSetting,option);
        this.css("color",seeting.colorStr).css("fontSize",seeting.fontSize+"px");
        return this;
    }
})(jQuery);