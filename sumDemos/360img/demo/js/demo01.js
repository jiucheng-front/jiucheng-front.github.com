/**
 * Created by Administrator on 2016/11/29.
 */


//必须在服务器上才能看到效果！
window.onload=function(){
    getTitleHeight();
    loadingAllImg();
}
//让全景图刚好撑满屏幕
var canvasHeight;
function getTitleHeight(){
    var title=document.getElementById('title');
    var titleHeight=parseFloat(getComputedStyle(title).height);
    var maxHeight=window.innerHeight;
    canvasHeight=parseFloat(maxHeight-titleHeight)+'px';
}
//全景图参数配置函数
function loadingAllImg(){
    var div = document.getElementById('container');
    var PSV = new PhotoSphereViewer({
        // 全景图的完整路径
        panorama: 'images/360img03.jpg',

        // 放全景图的元素
        container: div,

        // Deactivate the animation
        time_anim: false,

        // Display the navigation bar
        navbar: true,

        // Resize the panorama
        size: {
            width: '100%',
            height: canvasHeight
        }
    });
}