console.log("Campus");
var isNotAjax=true;
function langApp2Web_camerartn(imgUrl) {
    $("img[data-src='imgSrc']").attr('src', imgUrl).removeAttr("data-src").on("load",function(){
        loadingSrc=imgUrl;
        console.log(loadingSrc);
    });
 }


 $(".upload_btn").click(function(event){
    event.stopPropagation();
    event.preventDefault();
    // 创建一个img append upload-inner
    var $loadimg="<img data-src='imgSrc' src='' alt=''>";
    $(".img_mask").empty().append($loadimg);
    // 下面2行是客户端调用，自动返回的src，这里模拟，正事环境需要去掉 ---------------------
    if(isNotAjax){
        var imgUrl="/html/web/Campuslive/images/test01.jpg";
        langApp2Web_camerartn(imgUrl);
    }
    //调用客户端的方法，并返回img的URL
    // if(isiOS==true){
    //       window.webkit.messageHandlers.langWeb2App_camera.postMessage({body:'{"needupload":"1","cropImg":"0"}'});
    //    }else{
    //        javascriptinterface.langWeb2App_camera("1","0");
    // }
});


// 選擇學校
$("#schoolName").focus(function(e){
    e.preventDefault();
    e.stopPropagation();
    document.activeElement.blur();document.activeElement.blur();
    $("#schoolBg").show();
    $("#mask").show();
    canSelected();
});
$("#changeSchool").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $("#schoolBg").show();
    $("#mask").show();
    canSelected();
});
$("#schoolName").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $("#schoolBg").show();
    $("#mask").show();
    canSelected();
});


$("#mask").click(function(){
    $("#schoolBg").hide();
    $(this).hide();
});




function canSelected(){
    $(".schoolName").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var text=$(this).text();
        $(this).addClass("on").siblings().removeClass("on");
        // console.log(text);
        $("#schoolName").val(text);
        $("#schoolBg").hide();
        $("#mask").hide();
    });
}
