/**
 * Created by jianfei on 2017/3/2.
 */
//1 定义构造函数
function Overitem(option){
    this.init(option);
}
Overitem.prototype={
    init:function(option){
        var _self=this;
        _self.btn=document.getElementById(option.btn)||'';
        _self.item=document.getElementById(option.item)||'';
        _self.addclassname=option.addclass;
        //2.0 绑定事件
        _self.btn.onmouseover=_self.showitem.bind(_self);
        _self.btn.onmouseout=_self.hideitem.bind(_self);
    },
    //2.1 定义事件
    showitem:function () {
        //如何让this指向new Overitem;，在调用的时候用bind把this绑定上去
        this.btn.className=this.addclassname;
        this.item.style.display='block';
    },
    hideitem:function () {
        //如何让this指向new Overitem;，在调用的时候用bind把this绑定上去
        this.btn.className='';
        this.item.style.display='none';
    }
};
