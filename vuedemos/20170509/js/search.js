window.onload=function(){
    var vm=new Vue({
        el:"#app",
        data:{
            someData:[],
            msg:"",
            now:-1
        },
        // 方法
        methods: {
            get:function(e){
                // 如果是上下键盘不请求
                if(e.keyCode==38||e.keyCode==40){
                    return;
                }
                if(e.keyCode==13){
                    window.open("https://www.baidu.com/s?wd="+this.msg);
                    this.msg="";
                }
                this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                    wd:this.msg
                },{
                    jsonp:'cb'
                }).then(function(res){
                    console.log(res);
                    this.someData=res.data.s;
                },function(res){
                    console.log(res.status);
                });
            },
            // 向下按钮事件
            selectedDown:function(){
                this.now++;
                if(this.now==this.someData.length){
                    this.now=0;
                }
                // 替換搜搜框的內容
                this.msg=this.someData[this.now];
            },
            // 向上按钮事件
            selectedUp:function(){
                this.now--;
                if(this.now<=-1){
                    this.now=this.someData.length-1;
                }
                // 替換搜搜框的內容
                this.msg=this.someData[this.now];
                // console.log(this.now);
            },
            // 鼠标悬停事件
            mouseSelected:function(index){
                this.now=index;
                this.msg=this.someData[this.now];
            },
            willSearch:function(){
                window.open("https://www.baidu.com/s?wd="+this.msg);
                this.msg="";
            },
            // 搜索框自动获取焦点
            hadFocus:function(){
                document.getElementById("search").focus();
            }
        },
        mounted () {
            this.hadFocus();
        }
    })
}