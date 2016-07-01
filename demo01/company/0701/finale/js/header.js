//JavaScript Document
/*html*/
(function(win,doc){
        /*页面自适应*/
        var oContainer=doc.getElementById('container');
        var oHtml=doc.getElementsByTagName('html')[0];
        fnResetHtmlFontSize();
        function fnResetHtmlFontSize(){
                var iContainerWidth=oContainer.offsetWidth;
                oHtml.style.fontSize=iContainerWidth/10+'px';
        }
        win.addEventListener('resize',fnResetHtmlFontSize,false);
})(window,document);

