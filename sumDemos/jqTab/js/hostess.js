	document.write(" <style> ")
    document.write(".div_voide")
    document.write("{")
    document.write("position: fixed;")
    document.write("_position:absolute;")
    document.write("bottom:0px;")
    document.write("width: 260px;")
    document.write("height: 400px; ")
    document.write(" z-index:999;")
    document.write("left:0px; ")
    document.write("background-color: Transparent;")
    document.write("}")
    document.write("</style>")
    document.write("<div onmousedown='cc1.create(this)' id='video' class='div_voide' >");
    document.write("<div Style='position: absolute; top:0px; left:0px; z-index:999;'>");
    document.write("<a href=\"JavaScript:;\" onclick=\"hidead()\" style=\"color:Red;text-decoration:none;font-size:12px;\">关闭</a>");
    document.write("</div>");
    document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0'");
    document.write("width='260' height='400' id='FLVPlayer'>");
    document.write("<param name='wmode' value='transparent'>");
    document.write("<param name='movie' value='http://www.cvsn.cn/FLVPlayer_Progressive.swf' />");
    document.write("<param name='salign' value='lt' />");
    document.write("<param name='quality' value='high' />");
    document.write("<param name='scale' value='noscale' />");
    document.write("<param name='FlashVars' value='&MM_ComponentVersion=1&skinName=http://www.cvsn.cn/Clear_Skin_1&streamName=http://www.cvsn.cn/Customervideo/nzsh120/nzsh120_20130827&autoPlay=true&autoRewind=false' />");
    document.write("<embed wmode='transparent' src='http://www.cvsn.cn/FLVPlayer_Progressive.swf' flashvars='&MM_ComponentVersion=1&skinName=http://www.cvsn.cn/Clear_Skin_1&streamName=http://www.cvsn.cn/Customervideo/nzsh120/nzsh120_20130827&autoPlay=true&autoRewind=false'");
    document.write("quality='high' scale='noscale' width='260' height='400' name='FLVPlayer' salign='LT'");
    document.write("type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />");
    document.write("</object>");
    document.write("<div style=\"position: absolute;cursor: pointer;background:url(../images/bg.png);width: 120px; height: 25px; top: 95px; left: 140px;\" onClick=\"javascript:window.open('http://dwl.zoossoft.com/LR/chatwin.aspx?id=LDY31282762')\"></div>");
    document.write("<div style=\"position: absolute; background:url(http://shu.shnk16.com/images/bg.png); cursor: pointer; width: 120px; height: 25px; top: 130px; left: 140px;\" onclick=\"javascript:window.open('http://dwl.zoossoft.com/LR/chatwin.aspx?id=LDY31282762')\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>");
    document.write("<div style=\"position: absolute;  background:url(http://shu.shnk16.com/images/bg.png);cursor: pointer; width: 120px; height: 25px; top: 170px; left: 140px;\" onclick=\"javascript:window.open('http://dwl.zoossoft.com/LR/chatwin.aspx?id=LDY31282762')\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>");
    document.write("<div style=\"position: absolute; background:url(http://shu.shnk16.com/images/bg.png); cursor: pointer; width: 120px; height: 25px; top: 210px; left: 140px;\" onclick=\"javascript:window.open('http://dwl.zoossoft.com/LR/chatwin.aspx?id=LDY31282762')\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>");
    document.write("<div style=\"position: absolute;  background:url(http://shu.shnk16.com/images/bg.png); cursor: pointer; width: 120px; height: 25px; top: 250px; left: 140px;\" onclick=\"javascript:window.open('http://dwl.zoossoft.com/LR/chatwin.aspx?id=LDY31282762')\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>");

    document.write("</div>");
    function hidead() {
        var my = document.getElementById("video");
        if (my != null)
            my.parentNode.removeChild(my);
    }
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version = b_version.split(";");
    var trim_Version = version[1].replace(/[ ]/g, "");
    if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
        function rightBottomAd() {
            var abc = document.getElementById("video");
            abc.style.top = document.documentElement.scrollTop + document.documentElement.clientHeight - 400 + "px";
            setTimeout(function () { rightBottomAd(); }, 50);
        }
        rightBottomAd();
    }
    else {


    }