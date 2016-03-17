/**
 * Created by jason on 2016/3/16.
 */
$(function(){
    //点击联系我按钮
    $(".login").click(function(){
        $(".big_form").css({
            display:"block"
        })
    });
    $(".close").click(function(){
        $(".big_form").css({
            display:"none"
        })
    });
});
/**
 * Created by jason on 2016/1/8.
 */
$(function(){
    //点击登录按钮
    // $(".login").click(function(){
    //     $(".big_form").css({
    //         display:"block"
    //     })
    // });
    // $(".close").click(function(){
    //     $(".big_form").css({
    //         display:"none"
    //     })
    // });
    $(".list").mouseover(function(){
        $(this).find($(".will_show")).css({
            display:"block"
        })
    });
    $(".list").mouseout(function(){
        $(this).find($(".will_show")).css({
            display:"none"
        })
    });
});
$(function(){
        $(".top1").delay(500).animate({
            width: "100%"
        }, 500);

        $(".top2").delay(1000).animate({
            height:"100%"
        },500);

        $(".top3").delay(1500).animate({
            width:"100%",
            marginLeft:"-100%"
        },500);

        $(".top4").delay(2000).animate({
            height:"100%"
        },500);
});
$(function(){
    $(".top5").delay(500).animate({
        width: "100%",
        marginLeft:"-100%"
    }, 500);

    $(".top6").delay(1000).animate({
        height:"100%"
    },500);

    $(".top7").delay(1500).animate({
        width:"100%"
    },500);

    $(".top8").delay(2000).animate({
        height:"100%"
    },500);
});
