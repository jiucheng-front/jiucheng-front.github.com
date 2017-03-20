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
};
