 <h3>原文: <a href="http://jo2.org/htmls/xmosaic/msk.htm" target="_blank">http://jo2.org/htmls/xmosaic/msk.htm</a></h3>
        <h3>XMosaic.js使用说明：</h3>
        <h4>只需引入</h4>
        <pre>
            XMosaic.js 和<br>
            var oBj = XMosaic('oBj',{pager:'pager',delay:3000,countX:5,countY:5,how:9,order:0 });
        </pre>
        1、参数how指定切换效果,针对每一个分块 <br>
            &nbsp;&nbsp;0,依次淡入<br>
            &nbsp;&nbsp;1,依次左至右滚动并淡入<br>
            &nbsp;&nbsp;2,依次上至下滚动并淡入<br>
            &nbsp;&nbsp;3,依次右至左滚动并淡入<br>
            &nbsp;&nbsp;4,依次下至上滚动并淡入<br>
            &nbsp;&nbsp;5,依次右至左交错滚动并淡入<br>
            &nbsp;&nbsp;6,依次上至下交错滚动并淡入<br>
            &nbsp;&nbsp;7,依次宽度由0加至100%并淡入<br>
            &nbsp;&nbsp;8,依次高度由0加至100%并淡入<br>
            &nbsp;&nbsp;9,宽高同时由0加至100%并淡入<br>
        2、countX:横向分块个数，默认5<br>
        3、countY:纵向分块个数，默认1<br>
        4、order:动画执行顺序，共6种，默认0<br>
            &nbsp;0,从第一个执行到最后一个<br>
            &nbsp;1,从最后一个执行到第一个<br>
            &nbsp;2,从中间执行到两头<br>
            &nbsp;3,从两头执行到中间<br>
            &nbsp;4,随机<br>
            &nbsp;5,同时执行<br>
        5、delay:暂停时间，切换时间默认4000<br>
        6、pager:页码块的id<br>
        7、event:触发页码切换的事件，默认mouseover<br>