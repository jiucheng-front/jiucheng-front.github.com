document.writeln("<style>");
document.writeln(".swt_m_now {");
document.writeln("	width: 277px;");
document.writeln("	height: 173px;");
document.writeln("	margin-left: -140px;");
document.writeln("	overflow: hidden;");
document.writeln("	position: fixed;");
document.writeln("	top: 50%;");
document.writeln("	left: 50%;");
document.writeln("	margin-top: -80px;");
document.writeln("	z-index: 999999999999;");
document.writeln("	display: block;");
document.writeln("	background-position: 50% 0% !important;");
document.writeln("	background-repeat: no-repeat no-repeat !important;");
document.writeln("	display: none;");
document.writeln("}");
document.writeln(".swt_m_now  a {");
document.writeln("float:left;");
document.writeln("}");

document.writeln("</style>");
document.writeln('<div class="swt_m_now" style="background-image: url(images/sy.jpg) !important;" ><div style="position:absolute; top:3px; right:5px; z-index:999999999999999999;"><a href="javascript:void(0)" onClick="hidecenter()" target="_self"><img border="0" src="images/swtClose.jpg"></a></div><a   style="width:277px; height:116px; display:block; text-decoration:none;">&nbsp;</a><div style="padding:0 0 0 20px;"><a href="tel:085185716090" target="_blank"><img src="images/left.png" style="margin-top:10px"></a><a   style="margin-left:15px" href="javascript:void(0);" onClick="openZoosUrl();return false;" target="_blank"><img src="images/right.png" style="margin-top:10px"></a></div></div>');
setTimeout("showcenter()",5000);
function showcenter(){
	$(".swt_m_now").slideToggle();
}
function hidecenter()
{
	$(".swt_m_now").slideToggle();
	setTimeout("showcenter()",25000);
}

document.writeln("<script type=\"text/javascript\" src=\"/swt/show.js\" ></script>");


