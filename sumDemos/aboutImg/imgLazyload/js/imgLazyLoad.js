/**
 * Created by Administrator on 2016/11/28.
 */
!function(){
    var imgs = document.getElementsByTagName("img");
    var num = imgs.length;
    var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
    lazyload(); //页面载入完毕加载可是区域内的图片
    window.onscroll = lazyload;
    function lazyload() { //监听页面滚动事件
        var seeHeight = document.documentElement.clientHeight; //可见区域高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
        // var scrollTop =document.body.scrollTop; //滚动条距离顶部高度
        for (var i = n; i < num; i++) {
            if (imgs[i].offsetTop < seeHeight + scrollTop) {
                if (imgs[i].getAttribute("src") == "") {
                    imgs[i].src = imgs[i].getAttribute("data-src");
                    // console.log(imgs[i].offsetTop);
                    // console.log(seeHeight);
                    // console.log(scrollTop);
                }
                n = i + 1;
            }
        }
    }
}();