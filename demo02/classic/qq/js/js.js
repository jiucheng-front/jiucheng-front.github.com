//cookie
function setCookie(name,value,time){
    var oDate=new Date();
    oDate.setTime(oDate.getTime()+time*60*1000);

    document.cookie=name+"="+value+";expires="+oDate;
}

function getCookie(name){
    var arr=document.cookie.split("; ")
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split("=");
        if(arr2[0]==name){
            return arr2[1];
        }else{
            return '';
        }
    }
}

function removeCookie(name){
    setCookie(name,1,-1);
}



//鼠标经过clips
$(function(){
    // cookie测试例子
    var onOff=true;
    $(".login").click(function(){
        setCookie("onOff",onOff,10);
    })
    $(".yuedu").click(function(){
        alert(document.cookie);
    })
    $(".email").click(function(){
        setCookie("onOff","ss",-1);
    })

    // alert($("#soso").offset().top);
    $(".clips a").hover(function(){
        $(this).css({opacity:"1",filter:"alpha(opacity=100)"});
    },function(){
        $(this).css({opacity:"0.3",filter:"alpha(opacity=30)"});
    });
})


//滚动条事件
$(function(){
    $(window).scroll(function(){
        var toTop=$(window).scrollTop();
        var showHeight=$(window).height();

        if(toTop>showHeight*0.5){
            $(".clips").show(300);
        }else{
            $(".clips").hide(300);
        }
    });
    //点击回到顶部
    $(".totop").click(function(){
        $("html,body").animate({scrollTop:$("#soso").offset().top},30);
    })
})

// 遮罩
$(function(){

    zhezhao();

    // 点击模式切换
    $(".moshi .wrap").click(function(){
        zhezhao();
    });
    $(".moshi a").click(function(){
        $(".moshi").hide();
    })

    function zhezhao(){
        //将页面上移至顶部
        $("html,body").animate({scrollTop:$("#soso").offset().top},500);
        //模式选择
        $(".normal").click(function(){
            clearInterval(timer);
            $(".shade").hide();
            $(".ad").animate({height:0},300,function(){
                $(this).hide();
                $sec.text(5);

                
            });
        });
        $(".admal").click(function(){
            clearInterval(timer);
            $(".shade").hide();
            $(".ad").show(500);
            $sec.text(5);

        });


        $(".shade").css("z-index","999");
        var $doch= $(document).height(); 
        var $sec=$(".jump .time span");
        var s=5;                        // 倒计时
        var itemp=750/s;
        var timer=null;
        setTimeout(shade,500);
        
        function shade(){
            $(".shade").show();

            $(".line").animate({width:"750px"},2000,function(){   //最后加载完成，执行倒计时
                clearInterval(timer);

                timer=setInterval(function(){   //倒计时自动关闭
                    s--;
                    $sec.text(s);
                    $(".line").animate({width:itemp*s},500); //  倒计时开始进度变化
                    if(s==0){
                        clearInterval(timer);
                        shadeClose();
                        $sec.text(5);

                    }
                }, 1000);

            }); 
            $(".load").animate({height:$doch},600,function(){
                $(".jump").fadeIn(500);
            });        
        };

        //关闭 close
        $(".jump .close").click(function(){
            clearInterval(timer);
            shadeClose();
            s=5;
            $sec.text(5);
        })
        function shadeClose(){
            $(".jump").animate({height:0},500,function(){
                $(".jump").hide();
                $(".jump").css("height","410px");
                $(".load").animate({height:0},300);

            });
        }

        //鼠标经过
        $(".normal").hover(function(){
            $(this).addClass("Nhover");
        },function(){
            $(this).removeClass("Nhover");
        });
        $(".admal").hover(function(){
            $(this).addClass("Ahover");
        },function(){
            $(this).removeClass("Ahover");
        });
    }
    
})

// 搜索框
$(function(){

    var $temp=null;  //定义一个临时空变量，用于储存点击下拉选项的li

    $(".searchMenu").hover(function(){
        $(this).addClass('Hover');
    },function(){
        $(this).removeClass('Hover');
    });
    // 鼠标移入改变搜索框箭头背景
    $(".searchSelect").hover(function(){
        if($temp){
            $temp.attr("class","active");
        }
        $(".searchSelect .selected").attr("class","selectedHover");
        $(".searchList").show();
    },function(){
        $(".searchSelect .selectedHover").attr("class","selected");
        
    });

    $(".searchSelect").mouseleave(function(){
        $(".searchList").hide();
    })

    // 鼠标移入类别选择框
    $(".searchList li").hover(function(){
        $(".searchList .active").removeClass('active');
        $(this).addClass('active');
        // 点击获取类别数据
        $(this).click(function(){
            $temp=$(this);
            $SelectTxt = $(this).text();
            $(".selectedHover").text( $SelectTxt );
            $(".searchList").hide();
        });
    },function(){
        $(this).removeClass('active');
    });
})


