//JavaScript Document
document.writeln("                        <!--guahao-->");
document.writeln("                        <section id=\"guahao\">");
document.writeln("                                <section class=\"guahao-logo\"><img src=\"/img_new/guahao-logo.jpg\" alt=\"\"/></section>");
document.writeln("                                <h2>积极响应国家“网上预约挂号”政策</h2>");
document.writeln("                                <form method=\"post\" action=\"http://swt.gssmart.com/guahao/sockt.php\" name=\"comment\">");
document.writeln("                                        <div class=\"clear-fix\">");
document.writeln("                                                <label class=\"fl\" for=\"username\">姓名：</label>");
document.writeln("                                                <input id=\"username\" name=\"username\" class=\"fr\" placeholder=\"请输入你的姓名\" required=\"required\" type=\"text\">");
document.writeln("                                        </div>");
document.writeln("                                        <div class=\"clear-fix\">");
document.writeln("                                                <label class=\"fl\">性别：</label>");
document.writeln("                                                <article>");
document.writeln("                                                        <input name=\"sex\" id=\"man\" checked=\"checked\" type=\"radio\">");
document.writeln("                                                        <label for=\"man\">男</label>");
document.writeln("                                                        <input name=\"sex\" id=\"woman\" type=\"radio\">");
document.writeln("                                                        <label for=\"woman\">女</label>");
document.writeln("                                                </article>");
document.writeln("                                        </div>");
document.writeln("                                        <div class=\"clear-fix\">");
document.writeln("                                                <label class=\"fl\" for=\"age\">年龄：</label>");
document.writeln("                                                <input name=\"age\" id=\"age\" class=\"fr\" placeholder=\"年龄\" required=\"required\" type=\"tel\">");
document.writeln("                                        </div>");
document.writeln("                                        <div class=\"clear-fix\">");
document.writeln("                                                <label class=\"fl\" for=\"time\">就诊时间:</label>");
document.writeln("                                                <input name=\"time\" id=\"time\" class=\"fr\" placeholder=\"请选择您的就诊时间\" required=\"required\" type=\"date\">");
document.writeln("                                        </div>");
document.writeln("                                        <div class=\"clear-fix\">");
document.writeln("                                                <label class=\"fl\" for=\"phone\">联系方式:</label>");
document.writeln("                                                <input name=\"tel\" id=\"phone\" class=\"fr\" placeholder=\"请输入你的联系方式\" required=\"required\" type=\"tel\">");
document.writeln("                                        </div>");
document.writeln("                                        <div class=\"clear-fix\">");
document.writeln("                                                <label class=\"fl\" for=\"content\">疾病：</label>");
document.writeln("                                                <textarea type=\"text\" name=\"content\" id=\"content\" class=\"fr\" placeholder=\"请简述病情\" required=\"required\"></textarea>");
document.writeln("                                        </div>");

document.writeln("                                        <div class=\"submit\">");
document.writeln("                                                <input type=\"hidden\" value=\"101\" name=\"focus_depart_id\">  ");
document.writeln("                                                <input value=\"提交在线挂号\" onclick=\"return checkForm();\" type=\"submit\">");
document.writeln("                                        </div>");
document.writeln("                                </form>");
document.writeln("                                <p><em>温馨提醒：</em>预约成功患者，系统会将专家号和医院地址下发到您的手机，请注意查收。</p>");
document.writeln("                        </section>");
document.writeln("<style>");
document.writeln("#uyan_frame img{ width:auto;}");
document.writeln("</style>");
document.writeln("		   <!-- UY BEGIN -->");
document.writeln("			<div id=\"uyan_frame\"></div>");
document.writeln("			<script type=\"text/javascript\" src=\"http://v2.uyan.cc/code/uyan.js?uid=2061447\"></script>");
document.writeln("			<!-- UY END -->");
document.writeln("                        <footer>");
document.writeln("                                <h2><img src=\"/img_new/footer-logo.jpg\" alt=\"\"/></h2>");
document.writeln("                                <p>医院地址：上海杨浦区黄兴路286号</p>");
document.writeln("                                <p>门诊时间 : 08:00--17:00 （无假日医院）</p>");
document.writeln("                                <p>咨询电话：<a href=\"tel:02152721929\">021-52721929</a></p>");
document.writeln("                                <section>");
document.writeln("                                        <a href=\"tel:02152721929\"><em><img src=\"/img_new/swt-phone.png\" alt=\"\"/></em>电话咨询</a>");
document.writeln("                                        <a href=\"javascript:void(0);\" onclick=\"openZoosUrl();return false;\"><em><img src=\"/img_new/swt-consult.png\" alt=\"\"/><i></i></em>在线咨询</a>");
document.writeln("                                </section>");
document.writeln("                        </footer>");
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
document.writeln("                        <a href=\"#\"><img src=\"/images/topBtn.png\"/></a>");
document.writeln("                </div>");
document.write(' <script language="javascript" src="/js/jquery.js"></script> ');