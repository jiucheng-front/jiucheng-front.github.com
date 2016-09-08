
document.writeln("<style>");
document.writeln(".mnone{ display:none;}");
document.writeln(".dialog-close{position: absolute;top:-57px; right:0; width:37px;height:57px; opacity: 1; -webkit-transition: opacity .35s ease-out, -webkit-transform .35s ease-out; transition: opacity .35s ease-out, transform .35s ease-out;}");
document.writeln(".dialog-close img{width: 100%; height: auto;}");
document.writeln(".FIX-dialog{width:100%;height:100%; position:fixed; z-index:99999;left:0%;top:0%; background:rgba(0,0,0,.6);}");
document.writeln(".dialog-body{width:250px;height:320px; border-radius:5px;position:fixed; z-index:999999;left:50%;top:50%; margin:-160px 0 0 -125px; background:#fff;font-family: \'Microsoft YaHei\';}");
document.writeln(".dialog-chat-code{width:80.5%; height: 55.434%; margin: 0 auto;}");
document.writeln(".dialog-chat-code img{width:100%;}");
document.writeln(".dialog-chat-top{height:30px;}");
document.writeln(".dialog-chat-title{ text-align:center;width:68%; margin:0 auto;}");
document.writeln(".dialog-chat-title div{ margin:0px auto;}");
document.writeln(".dialog-chat-title span{ color:#6e2222; font-size:14px; display:block;border-bottom: solid 1px #eee; padding-bottom:15px;}");
document.writeln("</style>");
document.writeln("");


document.writeln("<div class=\"FIX-dialog mnone\"></div>");
document.writeln("<div class=\"dialog-body mnone\">");
document.writeln("<div class=\"dialog-close\">");
document.writeln("        <img src=\"/templets/xintemp/images/dialog-close.png\">");
document.writeln("</div>");
document.writeln("         <div class=\"dialog-main dialog-chat\" style=\"display: block;\">");
document.writeln("            <div class=\"dialog-chat-top\"></div>");
document.writeln("            <div class=\"dialog-chat-code\">");
document.writeln("                <img src=\"/templets/xintemp/images/bottom-dialog-code.jpg\">");
document.writeln("            </div>");
document.writeln("            <div class=\"dialog-chat-title\">");
document.writeln("                <div>微信公众号</div>");
document.writeln("                <span>济南中研皮肤病医院</span>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("</div>");
document.writeln("");
document.writeln("<script src='/templets/xintemp/js/dbtc.js' language='javascript'></script>");

	
 document.writeln("<script type=\"text/javascript\">");
document.writeln("		 $(\".btnhs\").click(function(){");
document.writeln("			$(\".hideNav\").stop(true,true).slideToggle(); ");
document.writeln("");
document.writeln("	})");
document.writeln("");
document.writeln("	");
document.writeln("");

document.writeln("");
document.writeln("	");
document.writeln("");
document.writeln("");
document.writeln("</script>");
 
 
 
document.writeln("<script>");
document.writeln("$(function(){");
document.writeln("	$('#statBtn').click(function(){");
document.writeln("		 $('.dialog-close').css({'opacity':1,'-webkit-transform': 'opacity 2s ease-out','transform': 'opacity 2s ease-out'});");
document.writeln("		$(\".dialog-body,.FIX-dialog\").fadeIn();");
document.writeln("    })");
document.writeln("	");
document.writeln("    $('.dialog-close').click(function(){");
document.writeln("        $('.dialog-close').css({'opacity':0,'-webkit-transform': 'none','transform': 'none'});//关闭按钮还原初始化");
document.writeln("		$(\".dialog-body\").slideUp();");
document.writeln("		$(\".FIX-dialog\").fadeOut();");
document.writeln("    })");
document.writeln("})");
document.writeln("</script>");
document.writeln("");





