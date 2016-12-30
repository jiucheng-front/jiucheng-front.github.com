(function($) { 
 $.fn.jMarquee = function(o) {
    o = $.extend({
    speed:30,
    step:1,//��������
    direction:"up",//��������
    visible:1//�ɼ�Ԫ������
    }, o || {});
    //��ȡ���������ڸ�Ԫ��������Ϣ
    var i=0;
    var div=$(this);
    var ul=$("ul",div);
    var tli=$("li",ul);
    var liSize=tli.size();
    if(o.direction=="left")
        tli.css("float","left");
    var liWidth=tli.innerWidth();
    var liHeight=tli.height();
    var ulHeight=liHeight*liSize;
    var ulWidth=liWidth*liSize;
  
    //��������Ԫ�ظ�������ָ������ʾԪ�������й��������򲻹�����
    if(liSize>o.visible){
        ul.append(tli.slice(0,o.visible).clone())  //����ǰo.visible��li�������ӵ�ul������
        li=$("li",ul);
        liSize=li.size();
        
          //������������������CSS��ʽ
        div.css({"position":"relative",overflow:"hidden"});
        ul.css({"position":"relative",margin:"0",padding:"0","list-style":"none"});
        li.css({margin:"0",padding:"0","position":"relative"});
        
        switch(o.direction){
            case "left":
                div.css("width",(liWidth*o.visible)+"px");
                ul.css("width",(liWidth*liSize)+"px");
                li.css("float","left");
                break;
            case "up":
                div.css({"height":(liHeight*o.visible)+"px"});
                ul.css("height",(liHeight*liSize)+"px");
                break;
        }
        
       
        var MyMar=setInterval(ylMarquee,o.speed);
        ul.hover(
            function(){clearInterval(MyMar);},
            function(){MyMar=setInterval(ylMarquee,o.speed);}
        );
    };
    function ylMarquee(){
         
        if(o.direction=="left"){
            if(div.scrollLeft()>=ulWidth){
                div.scrollLeft(0);
            }
            else
            {
                var leftNum=div.scrollLeft();
                leftNum+=parseInt(o.step);
                div.scrollLeft(leftNum)
            }
        }
        
        if(o.direction=="up"){
            if(div.scrollTop()>=ulHeight){
               div.scrollTop(0);
                
            }
            else{
               var topNum=div.scrollTop();
               topNum+=parseInt(o.step);
               div.scrollTop(topNum);
            }
        }
        
    };
   
}; 
     
})(jQuery);