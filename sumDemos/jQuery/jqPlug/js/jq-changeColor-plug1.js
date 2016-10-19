/**
 * Created by Administrator on 2016/10/14.
 */


//1、一个改变文本颜色的jq插件
$.fn.changeColor1=function(colorStr){
    this.css("color",colorStr);
//    2、下面这句会让该插件可以继续沿用JQ的其他API
    //$(".one").changeColor("red").addClass("SUM");
    return this;
};