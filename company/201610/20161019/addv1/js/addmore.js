//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
window.addEventListener('load', function () {
    var Game = {
        //初始化
        fnInitial: function () {
            this.fnGetElement();//调用获取元素
            this.fnFirstShow();//调用初显
            this.fnBtn();//调用点击事件
        },
        //获取元素
        fnGetElement: function () {
            this.oMain = document.getElementById('main');//列表容器
            this.aLi = this.oMain.getElementsByTagName('li');//所有列表
            this.aDate = this.oMain.getElementsByTagName('h2');//所有时间容器
            this.aText = this.oMain.getElementsByTagName('p');//所有文字说明容器
            this.aLi = this.oMain.getElementsByTagName('li');//所有列表
            this.oBtn = document.getElementById('more');//查看更多
            this.iNum = 4;//默认显示个数(可更改)
            this.add = this.iNum;//优化点击时循环的初始值和循环的结束值配合可以得出循环次数(不可更改)
            this.iNow = 0;//当前点击的是第几次(不可更改)
            this.iShow = 6;//一次点击加载几个列表(可更改)
            this.iMark = null;//是否超过列表个数的界限判定(不可更改)
        },
        //初显
        fnFirstShow: function () {
            for (var i = 0; i < this.aLi.length; i++) {
                this.aDate[i].title=this.aDate[i].innerHTML;
                this.aText[i].title=this.aText[i].innerHTML;
                //当总个数小于默认显示个数时
                if (this.aLi.length <= this.iNum) {
                    this.show(i);//调用显示
                } else {
                    if( this.oBtn.className ==''){
                        this.oBtn.className = 'active';
                    }
                    if (i < this.iNum) {
                        this.show(i);//调用显示
                    }
                }
            }
        },
        //显示
        show: function (index) {
            if (this.aLi[index].className == '') {
                this.aLi[index].className = 'active';
            }
            var img = this.aLi[index].getElementsByTagName('img')[0];
            if (img.src == '') {
                img.src = img.getAttribute('_src');
            }
        },
        //点击事件
        fnBtn: function () {
            var self = this;
            var clickend = null;
            if (document.ontouchend === null) {
                clickend = 'touchend';
            } else if (document.ontouchend === undefined) {
                clickend = 'click';
            }
            this.oBtn.addEventListener(clickend, function () {
                self.fnMore(this);
            }, false);
        },
        //显示更多
        fnMore: function (obj) {
            this.iNow++;
            //循环的结束值和循环的初始值配合可以得出循环次数
            this.iMark = this.iNum + this.iShow * this.iNow;
            //循环的结束值超出界限时如何处理
            if (this.iMark - this.aLi.length >= 0) {
                this.iMark = this.aLi.length;
                obj.className = '';
            }
            //点击一次加载多少个列表,就循环多少次,不做多余的操作,以免降低性能
            for (var i = this.add; i < this.iMark; i++) {
                this.show(i);//调用显示
            }
            //重新赋值循环的初始值
            this.add = this.iNum + this.iShow * this.iNow;
        }
    };
    Game.fnInitial();//调用初始化
}, false);