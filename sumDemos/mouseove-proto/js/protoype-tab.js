/**
 * Created by wangrq on 2017/3/2.
 */
//1定义构造函数
function Tabitem(option){
    this.init(option);
}
Tabitem.prototype={
    init:function(option){
        var _self=this;
        _self.btn=document.getElementsByClassName(option.btn)||'';
        _self.item=document.getElementsByClassName(option.item)||'';
        for(var i=0;i<_self.btn.length;i++){
            _self.btn[i].index=i;
            _self.btn[i].onmouseover=function(){
                for(var j=0;j<_self.item.length;j++){
                    _self.btn[j].className=option.btn;
                    _self.item[j].className=option.item;
                }
                _self.btn[this.index].className=option.btn+' '+option.btnaddclass;
                _self.item[this.index].className=option.item+' '+option.otemaddclass;
                //console.log(this);
                //console.log(_self);
            };
        }
    }
};
