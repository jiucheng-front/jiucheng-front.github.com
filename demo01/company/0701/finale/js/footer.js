
document.writeln("                        <!--swt-->");
// JavaScript Document
//加载商务通路径代码
document.write(' <script language="javascript" src="http://pdt.zoosnet.net/JS/LsJS.aspx?siteid=PDT83653494&float=1"></script> ');
//商务通代码
function swt(){
	window.open('/call.html');
}
//屏蔽自带商务通侧边悬浮框
document.write('<style type="text/css">img{border:none;} #LRfloater1 , #LRfloater0{display:none;}</style>');
document.writeln("                        <section id=\"swt\">");
document.writeln("                                <article><img src=\"/img_new/swt-close.jpg\" alt=\"\"/></article>");
document.writeln("                                <h2>专家在线咨询平台</h2>");
document.writeln("                                <h3>Experts online consultation platform</h3>");
document.writeln("                                <section>");
document.writeln("<form method=\"post\" action=\"http://swt.gssmart.com/guahao/sockt.php\" name=\"comment\">");
document.writeln("										<input type=\"tel\" placeholder=\"请输入您的电话号码\" name=\"tel\" id=\"phone1\" placeholder=\"请输入你的联系方式\" required type=\"tel\"/>");
document.writeln("                                      <input type=\"hidden\" name=\"focus_depart_id\" value=\"112\">");
document.writeln("										<input type=\"submit\" value=\"免费回电\" onclick=\"return checkForm1();\"/>");
document.writeln("</form>");
document.writeln("                                </section>");
document.writeln("                                <a href=\"tel:02152721929\"><em><img src=\"/img_new/swt-phone.png\" alt=\"\"/></em>电话咨询</a>");
document.writeln("                                <a href=\"javascript:void(0);\" onclick=\"openZoosUrl();return false;\"><em><img src=\"/img_new/swt-consult.png\" alt=\"\"/><i></i></em>在线咨询</a>");
document.writeln("                        </section>");
document.writeln("        	<style>");
document.writeln("			 .hui{ width:13%; display:inline; position:fixed; bottom:10%; right:2%;}");
document.writeln("			 .hui a{ width:100%;}");
document.writeln("			 .hui img{ width:100%;}");
document.writeln("		</style>");
document.writeln("                <div class=\"hui\" id=\"hui\">");
document.writeln("                        <a href=\"#\"><img src=\"images/topBtn.png\"/></a>");
document.writeln("                </div>");
 