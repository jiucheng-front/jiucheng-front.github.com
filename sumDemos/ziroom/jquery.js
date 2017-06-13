// time:2017.06.13
// author:WckY

// 自定义弹窗打开
function lay(){
    $(document).on("touchstart",".footFix",function(){
        $(".lay").show();
        $("body,html").addClass("scroll");
        $('.lay').bind("touchmove",function(e){
    　　　　　　e.preventDefault();
    　　 });
    })
    //我知道啦关闭
    $(document).on("touchstart",".layerKnow",function(){
        $(".lay").hide();
        $("body,html").removeClass("scroll");
    })
    //关闭
    $(document).on("touchstart",".lay",function(e){
        var _con = $('.layer');   // 设置目标区域
        if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
            $(".lay").hide();
            $("body,html").removeClass("scroll");
        }
    });
}