
(function(win,doc){
        //切换隐藏
       var oBtn=doc.querySelectorAll('header .header-nav li')[0];
        var oCut=doc.querySelectorAll('header .header-content')[0];
        var oClose=doc.querySelectorAll('header .header-content em')[0];
        oBtn.bTrue=true;
        oBtn.addEventListener('click',toggleClass,false);
        oClose.addEventListener('click',toggleClass,false);
        function toggleClass(){
                oBtn.classList.toggle('active');
                oCut.classList.toggle('active');
                if(oBtn.className=='active'){
                    //禁止滚动条
                        document.documentElement.style.overflow='hidden';//电脑
                        document.ontouchmove=function(ev){ev.preventDefault();};//手机
                }else{
                        //开启滚动条
                        document.documentElement.style.overflow='auto';//电脑
                        document.ontouchmove=null;//手机
                }
                oBtn.bTrue=!oBtn.bTrue;
        }

})(window,document);
