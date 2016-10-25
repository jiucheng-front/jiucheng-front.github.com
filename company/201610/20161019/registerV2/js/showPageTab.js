/**
 * Created by Administrator on 2016/10/20.
 * door_navbar中15个病种按钮对应15个案例顺序是一对一
 *
 */
var page={
    divs:null,
    startBtn:null,
    netxBtn:null,
    endBtn:null,
    index:0,
    showIndex:null,
    navBarBtns:null,
    init:function(){
        //1、获取对应的要显示的DIV组合以及对应按钮
        this.divs=document.getElementsByClassName("threecases_box");
        this.startBtn=document.getElementById("startBtn");
        this.netxBtn=document.getElementById("netxBtn");
        this.endBtn=document.getElementById("endBtn");
        //显示当前页面是第几页的元素
        this.showIndex=document.getElementById("showIndex");
        //2、首页、下一页、末页按钮绑定点击事件
        this.startBtn.onclick=page.showStart;
        this.netxBtn.onclick=page.showNext;
        this.endBtn.onclick=page.showEnd;
        //4、door_navbar下面的按钮点击跳转到对应的案例
            //4-1、获取所有的病种按钮组合：15个
        this.navBarBtns=document.getElementsByClassName("casesNavbar");
        //4-2、锚点跳转到对应的案例之前，先判断该案例是否显示，并让该案例显示出来
        for(var j=0;j<this.navBarBtns.length;j++){
            this.navBarBtns[j].sumIndex=j;
            this.navBarBtns[j].onclick=page.goCase;
        }
    },
    //---隐藏多有的页面共用
    hideDivs:function(){
        for(var i=0;i<page.divs.length;i++){
            page.divs[i].className="threecases_box";
        }
    },
    //4-3、跳转到指定的案例
    goCase:function(){
        //五个按钮一个组合根据下标分3组(0-4)(5-9)(10-14)
        var btnsLength=page.navBarBtns.length;
        page.hideDivs();
        page.divs[this.sumIndex].className="threecases_box"+" show_page";
        page.showIndex.innerHTML=this.sumIndex+1;
        //重新赋值page.index保证点击下一页正确
        page.index=this.sumIndex;
    },
    //3、1下一页事件
    showNext:function(){
        page.index++;
        var divsNumber=page.divs.length;
        page.hideDivs();
        if(page.index<divsNumber){
            page.divs[page.index].className="threecases_box"+" show_page";
            page.showIndex.innerHTML=page.index+1;
        }else{
            page.index=divsNumber-1;
            page.divs[page.index].className="threecases_box"+" show_page";
            page.showIndex.innerHTML=divsNumber;
        }
    },
    //3、2返回首页事件
    showStart:function(){
        page.index=0;//重新赋值保证点击下一页时候正确
        page.hideDivs();
        page.divs[0].className="threecases_box"+" show_page";
        page.showIndex.innerHTML=1;
    },
    //3、3返回末页事件
    showEnd:function(){
        var divsNumber=page.divs.length;
        page.index=divsNumber-1;//防止在末页后再点击下一页正确
        page.hideDivs();
        page.divs[divsNumber-1].className="threecases_box"+" show_page";
        page.showIndex.innerHTML=divsNumber;
    }
}
window.onload=function(){
    page.init();
}