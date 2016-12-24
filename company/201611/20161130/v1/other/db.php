var _FooterFloat = '<div class="footbottom"></div>';
var _SwtHtml = '<div class="swtdw" id="swtdingwei">' +
  '<div class="swtb" onclick="onclick=\"openZoosUrl();LR_HideInvite();return false;" >' +
  '</div></div>';
document.write(_FooterFloat);
document.write(_SwtHtml);
document.write('<audio id="chatAudio"><source src="/swt/images/42.wav" type="audio/wav"><source src="/swt/images/42.mp3" type="audio/mpeg"></audio>');
document.write('<style type="text/css">.swt-db { display: block; }.swt-db img { width: auto; }.float_container { z-index:9999999999999; display: none; position: fixed; width: 100%; left: 0; bottom: 0;  background-image: -moz-linear-gradient(#abe5ef, #deceb7); background-image: -webkit-linear-gradient(#abe5ef, #deceb7); background-image: -o-linear-gradient(#abe5ef, #deceb7); background-image: linear-gradient(#abe5ef, #deceb7); }.cf { zoom: 1; }.cf:before, .cf:after { display: block; content: ""; }.cf:after { clear: both; }.db { display: block}.shadow { z-index: 999990; display:none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(0,0,0,.2); }.float_container .title_f { background:#13a4db; font-size: 20px; line-height: 40px; text-align: center; color: #fff; }.float_container .title_f a {  }.float_container dl { display: none; margin: 0; padding: 0; }.float_container dt { display: inline-block; width: 14%; float: left; margin: 3px 0 0 8px; text-align: center; }.float_container dt img { max-width: 100%; border: 0; border-radius: 50%; vertical-align: middle; -ms-interpolation-mode: bicubic; }.float_container dd { margin: 0; display: inline-block; position: relative; width: 68%; float: left; margin-top: 10px; }.float_container .time { font-size: 12px; line-height: 1.6; color: #6c6761; text-align: center; width: 100%; margin: 0; height: 1.6em; }.float_container .box1 { font:14px simsun,Microsoft YaHei,arial; text-align:left; color:#000; position: relative; margin-left: 5%; padding: 10px; border:1px solid #7ebbe4; border-top-color:#b2daf0; border-radius: 12px; box-shadow:0 3px 0 #3ea0dd, inset 0 1px 1px #fff; background-image: -moz-linear-gradient(#c6e5fa, #a6d7f7); background-image: -webkit-linear-gradient(#c6e5fa, #a6d7f7); background-image: -o-linear-gradient(#c6e5fa, #a6d7f7); background-image: linear-gradient(#c6e5fa, #a6d7f7);letter-spacing: -1px; }.float_container .box1 img { width: 22px; vertical-align: bottom; }.float_container .box1:before,.float_container .box1:after { position: absolute; content: ""; }.float_container .box1:before { width: 18px; height: 13px; top: -1px; left: -9px; background: url(/swt/wave.png) 0 0 no-repeat; background-size: 18px; }.float_container .box1:after { width: 40px; height: 26px; bottom: -4px; right: -7px; background: url(/swt/wave.png) 0 0 no-repeat; background-size: 40px; }.float_container .btns { margin-top: 15px; padding: 10px 0; border-top: 1px solid #c7c7c0; border-bottom: 1px solid #979185; background-color: #eaebed; }.float_container .btns a {display: inline-block; width: 39%; height: 2em; float:left; margin:0 5%;border-radius: 12px; border: 1px solid #a6a5a1;  background-color: #fefefe; box-shadow: 0 2px 2px #d1d1d3; font-size: 16px; color:#6e2222; line-height: 2; text-align: center; text-decoration: none; transition:all .3s linear 0s;}.float_container .btns a:hover { border-color: #959490; background-color: #f7f7f7; }@media screen and (max-width: 320px) {.float_container .title_f { font-size: 18px; background-size: 32px; }.float_container dd { width: 73%; }.float_container .box1 { font-size: 13px; }.float_container .btns a { border-radius: 10px; font-size: 15px; }}');
document.write('.float_container .btns cf a:hover {border-color:#959490;background-color: #f7f7f7}');
document.write('#chengse{ background-color:#ed8b0b; border::1px #ed8b0b solid; color:#ffffff;}</style>');

function sj(lbound, ubound) {

return (Math.floor(Math.random() * (ubound - lbound)) + lbound);

}

var i =sj(1,4);






var _fSwtHtm = '<div id="toopl" class="shadow"></div><div id="footTool" class="float_container cf"><div class="title_f"><b style=\"font-size:16px;color:#fff;\">贵阳中医皮肤病医院在线咨询中心 </b><a style="display:inline-block;" href="javascript:void(0);" onclick="toolclose();"  target="_self" ><img style=\" width:30px; height:30px;\" src=\"images/cha.png\"/></a> </div><dl id="tools2" class="cf swt-db"><dt><img src="images/1.jpg.png"></dt><dd><div class="box1">您好，作为在线医生，我有着多年的在线问诊经验，能根据您的症状给您最专业的解答。请问有什么可以帮您的？</div></dd></dl><dl id="tools3" class="cf swt-db"><dt><img src="images/2.jpg.png"></dt><dd><div class="box1"> 避免掉线或等待，可直接点击拨打电话：<a href="tel:085185716090" target="_blank"><b style="color:#f00;">085185716090</b></a></div></dd></dl><div class="btns cf"><a href="tel:085185716090">电话咨询</a><a href=\"javascript:void(0)\" onClick="openZoosUrl();return false;"  target=\"_blank\">立即回复</a></div></div>';



document.write(_fSwtHtm);

window.onload=function(){

	toolshow();

	}



/*获取当前时间*/

	var now = new Date();

	var hh = now.getHours();

	var mm = now.getMinutes();

	var ss = now.getSeconds();

	


	var footTool = document.getElementById("footTool");

	var toopl = document.getElementById("toopl");

	var tools2 = document.getElementById("tools2");

	var tools3 = document.getElementById("tools3");

	setTimeout(toolshow,10000);



	var audio = document.getElementById('chatAudio');

	function testAudio(){audio.play();audio.pause();}



	function toolshow(){

	document.getElementById('swtdingwei').style.display = 'none';

	footTool.className = "float_container db cf";

	toopl.style.display = "none";

	setTimeout(toolshow2,0);

	audio.play();

	}

	function toolshow2(){tools2.style.display = "block";setTimeout(toolshow3,3000);}

	function toolshow3(){tools3.style.display = "block";audio.play();}

	function toolclose(){footTool.className = "float_container";

	toopl.style.display = "none";

	document.getElementById('swtdingwei').style.display = 'block';

	tools2.style.display = "none";

    tools3.style.display = "none";

	

	}


	window.onload=function(){



}

