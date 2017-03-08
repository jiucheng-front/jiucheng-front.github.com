/**
 * Created by Administrator on 2017/2/21.
 */
window.onload=function(){
    //切换1 顶部科室导航  悬停切换
    (function(){
        var obj={
            item:null,
            showbtn:null,
            closebtn:null,
            init:function(){
                this.item=document.getElementById('navbox');
                this.showbtn=document.getElementById('one');
                this.closebtn=document.getElementById('close');
                this.showbtn.onmousemove=this.showitem;
                this.closebtn.onclick=this.hideitem;
            },
            showitem:function(){
                obj.item.style.display='block';
            },
            hideitem:function(){
                obj.item.style.display='none';
            }
        }
        obj.init();
    //    切换2  医院动态、 党政建设 悬停切换
        var btns=document.getElementsByClassName('js_onebtn');
        var showdivs=document.getElementsByClassName('one_box');
        for(var i= 0,leng=btns.length;i<leng;i++){
            btns[i].index=i;
            btns[i].onmousemove=function(){
                for(var j=0;j<showdivs.length;j++){
                    showdivs[j].className='one_box';
                    btns[j].className='js_onebtn';
                }
                btns[this.index].className='js_onebtn'+' on';
                showdivs[this.index].className='one_box'+" disblock";
            }
        }
        // 医疗系统切换
        var safebtns=document.getElementsByClassName('js_safebtn');
        var safedivs=document.getElementsByClassName('ylbz-tabCc');
        for(var i= 0,leng=safebtns.length;i<leng;i++){
            safebtns[i].index=i;
            safebtns[i].onmousemove=function(){
                for(var j=0;j<safedivs.length;j++){
                    safedivs[j].className='ylbz-tabCc';
                    safebtns[j].className='js_safebtn';
                }
                safebtns[this.index].className='js_safebtn'+' ylbz-cur';
                safedivs[this.index].className='ylbz-tabCc'+" disblock";
            }
        }
    })()
    //顶部 医院概况，疑难病会诊中心 切换
    function Overitem(option){
        this.init(option);
    }
    Overitem.prototype={
        init:function(option){
            var _self=this;
            _self.btn=document.getElementById(option.btn)||'';
            _self.item=document.getElementById(option.item)||'';
            _self.addclassname=option.addclass;
            _self.btn.onmouseover=function(){
                this.className=_self.addclassname;
                _self.item.style.display='block';
            };
            _self.btn.onmouseout=function(){
                this.className='';
                _self.item.style.display='none';
            };
        }
    }
    //1 医院概况 悬停效果
    var oneitem=new Overitem({
        btn:'nav_three',
        item:'slidebox_three',
        addclass:'nav_two'
    });
    //2、疑难病会诊中心 悬停效果
    var twoitem=new Overitem({
        btn:'nav_two',
        item:'slidebox_two',
        addclass:'nav_two'
    })
}
//顶部banner 部分JS
$(function() {
    //huameiV3.init();
    $(".bannerSlide").mouseenter(function(e) {
        $(this).find(".bt").fadeIn()
    }).mouseleave(function(e) {
        $(this).find(".bt").fadeOut()
    });
    //banner�ֲ�
    if ($(".bannerSlide li").length >1) {
        $(".banner").slide({
            mainCell: '.slideBox ul',
            titCell: '.focus',
            effect: 'leftLoop',
            prevCell: '.preBtn',
            nextCell: '.nextBtn',
            autoPage: '<span></span>',
            autoPlay: true,
            mouseOverStop:true,
            titOnClassName: 'active',
            interTime: 8000,
            delayTime:600,
            endFun: function(i, c) {
                $(".bannerSlide .slideBox li").removeClass("active").eq(i + 1).addClass("active");
            }
        });}
})