var LiveAutoInvite0='您好，来自%IP%的朋友';
var LiveAutoInvite1='来自首页的对话';
var LiveAutoInvite2=' 网站商务通 主要功能：<br>1、主动邀请<br>2、即时沟通<br>3、查看即时访问动态<br>4、访问轨迹跟踪<br>5、内部对话<br>6、不安装任何插件也实现双向文件传输<br><br><b>如果您有任何问题请接受此邀请以开始即时沟通</b>';
var LR_next_invite_seconds = 5;
var siteid ='LNB95173891';
document.write('<script language="javascript" src="http://dwl.zoossoft.com/JS/LsJS.aspx?siteid=LDY31282762"></script>');
//var sd=setTimeout(InsertZoosnet,2);
function online(){
	var e = 'anniu';
	if(arguments.length == 1){
		e = arguments[0];
	}
	var url = 'http://dwl.zoossoft.com/LR/Chatpre.aspx?id=LDY31282762';
	url = url + '&e=' + e + '&p=' + encodeURIComponent(location.href);
	window.open(url, 'news' + Math.round( Math.random() * 1000000 ));
	return false;
}
function InsertZoosnet(){
	clearTimeout(sd);  //清楚定时执行函数
	if (!document.getElementById("LRdiv1")) return false;
	if (document.getElementById("LRdiv1").style.display == 'none') return false;
	if (document.getElementById("LR_FlashPanel")) return false;
	document.getElementById("LRfloater1").innerHTML='<img src="images/duihua.gif" width="462" height="340" border="0" usemap="#Map1LR" data-pinit="registered"><map name="Map1LR"> <area shape="rect" coords="426,2,460,21" href="javascript:void(0)" onclick="LR_RefuseChat();LR_HideInvite();;return false;"> <area shape="rect" coords="3,4,459,337" href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();;return false;"></map>';
}