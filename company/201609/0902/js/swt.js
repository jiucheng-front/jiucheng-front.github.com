// JavaScript Document
$(document).ready(function(){

    $('#close_swt2,#close_swt3').click(function(){
        $('#footTool2').hide();
        /*setTimeout("openM2()",15000);*///10000
    });
    setTimeout("openM2()",15000);//10000
});



function openM2(){
    $("#footTool2").show();
}


//js获取日期

function time()

{

    var now= new Date();

    var year=now.getFullYear();

    var month=now.getMonth();

    var date=now.getDate();
    var Hours=now.getHours(); //获取当前小时数
    var Minutes=now.getMinutes(); //获取当前分钟数
    var Seconds=now.getSeconds(); //获取当前秒数

//写入相应id

    document.getElementById("info1").innerHTML=" "+year+"年"+(month+1)+"月"+date+"日"+Hours+"时"+Minutes+"分"+Seconds+"秒";

    document.getElementById("info2").innerHTML=" "+year+"年"+(month+1)+"月"+date+"日"+Hours+"时"+Minutes+"分"+Seconds+"秒";

}
