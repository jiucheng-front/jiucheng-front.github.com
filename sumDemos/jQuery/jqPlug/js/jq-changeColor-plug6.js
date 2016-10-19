/**
 * Created by Administrator on 2016/10/19.
 */


(function($){
    $.fn.extend({
        changeColor6:function(option){
            var defaultSetting={
                colorStr:"green",
                fontSize:14
            };
            var setting= $.extend(defaultSetting,option);
            this.css("color",setting.colorStr).css("fontSize",setting.fontSize+"px");
            return this;
        }
    });
})(jQuery);