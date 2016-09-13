 

function showzx()
{
	if(document.getElementById('best3g_swt').style.display=="none"){
	document.getElementById('best3g_swt').style.display='';
	}
	setTimeout("showYQ()",5000);
	window.setInterval("heartBeat()",1);
}
function showYQ(){
	document.getElementById('best3g_swt_YQ').style.display='block';
	document.getElementById('best3g_swt').style.display='none';
	window.setInterval("heartBeat()",1);
}
function hideswt(){
	document.getElementById('best3g_swt_YQ').style.display='none';
	document.getElementById('best3g_swt').style.display='block';
	setTimeout("showYQ()",18000);
}
lastScrollY=0;
function heartBeat(){ 
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop)
		diffY = document.documentElement.scrollTop;
	else if (document.body)
		diffY = document.body.scrollTop
	else
		{/*Netscape stuff*/}
	
	percent=.1*(diffY-lastScrollY); 
	if(percent>0)percent=Math.ceil(percent); 
	else percent=Math.floor(percent); 
	document.getElementById("best3g_swt").style.top=parseInt(document.getElementById("best3g_swt").style.top)+percent+"px";
	document.getElementById("best3g_swt_YQ").style.top=parseInt(document.getElementById("best3g_swt_YQ").style.top)+percent+"px";
	lastScrollY=lastScrollY+percent; 
}


document.writeln("<style>");
document.writeln(".lq_swt{ background:url(/swt/img/lq_gq.gif) no-repeat #0475df; width:215px; height:130px; position:fixed; top:50%; left:50%; margin-left:-107px; margin-top:-65px;}");
document.writeln(".lq_xtop{ height:auto; zoom:1; overflow:hidden;}");
document.writeln(".lq_xtop h3{ font-size:14px; font-weight:bold; color:#fff; padding-left:40px; float:left; line-height:24px;}");
document.writeln(".right { float:right; }");
document.writeln(".fixed-tel { width:30px; height:100px; position:fixed; top:90px; right:0; }");
document.writeln(".lq_xtop span{ float:right;}");
document.writeln(".lq_swt p.lb_as{ line-height:20px; padding:20px 0 0 80px; font-size:12px;}");
document.writeln(".lq_swt p.lb_xx{ padding:18px 0 0 8px; font-size:12px; line-height:20px;}");
document.writeln(".lq_swt p.lb_xx a.lq_zx{ display:inline-block; width:70px; height:20px; background:#1f8282; text-align:center; color:#fff; margin-left:40px; font-weight:bold;}");
document.writeln("");


document.writeln(".jh0415{ position:relative; overflow:hidden; width:25rem; position:fixed; left:50%; top:50%; margin-top:-7.5rem; margin-left:-12.5rem}");
document.writeln("	.jh0415 h1 img{ width:100%;}");
document.writeln("	.jh0415 p{ position:absolute; right:.2rem; top:.2rem;}");
document.writeln("	.jh0415 p img{ width:1.2rem;}");
document.writeln("	.jh0415 h2{ width:70%; position:absolute; left:15%; bottom:6%;}");
document.writeln("	.jh0415 h2 a{ width:47%; display:inline-block;}");
document.writeln("	.jh0415 h2 img{ width:100%;}");

document.writeln(".lzdc_swtqcd{ width:260px; height:165px; background:url(/swt/img/swt_qcd.gif) no-repeat; position:fixed; left:50%; top:50%; margin-left:-130px; margin-top:-82px;}");
document.writeln(".lzdc_swtsz{ width:260px; height:165px; background:url(/swt/img/swt_sz.gif) no-repeat; position:fixed; left:50%; top:50%; margin-left:-130px; margin-top:-82px;}");
document.writeln(".lzdc_swttf{ width:260px; height:165px; background:url(/swt/img/swt_tf.gif) no-repeat; position:fixed; left:50%; top:50%; margin-left:-130px; margin-top:-82px;}");
document.writeln(".lzdc_swtxmz{ width:260px; height:165px; background:url(/swt/img/swt_xmz.gif) no-repeat; position:fixed; left:50%; top:50%; margin-left:-130px; margin-top:-82px;}");
document.writeln(".lzdc_swt22{ width:260px; height:165px; position:fixed; left:50%; top:50%; margin-left:-130px; margin-top:-82px;}");
document.writeln(".lzdc_swt22 p{ padding-top:96px; text-align:center; font-size:14px;}");
document.writeln(".lzdc_swt22 p a{ display:inline-block; width:94px; height:28px; border-radius:12px; background:#007575; line-height:28px; color:#fff; margin:0 13px;}");
document.writeln(".lzdc_swt22 p a:nth-child(2){ background:#cc0000;}");

document.writeln("</style>");

document.writeln("<div id=\"best3g_swt\" style=\'position:absolute;top:50%;left:100%; margin-left: -30px; margin-top: 150px; width:30px;height:82px; display:none; z-index:10000;\'>");
document.writeln("</div>");
//弹窗判断
 var aa = window.location.href;
