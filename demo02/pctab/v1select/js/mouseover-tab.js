/**
 * Created by wangrq on 2017/3/2.
 */
//1定义构造函数
function Overitem(option){
    this.init(option);
}
Overitem.prototype={
    init:function(option){
        var _self=this;
        _self.btn=document.getElementById(option.btn)||'';
        _self.item=document.getElementById(option.item)||'';
        //_self.btn.onmouseout=_self.overitem;
        _self.btn.onmousemove=function(){
            _self.item.style.display='block';
        };
        //_self.btn.onmouseout=_self.outitem;
        _self.btn.onmouseout=function(){
            _self.item.style.display='none';
        };
    },
    overitem:function(){
        console.log('鼠标进入');
        console.log(this);
        //this.item.style.display='block';怎么能让
    },
    outitem:function(){
        console.log('鼠标离开');
        this.item.style.display='none';
    },
    toogleitem:function(){
        var _self=this;
        console.log(this.btn);
        console.log(this.item);
        console.log(_self);
    }
};
//
//var itemone=new Overitem({
//    btn:'navbtn-one',
//    item:'navlist-one'
//});
//itemone.toogleitem();