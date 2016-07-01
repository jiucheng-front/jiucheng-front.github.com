



/*测试网络连接*/
/*
	function netconnect(){

		$.ajax({

				type: "get",

				url: "/blank.html",

				beforeSend: function(XMLHttpRequest){ 

					

				},   

				success: function(data, textStatus){



				},   

				complete: function(XMLHttpRequest, textStatus){

					

				},

				error: function(){

					$("body").append('<div class="neterror" style="width:90%; height:100px; border:5px solid #f00; border-radius:5px; background:#eee; text-align:center; position:fixed; top:200px; left:5%; font-size:14px; line-height:26px;z-index:999999999999999;"><div style="position:relative;padding-top:20px;">您的当前网络不稳定，如需继续咨询专家，<br />请拨打电话<a href="tel:022-59388099" style="color:#f00;font-size:16px;display:inline-block;line-height:22px;">咨询专家022-59388099</a><span class="sqclose"style="width:20px;height:20px;line-height:20px;display:block;position:absolute;right:0;top:0;background:#FFF;border:1px solid #f00;color:#f00;border-radius:20px;text-align:center;cursor:pointer;">X</span></div></div>');

					$(".sqclose").click(function(){$(".neterror").css("display","none");return false;});

				}

		});	

		var neta = setTimeout("netconnect()",3000);

		setTimeout(function(){

				if ($(".neterror").length == 1){clearTimeout(neta);}

			},2000);

		

	}
*/
	// netconnect();

$(function(){

$("a").click(function(){

	//if ($(this).attr("href")=="http://webim.h.qiao.baidu.com//im/index?siteid=3573633&ucid=6682195"){LR_HideInvite();openZoosUrl();return false;}

//	if ($(this).attr("href")=="http://qiao.baidu.com/v3/?module=mobile&controller=mobileim&action=index&ucid=6682195&siteid=4000730&bid=d3984282fba739fcb7d64d86"){LR_HideInvite();openZoosUrl();return false;}

});

})





window.onload=function(){

	var a = document.getElementsByTagName("a");

	var userinfo = navigator.userAgent;

	if (userinfo.indexOf("GT") > -1 || userinfo.indexOf("MQQBrowser") > -1){

		for (var i = 0;i < a.length;i++){

			if (a.item(i).href.indexOf("tel:") > -1){

				var call = a.item(i).href.replace("tel:","wtai://wp/mc;").replace(/[ ]/g,"");

				a.item(i).href = call;

			}

		}

	}else if(userinfo.indexOf("iPhone") > -1){

		for (var i = 0;i < a.length;i++){

			if (a.item(i).href.indexOf("wtai://wp/mc;") > -1){

				var call = a.item(i).href.replace("wtai://wp/mc;","tel:").replace(/[ ]/g,"");

				a.item(i).href = call;

			}

		}

	}

}



