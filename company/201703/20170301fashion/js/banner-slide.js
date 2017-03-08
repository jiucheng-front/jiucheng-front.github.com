/**
 * Created by Administrator on 2017/3/3.
 */
var banerobj={
    init:function(){
        var _self=this;
        _self.slideMenu();
    },
    slideMenu: function() {
        $(".banner .menu ul").slide({
            type: "menu",
            titCell: '.subNav',
            targetCell: '.subMenu',
            effect: 'slideDown',
            titOnClassName: 'active',
            delayTime:200, triggerTime:100
        });
        $(".banner .menu ul li").each(function(index, element) {
            var left = $(".banner .menu ul li").width() * index;
            $(".banner .menu ul li").eq(index).find(".subMenu").css({
                left: -left + 'px'
            });
            $(this).mouseleave(function(e) {
                e.preventDefault();
                $(this).removeClass("active").find(".subMenu").removeClass("active");
            });
        });
    }
}
$(function(){
    banerobj.init();
});
