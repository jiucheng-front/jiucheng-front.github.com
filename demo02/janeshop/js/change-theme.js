
/*************更换主题*************/
var Color = {
    colorBtns:$(".color"),
    defaultClass:"color",
    nav:$(".nav")[0],
    leftBox:$(".left")[0],
    leftTitle:$(".left h5")[0],
    leftInnerTitle:$(".left h6"),
    init(){
        var length = this.colorBtns.length;
        var _this = this;
        for(var i = 0 ; i < length ; i++ ){
            this.colorBtns[i].addEventListener("click",this.addSelected);
        }
        console.log(this);
    },
    addSelected(){
        if(this.className.indexOf("selected")==-1){
            var color = this.getAttribute("data-color");
            for(var i = 0; i < Color.colorBtns.length; i++){
                Color.colorBtns[i].className = Color.defaultClass;
            }
            this.className = Color.defaultClass +" selected";
            //切换主题颜色
            Color.changeTheme(color);
        }
    },
    changeTheme(color){
        this.nav.style.backgroundColor=color;
        this.leftBox.style.borderColor=color;
        this.leftTitle.style.backgroundColor=color;
        for(var j = 0; j < this.leftInnerTitle.length; j++){
            this.leftInnerTitle[j].style.borderBottomColor=color;
        }
    }
}
