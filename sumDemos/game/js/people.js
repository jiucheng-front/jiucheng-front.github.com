/**
 * Created by Administrator on 2016/11/9.
 */
(function(){
    var obj=[
        {
            id:"7453289",
            name:"彡彡",
            level:"72",
            title:"法师"
        },
        {
            id:"4211144",
            name:"帅夫君",
            level:"70",
            title:"战士"
        },
        {
            id:"4026772",
            name:"阿宝",
            level:"65",
            title:"战士"
        },
        {
            id:"4247543",
            name:"嗨嗨",
            level:"70",
            title:"法师"
        },
        {
            id:"7573409",
            name:"600",
            level:"72",
            title:"战士"
        },
        {
            id:"6317640",
            name:"套路",
            level:"72",
            title:"法师"
        },
        {
            id:"5261165",
            name:"导演",
            level:"70",
            title:"炮手"
        },
        {
            id:"4038921",
            name:"熊家帅",
            level:"70",
            title:"战士"
        },
        {
            id:"4095837",
            name:"血殺",
            level:"70",
            title:"战士"
        },
        {
            id:"4244005",
            name:"帅苗苗",
            level:"70",
            title:"法师"
        }
    ];
    var arr=[];
    for(var i=0;i<obj.length;i++){
        arr.push(obj[i].id);
    }
    function getNew(a){
        a.sort(function(a,b){return b-a});
    }
    getNew(arr);
//console.log(arr);
//[
// "7573409", "7453289", "6317640", "5261165", "4247543",
// "4244005", "4211144", "4095837", "4038921", "4026772"
// ]
    /****************获取按战力高低排序的数组对象********************/
    var newobj=[];
    for(var j=0;j<arr.length;j++){
        for(var s=0;s<obj.length;s++){
            if(arr[j]==obj[s].id){
                newobj.push(obj[s]);
            }
        }
    }
    //console.log(newobj);
//遍历该新的数组对象，过程中创建ul并一次追加到 div#main中
//var divitem=document.getElementById("main");
    var str='<div class="main"><ul class="tittle"><li>名字</li><li>职业</li><li>等级</li><li>战力</li></ul>'
    for(var n=0;n<newobj.length;n++){
        str+='<ul class="lists">';
        str+="<li>"+newobj[n].name+"</li>";
        str+="<li>"+newobj[n].title+"</li>";
        str+="<li>"+newobj[n].level+"</li>";
        str+="<li>"+newobj[n].id+"</li>";
        str+="</ul>";
    }
    str+="</div>";
    document.write(str);
})();
//------------获取所有的key--------------------
//var keyarr=[];
//for(key in newobj[0]){
//    //console.log(newobj[i][key]);
//    keyarr.push(key);
//}
//console.log(keyarr);
//--------------------------------------------