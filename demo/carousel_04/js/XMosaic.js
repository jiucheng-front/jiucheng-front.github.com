/**
 * Created by Administrator on 2016/5/11.
 * 来自:http://jo2.org
 *
 *
 */
var _ = {
    id:function (id) {
        //this.id=id;
        return "string" == typeof id ? document.getElementById(id) : id;
    },
    Extend:function(defaults, news) {
        for (var property in news) {
            defaults[property] = news[property];
        }
        return defaults;
    },
    Bind:function(object, fun) {
        var args = Array.prototype.slice.call(arguments).slice(2);
        return function() {
            return fun.apply(object, args.concat(Array.prototype.slice.call(arguments)));
        }
    },
    Create:function(o,pro){
        var e=document.createElement(o);
        for(var p in pro){
            e.setAttribute(p,pro[p]);
        }
        return e;
    },
    On:(function(){
        return (window.addEventListener) ? function(eType,eFunc,eObj) {
            eObj.addEventListener(eType,eFunc,false);
        } : function(eType,eFunc,eObj) {
            eObj.attachEvent("on"+eType,eFunc);
        };
    })(),
    addClass:function(elm,cls){
        if(elm.className.indexOf(cls) == -1) {
            elm.className +=' '+cls;
            ////console.log(elm.className);
        }
    },
    getCss:function(elm){
        return elm.currentStyle || document.defaultView.getComputedStyle(elm, null);
    },
    cutover:function(arr,cur,cls){
        for(var i=0,l=arr.length;i<l;i++){
            if(arr[i].className.indexOf(cls) != -1) {
                arr[i].className = arr[i].className.replace(cls,'');
            }
        }
        arr[cur].className = arr[cur].className.replace(/\s$/g,'') + ' ' + cls;
    },
    toggleClass:function(elm,cls){
        if(elm.className.indexOf(cls) != -1){
            elm.className = elm.className.replace(cls,'');
        } else {
            elm.className = elm.className.replace(/\s$/g,'') + ' ' + cls;
        }
    },
    setAlpha:(function(){
        return (-[1,]) ? function (obj,alpha) {
            obj.style.opacity = alpha * 0.01;
        } : function(obj,alpha){
            obj.style.filter = "alpha(opacity=" + alpha + ")";
        };
    })(),
    getAlpha:(function(){
        return (-[1,]) ? function(obj) {
            return document.defaultView.getComputedStyle(obj,null).opacity * 100;
        } : function (obj) {
            return obj.filters['DXImageTransform.Microsoft.Alpha'].opacity || obj.filters('alpha').opacity;
        }

    })(),
    setPos:function(obj,pos){
        for(var p in pos) {
            ////console.log(obj);
            obj.style[p] = pos[p] + 'px';
        }
    },
    setCss:function(elm,css){
        for(var c in css) {
            elm.style[c] = css[c];
        }
    },
    forEach:function(arr,fun,thisr){
        for(var i=0,l=arr.length;i<l;i++){
            fun.call(thisr,arr[i],i,arr)
        }
    }
}
function XMosaic(id,options) {
    return new XMosaic.main(id,options);
}
XMosaic.main = function(id,options) {
    this.wraper = _.id(id);
    this.items = this.wraper.children;
    this.number = this.items.length;

    this.What = ['top','left','height','width'];
    this.fan = 1;
    this.now = this.next = 0;

    this.options = this.reset(options);

    this.Width = this.options.Width || this.wraper.offsetWidth;
    this.Height = this.options.Height || this.wraper.offsetHeight;
    this.how = this.options.how;
    this.order = this.options.order;
    this.auto = this.options.auto;
    this.event = this.options.event;
    this.initial();
}
XMosaic.prototype = {
    reset:function(options){
        var defaults = {
            countX:5,
            countY:1,
            how:0,
            doing:500, //鍔ㄧ敾鎸佺画鏃堕棿
            delay:4000,
            order:0,
            event:'mouseover',
            auto:true
        }
        return _.Extend(defaults,options);
    },
    initial:function(){
        var root = this;
        this.images = (function(){
            var images = [];
            for(var i=0,l=root.items.length;i<l;i++) {
                images.push(root.items[i].getElementsByTagName('IMG')[0]);
            }
            return images;
        })();
        //_.Extend(this,this.options);
        //console.log(this.countY);
        //console.log(this.options.countY);
        this.count = this.options.countX*this.options.countY;
        this.changeNow = this.options.changeNow ? 1 : 0;

        this.delay = this.options.delay;

        //if(this.how) this.what = ['left','top','width','height'][this.how];

        this.speed = Math.floor(this.options.doing / this.count);
        //alert(this.speed);
        this.sWidth = this.Width/this.options.countX;
        this.sHeight = this.Height/this.options.countY;
        //console.log(this.sWidth);
        var pos = {x:0,y:0}
        //鎻掑叆澶IV鍙婃墍鏈夊皬DIV
        this.smalls = [];
        this.wraper.style.position = 'relative';
        for(var i=0;i<this.number;this.items[i++].style.cssText +='position:absolute; top:0;left:0;');

        if(this.how > 0){
            this.what = this.What[this.how%2];
            if(this.how > 2){
                this.fan = -1;
                if(this.how > 6) {
                    this.what = this.What[this.how%2+2]
                    var wh = 1; //鏄惁鏄彉鏇村楂�

                }
            }
        }

        //console.log(this.what);


        this.bigDIV = (function(){
            var DIV = _.Create('A',{'class':'MosaicInner','target':'_blank' });
            for(var i=0; i < root.count; i++) {
                var s = _.Create('DIV',{'id':'div'+i});
                s.style.cssText = "float:left; position:absolute;background:url() 0 0 no-repeat; width:"+root.sWidth+"px; height:"+root.sHeight+"px;left:"+pos.x*root.sWidth+"px;top:"+pos.y*root.sHeight+"px; background-position:"+(-pos.x*root.sWidth)+"px "+(-pos.y*root.sHeight)+"px; width:"+root.sWidth+"px; height:"+root.sHeight+"px;";
                _.setAlpha(s,0);

                s.e = parseInt(s.style[root.what]);
                //s.w = parseInt(s.style.width);
                s.h = parseInt(s.style.height);
                s.b = s.e - (wh ? s.e : 100*root.fan );
                s.c = s.e - s.b;
                if(root.how >4 && root.how < 7){
                    if(i % 2) {
                        //console.log(i);
                        s.b = s.b + s.c;
                        s.c = s.b - s.c;
                        s.b = s.b - s.c;
                    }
                }
                //console.log(root.fan+root.what+s.c);
                pos.x++;
                //console.log(pos.x);
                if(pos.x > root.options.countX-1) {
                    pos.x = 0;
                    pos.y++;
                }
                root.smalls.push(DIV.appendChild(s));
            }

            DIV.style.cssText = "position:absolute; display:block; top:0; left:0; width:"+root.Width+"px;height:"+root.Height+"px;z-index:99;";
            return DIV;
        })();

        this.wraper.appendChild(this.bigDIV);
        this.items[0].style.zIndex = 10;
        this.Run = this.run();
        //console.log(this.Run);

        this.pager = _.id(this.options.pager);
        this.pager && this.Pager();
        this.auto && (this.timer = setTimeout(_.Bind(this,this.Next),this.delay)) ;
    },
    go:function(num){
        clearTimeout(this.timer);
        //clearTimeout(this._timer);
        for(var i=0,l=this.count;i<l;clearTimeout(this.smalls[i++].timer));
        this._time = 0;
        //console.log(this.timer);
        this.curS = this.items[this.now];

        //console.log(this.now);
        //for(var i=0;i<this.count;(if(i != this.now) this.items[i++].style.zIndex = 5));
        if(num != undefined) { this.next = num	}
        else { this.next=this.now+1; }
        //(num != undefined ) && (this.next = num) || (this.next = this.now+1);
        (this.next>= this.number ) && (this.next = 0) || (this.next < 0) && (this.next = (this.number-1));
        if(this.next != this.now) {
            for(var i=0,l=this.number;i<l;i++){
                if(i != this.now) {
                    this.items[i].style.zIndex = 5;
                }
            }
            this.curS.style.zIndex = 10;
            this.nextS = this.items[this.next];
            //this.nextS.style.zIndex = 5;
            this.going = 0;
            this.bigDIV.style.display = 'block';
            this.Run();
            if(this.pager)  { _.cutover(this.pages,this.next,'on')};
            this.now = this.next;
        }
    },
    run:function(){
        var root = this,
            speed = this.speed,
            count = this.count,
            how = this.how,
            what = this.what,
            smalls = this.smalls,
            order = this.order;
        //if(this.order) {
        if(order == 4) {
            var random = [];
            for(var i=0;i<count;random.push(i++));
            for (var t,num,t1,t2,i=0;i<count;i++){
                t1=count-i;
                t2=t1-1;
                num=Math.floor(Math.random()*t1);
                //鍘绘帀涓嬮潰鐨勮緭鍑虹湅瀹為檯閫熷害
                //document.write(random[num]);
                t=random[t2];    //A1

                random[t2]=random[num];   //A2
                random[num]=t;   //A3
                //console.log(random[t2]);
            }
            //console.log(random);
            //}
        }
        var changeI = function (){
            var arr= [
                function(i) {
                    return i;//浠庡紑澶村埌鏈熬
                },
                function(i) {
                    return count-i;//浠庢湯灏惧埌寮€澶�
                },
                function(i){
                    return Math.floor(Math.abs(i-(count-1)/2));//涓棿鍒颁袱澶�
                },
                function(i){
                    return i>=(count-1)/2 && (i = (count-1)-i) || i; //涓ゅご鍒颁腑闂�
                },
                function(i){
                    //console.log(i);
                    return random[i]; //闅忔満
                },
                function(i){
                    return  0; //鍚屾椂杩涜
                }
            ];
            //console.log(order);
            return arr[order];
        }();
        return	function(){
            this.nowPic = this.images[this.next];
            var src = this.nowPic.src;
            _.forEach(smalls,
                function(elm,i){
                    elm.style.backgroundImage = 'url('+src+')';
                    elm.end = 0;
                    _.setAlpha(elm,0);
                    //console.log(elm.b);
                    elm.style[what] = elm.b + 'px';
                    //console.log(elm.b+elm.c);
                    //console.log(i);
                    //elm.c = elm.style.top
                    //console.log(elm.b +' '+elm.h)
                    elm.todo = function(){
                        if((elm.end+=5) < 100 ){
                            _.setAlpha(elm,elm.end);
                            /*
                             if(elm.w && elm.h) {
                             elm.style.width = Math.floor(QuadOut(elm.end,elm.b,elm.w,100)) + 'px';
                             elm.style.height = Math.floor(QuadOut(elm.end,elm.b,elm.h,100)) + 'px';
                             } else { */
                            elm.style[what] = Math.floor(QuadOut(elm.end,elm.b,elm.c,100)) + 'px';
                            if(how ==9) {
                                elm.style.height = Math.floor(QuadOut(elm.end,0,elm.h,100)) + 'px';
                            }
                            //}


                            elm.timer = setTimeout(elm.todo,25);
                        } else {
                            //console.log('the'+i);
                            elm.end = 0;
                            elm.style[what] = elm.e+'px';
                            how == 9 && (elm.style.height = elm.h + 'px');

                            //elm.style.width = elm.w + 'px';
                            //elm.style.height = elm.h + 'px';
                            _.setAlpha(elm,100);
                            root.going++;
                            if(root.going == root.count) root.after();
                        }
                    };
                    i = changeI(i);

                    elm.timer = setTimeout(elm.todo,speed*i);
                }
            );
        }

    },
    after:function(){
        //console.log(this.going +'<>'+ this.count);
        if(this.going != this.count) return;
        this.going = 0;
        this.bigDIV.style.display = 'none';
        this.curS.style.zIndex = 5;
        this.nextS.style.zIndex = 10;
        this.auto && (this.timer = setTimeout(_.Bind(this,this.Next),this.delay)) ;
    },
    Pager:function(){
        this.pages = _.id(this.pager).children;
        var evt = this.event,
            pl = this.pages.length,
            root = this,
            to;
        //console.log(evt);
        for(var i = 0; i< pl; i++){
            (function(i){
                _.On(evt,
                    function(){
                        //console.log(i);
                        root.Pause();
                        to = setTimeout(function(){root.go(i)},150);
                    },
                    root.pages[i]);
                _.On('mouseout',
                    function(){
                        clearTimeout(to);
                        if(root.options.auto) root.auto = true;
                        //root.Cont();
                    },
                    root.pages[i]);
            })(i);
        }
    },
    Prev:function(){
        this.go(--this.next);
    },
    Next:function(){
        this.go(++this.next);
    },
    Pause:function(){
        clearTimeout(this.timer);
        this.auto = false;
        //console.log('Pause!' + this.timer);
    },
    Cont:function(){
        //this.Pause();
        clearTimeout(this.timer);
        this.auto = true;
        this.timer = setTimeout(_.Bind(this,this.Next),this.delay);
        //console.log(this.timer);
    },
    Die:function(){
        this.wraper.removeChild(this.bigDIV);
        this.Pause();
    }
}
XMosaic.main.prototype = XMosaic.prototype;
function QuadOut(t,b,c,d){
    return -c *(t/=d)*(t-2) + b;
}