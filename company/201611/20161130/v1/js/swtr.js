document.writeln("<style type=\"text/css\">");

document.writeln(".swttc{position: fixed; z-index: 9999; display: flex;right: 0;top: 50%;transform: translate(0,-50%);}");

document.writeln(".swtr{position: relative;width: 100%;height: 100%;}");

document.writeln(".swtri{width: 29px;display: block; }");

document.writeln(".swtrm{position: absolute;right: 30px;top: 0;width: 270px; height: 100%;z-index: -1;display: none;}");

document.writeln(".swtrm a{display: block;}");

document.writeln(".swtrm a img{display: block;width: 100%;}");

document.writeln("    </style>");





document.writeln("<div class=\"swttc\">");

document.writeln("<div class=\"swtr\">");

document.writeln("        <a href=\"tel:085185716090\">");

document.writeln("    <img src=\"images/swt_r1.jpg\" class=\"swtri\">");

document.writeln("        </a>");

document.writeln("</div>");

document.writeln("</div>");







$(".swtr").click(function() {

    $('#swtrm').toggle();

}

    );

