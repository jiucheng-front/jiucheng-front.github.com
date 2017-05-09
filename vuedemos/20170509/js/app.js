window.onload=function(){
    var vm=new Vue({
        el:"#app",
        data:{
            someData:""
        },
        methods: {
            get:function(){
                // this.$http.jsonp("https://api.douban.com/v2/movie/in_theaters").then(function(response){
                this.$http.get("js/test.txt").then(function(response){
                    this.someData=response.body;
                    console.log(response);
                    console.log(this.someData);
                },function(res){
                    alert("請求數據失敗！")
                });
            },
            jsonpGet:function(){
                this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",{
                    wd:"a"
                },{
                    jsonp:"cb"
                }).then(function (res) {
                    alert(res.data.s)
                },function (res) {
                    alert(res.status);
                })
            }
        }
    })
}