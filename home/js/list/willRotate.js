

/**
 * Created by jiucheng on 2016/5/20.
*
*
 */
 $(function(){
    (function(){
       var index=0,xdeg=0,onoff=0,ydeg=0,wh=document.documentElement.clientWidth,xs= 0,ys=0;
         // 1、默认样式
        (function styleFour(){
            $("body,html").css({"overflow-x":"hidden","overflow-y":"hidden"});//隐藏左右滚动条
             $(".container").each(function(i){
              //console.log(i);//0-35
                  var x=1000;
                  var y=600;
                  var z=300;
                  $(this).css({
                   "transform":"translateX("+(500-Math.random()*x)+"px) translateY("+(300-Math.random()*y)+"px) translateZ("+(100-Math.random()*z)+"px)",
                   "-webkit-transform":"translateX("+(500-Math.random()*x)+"px) translateY("+(300-Math.random()*y)+"px) translateZ("+(100-Math.random()*z)+"px)",
                   "-webkit-transition":"transform "+Math.random()*3+"s",
                   "transition":"transform "+Math.random()*3+"s"
                  })
             })
        })();
       //2、事件绑定
          $(".one").click(function(){
             styleOne();
          });
          $(".two").click(function(){
             styleTwo();
          });
          $(".three").click(function(){
             styleThree();
          });
          $(".four").click(function(){
             styleFour();
          });
        //2-1、块状
          function styleOne(){
             $(".container").each(function(i){
                 var d=-150;
                 var x=i%3;
                 var y=parseInt(i/3)%3;
                 var z=parseInt(i/9);
                 $(this).css({
                  "-webkit-transform":"translateX("+(x*100-100)+"px) translateY("+(y*90-90)+"px) translateZ("+(d+z*80)+"px)",
                  "transform":"translateX("+(x*100-100)+"px) translateY("+(y*90-90)+"px) translateZ("+(d+z*80)+"px)"
                 });
             })
          }
           //2-2螺旋样式
          function styleTwo(){
             $(".container").each(function(i){
                 $(this).css({
                  "-webkit-transform":"rotateY("+i*16+"deg) translateY("+(i*5-100)+"px) translateZ(240px)",
                  "transform":"rotateY("+i*16+"deg) translateY("+(i*5-100)+"px) translateZ(240px)"
                 });
             })
          }
          //2-3球状
          function styleThree(){
             $(".container").each(function(i){
                 if(i<8){
                  $(this).css({
                      "-webkit-transform":"rotateX("+i*360/8+"deg) rotateY(0deg) translateZ(200px)",
                      "transform":"rotateX("+i*360/8+"deg) rotateY(0deg) translateZ(200px)"
                  })
                 }else if(i<15){
                  $(this).css({
                      "-webkit-transform":"rotateX("+i*360/7+"deg) rotateY(30deg) translateZ(200px)",
                      "transform":"rotateX("+i*360/7+"deg) rotateY(30deg) translateZ(200px)"
                  })
                 }else if(i<21){
                  $(this).css({
                      "-webkit-transform":"rotateX("+i*60+"deg) rotateY(60deg) translateZ(200px)",
                      "transform":"rotateX("+i*60+"deg) rotateY(60deg) translateZ(200px)"
                  })
                 }else if(i<28){
                  $(this).css({
                      "-webkit-transform":"rotateX("+i*360/7+"deg) rotateY(-30deg) translateZ(200px)",
                      "transform":"rotateX("+i*360/7+"deg) rotateY(-30deg) translateZ(200px)"
                  })
                 }else if(i<34){
                  $(this).css({
                      "-webkit-transform":"rotateX("+i*60+"deg) rotateY(-60deg) translateZ(200px)",
                      "transform":"rotateX("+i*60+"deg) rotateY(-60deg) translateZ(200px)"
                  })
                 }else if(i==34){
                  $(this).css({
                      "-webkit-transform":"rotateX(0deg) rotateY(-90deg) translateZ(200px)",
                      "transform":"rotateX(0deg) rotateY(-90deg) translateZ(200px)"
                  })
                 }else if(i==35){
                  $(this).css({
                      "-webkit-transform":"rotateX(0deg) rotateY(90deg) translateZ(200px)",
                      "transform":"rotateX(0deg) rotateY(90deg) translateZ(200px)"
                  })
                 }
             })
          }
         //2-4竹筒
          function styleFour(){
                 $(".container").each(function(i){
                  $(this).css({
                   "-webkit-transform":"rotateY("+i*36+"deg) translateY("+(i*10-100)+"px) translateZ(240px)",
                   "transform":"rotateY("+i*36+"deg) translateY("+(i*10-200)+"px) translateZ(240px)"
                  });
              })
          }
    //  3、点击左右拖动旋转
     $(document).mousedown(function(e){
          var x1 = e.clientX;
          var y1 = e.clientY;
          $(this).bind("mousemove",function(e){
              xs = e.clientX - x1;
              ys = e.clientY - y1;
              x1 = e.clientX;
              y1 = e.clientY;
              xdeg += xs*0.3;
              ydeg += ys*0.3;
              $(".main").css({
               transform:"perspective(900px) rotateX("+-ydeg+"deg) rotateY("+xdeg+"deg)"
              })
          });
         return false;
     });
     $(document).mouseup(function(){
        $(this).unbind("mousemove");
     });
    })();
     //4、页面跳转
     $(".container").click(function(){
        var url=$(this).text();
         if(url!=="NULL"){
            window.open("DEMOLIST/"+url,"target" );//新窗口打开当前点击的网页
         }
     });
    //5、禁止右键
     $(document).bind("contextmenu",function(e){
         return false;
     });
 });