if(aa.indexOf('/qcd/')!=-1  ||  aa.indexOf('/zt/wlqd/')!=-1  ||  aa.indexOf('/zt/qcdzl/')!=-1  
 ||  aa.indexOf('/zt/qcd/')!=-1)
{document.writeln("<div class=\"lzdc_swtqcd lzdc_swt22\" id=\"best3g_swt_YQ\" style=\'display:none; z-index:10000;\'>");
document.writeln("	<div align=\"right\"><img src=\"/swt/img/lx_gzb1.png\" onclick=\'hideswt();\' style=\'cursor: pointer;\' width=\"32\" height=\"33\" /></div>");
document.writeln("    <p><a href=\"/swt/\">点击了解</a><a href=\"/swt/\">在线预约</a></p>");
document.writeln("</div>");}
else if(aa.indexOf('/tf/')!=-1 ||  aa.indexOf('/zt/bmp/')!=-1 ||  aa.indexOf('/zt/tf/')!=-1)
{document.writeln("<div class=\"lzdc_swttf lzdc_swt22\" id=\"best3g_swt_YQ\" style=\'display:none; z-index:10000;\'>");
document.writeln("	<div align=\"right\"><img src=\"/swt/img/lx_gzb1.png\" onclick=\'hideswt();\' style=\'cursor: pointer;\' width=\"32\" height=\"33\" /></div>");
document.writeln("    <p><a href=\"/swt/\">点击了解</a><a href=\"/swt/\">在线预约</a></p>");
document.writeln("</div>");}
else if(aa.indexOf('/xmz/')!=-1  ||  aa.indexOf('/zt/xmz/')!=-1 ||  aa.indexOf('/zt/xmzzl/')!=-1)
{document.writeln("<div class=\"lzdc_swtxmz lzdc_swt22\" id=\"best3g_swt_YQ\" style=\'display:none; z-index:10000;\'>");
document.writeln("	<div align=\"right\"><img src=\"/swt/img/lx_gzb1.png\" onclick=\'hideswt();\' style=\'cursor: pointer;\' width=\"32\" height=\"33\" /></div>");
document.writeln("    <p><a href=\"/swt/\">点击了解</a><a href=\"/swt/\">在线预约</a></p>");
document.writeln("</div>");}
else if(aa.indexOf('/sz/')!=-1  ||  aa.indexOf('/zt/szzl/')!=-1 ||  aa.indexOf('/zt/sz/')!=-1)
{document.writeln("<div class=\"lzdc_swtsz lzdc_swt22\" id=\"best3g_swt_YQ\" style=\'display:none; z-index:10000;\'>");
document.writeln("	<div align=\"right\"><img src=\"/swt/img/lx_gzb1.png\" onclick=\'hideswt();\' style=\'cursor: pointer;\' width=\"32\" height=\"33\" /></div>");
document.writeln("    <p><a href=\"/swt/\">点击了解</a><a href=\"/swt/\">在线预约</a></p>");
document.writeln("</div>");}
else
{document.writeln("<div class=\"lq_swt\"   id=\"best3g_swt_YQ\" style=\'display:none; z-index:10000;\'>");
document.writeln("    <div class=\"lq_xtop\">");
document.writeln("        <h3>皮肤科医生在线</h3>");
document.writeln("        <span onclick=\'hideswt();\' style=\'cursor: pointer;\'><img src=\"/swt/img/lq_gb.png\"></span></div>");
document.writeln("    <p class=\"lb_as\">值班医生正在与您通话<br>");
document.writeln("        <span class=\"red\"><a href=\'/swt/\'>点击查看</a></span></p>");
document.writeln("    <p class=\"lb_xx\"><a href=\'/swt/\'><strong><font color=\"red\">皮肤病医生挂号</strong></font></a><a href=\'/swt/\' class=\"lq_zx\">立即咨询</a></p>");
document.writeln("</div>");} 






/* document.writeln("<div id=\"best3g_swt\" style=\'position:absolute;top:50%;left:100%; margin-left: -30px; margin-top: 150px; width:30px;height:82px; display:none; z-index:10000;\'>");
document.writeln("</div>");
  document.writeln("<div class=\"lq_swt\"   id=\"best3g_swt_YQ\" style=\'display:none; z-index:10000;\'>");
document.writeln("    <div class=\"lq_xtop\">");
document.writeln("        <h3>皮肤科医生在线</h3>");
document.writeln("        <span onclick=\'hideswt();\' style=\'cursor: pointer;\'><img src=\"/swt/img/lq_gb.png\"></span></div>");
document.writeln("    <p class=\"lb_as\">值班医生正在与您通话<br>");
document.writeln("        <span class=\"red\"><a href=\'/swt/\'>点击查看</a></span></p>");
document.writeln("    <p class=\"lb_xx\"><a href=\'/swt/\'><strong><font color=\"red\">皮肤病医生挂号</strong></font></a><a href=\'/swt/\' class=\"lq_zx\">立即咨询</a></p>");
document.writeln("</div>");  */

showzx(); 

document.write('<script language="javascript" src="http://pet.zoosnet.net/JS/LsJS.aspx?siteid=PET57492250&float=1&lng=cn"></script>');

document.writeln('<div class="fixed-tel"><a href="tel:02363662577"><img src="/swt/img/fixed-tel.gif" alt=""></a></div>');

document.writeln('<script type="text/javascript" language="javascript" src="/swt/db.js"></script>');

