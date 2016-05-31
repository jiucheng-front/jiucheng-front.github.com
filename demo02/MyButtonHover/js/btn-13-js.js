/**
 * Created by Administrator on 2016/5/31.
 */
$(function () {
    $('.btn-13-js').on('mouseenter', function (e) {
        var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        });
    }).on('mouseout', function (e) {
        var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        });
    });
    //console.log($('.btn-13-js'));
});