//市场行情
$(function(){
    var $gpjson=[{
        src:'newsImg/01.png',
        gpname:'上证指数',
        dianshu:'3510.35',
        zf:'-10.32  -0.29%'
    },{
        src:'newsImg/02.png',
        gpname:'恒生指数',
        dianshu:'26062.51',
        zf:'-601.36  -2.26%'
    },{
        src:'newsImg/03.png',
        gpname:'道琼斯',
        dianshu:'17947.02',
        zf:'+56.66  +0.32%'
    },{
        src:'newsImg/04.png',
        gpname:'中证腾安',
        dianshu:'2769.61',
        zf:'-116.35  -4.03%'
    }];


    //证券选择
    var $gpLi=$(".gpselect li");    

    gpTab(0);

    $gpLi.hover(function(){
        $(".gpselect li").attr("class","");
        $(this).addClass('selected');

        gpTab($(this).index());
    });

    function gpTab($obj){

        var $gpname=$gpjson[$obj].gpname;
        var $dianshu=$gpjson[$obj].dianshu;
        var $zf=$gpjson[$obj].zf;

        $(".zhishu img").attr("src",$gpjson[$obj].src);
        $(".gpname").text($gpname);
        $(".dianshu").text($dianshu);
        $(".zf").text($zf);

        if($zf.indexOf("-")==-1){
            $(".dianshu").css("color","#C00");
            $(".zf").css("color","#C00");
        }else{
            $(".dianshu").css("color","#41a98d");
            $(".zf").css("color","#41a98d");
        }
        //alert(($.trim($zf)).length);
        //alert($zf.indexOf("-"));  //【方法一】
        // var $re=^/[\-]*;         //【方法二，正则判断】
        // if($re.test($zf)){
        //     alert(11);
        // }else{
        //     alert(2222);
        // }
    }

});

//foucu 焦点图
$(function(){

    var $li=$(".focusPic li");
    var $w=$li.innerWidth()*$li.length;
    var $conwidth=1008;
    var $iNow=0;

    $(".focusPic .pre").click(function(){
        if($iNow==0){  
            $iNow=2;
            $(".focusPic ul").animate({left:-$iNow*$conwidth+"px"});
        }else{       
            $iNow--;
            $(".focusPic ul").animate({left:-$iNow*$conwidth+"px"});
        }
        foncusPoint();

    });
    $(".focusPic .next").click(function(){
        if($iNow<2){   
            $iNow++;
            $(".focusPic ul").animate({left:-$iNow*$conwidth+"px"});
        }else{         
            $iNow=0;
            $(".focusPic ul").animate({left:-$iNow*$conwidth+"px"});
        }
        foncusPoint();
    });

    // Focus 背景切换
    $(".focus").hover(function(){
        $(this).find(".pre").addClass('preHover');
        $(this).find(".next").addClass('nextHover');
    },function(){
        $(this).find(".pre").removeClass('preHover');
        $(this).find(".next").removeClass('nextHover');
    })

    // Focus 焦点圆点
    function foncusPoint(){
        $(".foncusPoint div").removeClass('active');
        $(".foncusPoint div:eq("+ $iNow +")").addClass('active');
    }
    
    // Focus 焦点圆点单击
    $(".foncusPoint div").click(function(){
        $iNow=$(this).index();
        foncusPoint();
        $(".focusPic ul").animate({left:-$iNow*$conwidth+"px"});
    })
    
})


$(function(){
    $("#yaowen").hover(function(){
        $("#fjNews").hide();
        $("#newsImprotant").show();
        $("#fj_news").removeClass("newsSelected");
        $("#yaowen").addClass("newsSelected");
    });
});

$(function(){
    $("#fj_news").hover(function(){
        $("#fjNews").show();
        $("#newsImprotant").hide();
        $("#yaowen").removeClass("newsSelected");
        $("#fj_news").addClass("newsSelected");
    });
});

$(function(){
    $("#rb").hover(function(){
        $("#tvPlay").hide();
        $("#hotPlay").show();
        $("#ysj").removeClass("newsSelected");
        $("#rb").addClass("newsSelected");
    });

    $("#ysj").hover(function(){
        $("#tvPlay").show();
        $("#hotPlay").hide();
        $("#rb").removeClass("newsSelected");
        $("#ysj").addClass("newsSelected");
    });
});

$(function(){
    $(".mod_Left,.mod_Left2,.mod_Left1,.mod_Right").hover(function(){
        $(".modTitle",$(this)).addClass('modTitleHover');    // 父元素查找指定类或者ID 方法【1】
        // $(this).find('.modTitle').addClass('modTitleHover');
        $(this).find(".chgcn").css({"display":"block"});   // 父元素查找指定类或者ID 方法【2】
    },function(){
        $(this).find('.modTitle').removeClass('modTitleHover');
        $(this).find(".chgcn").css("display","none");
    });
})


$(function(){
    $(".slideBtn").hover(function(){
        $(this).addClass('slideBtnHover');
    },function(){
        $(this).removeClass('slideBtnHover');
    });

    $(".slideBtn").click(function(){
        $(".slideBtn").removeClass('slideBtnHover').addClass('slideBtn_back');
        $(".product_slide").css({"width":"364px","right":"278px"});
        $(".product_content").css("border-left","0");

        $("#slide_left").css("display","block")
        .animate({
            "width": "348px"
        },300);
    });

    $(".product").mouseleave(function(){

        $(".product_slide").css("right","279px");
        $("#slide_left")
        .animate({"width": "0"},300,function(){
            $("#slide_left").css("display","none");
        })

        $(".slideBtn").removeClass('slideBtn_back');

    })

})

$(function(){
    $(".ChangeCHN").mouseover(function(){
        $(".chnBox").css("display","block");

        $(".chn a").hover(function(){
            $(this).addClass('active');
        },function(){
            $(this).removeClass('active');
        });
        $(".close").click(function(){
            $(".chnBox").hide();
        });
    });

    $(".chnBox").mouseleave(function(){
        $(".chnBox").css("display","none");
    });
    $(".modTitle").mouseleave(function(){
        $(".chnBox").css("display","none");
    });
})