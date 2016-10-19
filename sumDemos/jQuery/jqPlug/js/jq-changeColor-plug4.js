/**
 * Created by Administrator on 2016/10/14.
 */



(function($){
    $.fn.changeColor4=function(option){
        this.css("color",option.colorStr).css("fontSize",option.fontSize+"px");
        return this;
    }
})(jQuery);