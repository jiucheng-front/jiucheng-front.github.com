/**
 * Created by Administrator on 2016/10/24.
 */
var map={
    btn:null,
    div:null,
    init:function(){
        this.btn=document.getElementsByClassName("js_mapbtn");
        this.div=document.getElementsByClassName("addmap_msglists");
        for(var i=0;i<this.btn.length;i++){
            this.btn[i].index=i;
            this.btn[i].onclick=function(){
                for(var j=0;j<map.btn.length;j++){
                    map.btn[j].className="js_mapbtn";
                    map.div[j].className="addmap_msglists";
                }
                this.className="js_mapbtn"+" haveHover";
                map.div[this.index].className="addmap_msglists"+" willBlock";
            };
        }
    }
};
window.onload=function(){
    map.init();
}