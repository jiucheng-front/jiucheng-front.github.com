//µÚ¶þ°æ
document.createElement("tz")
document.writeln('<style type=text/css>');
document.writeln('.tzclear{ font-size:0; line-height:0; clear:both; overflow:hidden; zoom:1; }');
document.writeln('.tznav{ zoom:1;}');
document.writeln('.tzdingwei{ position:fixed!important; position:absolute; _top:expression(eval(document.documentElement.scrollTop)); top:0; left:0; width:100%;z-index:999;}');
document.writeln('</style>');
$(window).load(function(){
	var tznavwrap = $("#tznav");
	var tznav = $(".tznav");
	var tzname='tz';
	var tzcontname="tzclear";
	var tzhover="tzhover";
	var tzdingwei="tzdingwei";
	var tznavtitle = tznav.find(tzname);
	var tznavname='#'+tzname;
	var tznavtop = tznavwrap.offset().top;
	var tznavwraphei=tznavwrap.height();
	var tztitle=tznavwrap.find(tzname);
	var tzcont="."+tzcontname;
	$("body").append('<div class='+tzcontname+' id='+tzname+(tznavtitle.size()+1)+'></div>');
	tznavtitle.each(function(index){
		$(this).click(function(){
			tznavtitle.removeClass(tzhover);
			$(this).addClass(tzhover);
			$("body,html").animate({scrollTop:$(tzcont).eq(index).offset().top-tznavwraphei})
		});
		$(window).scroll(function(){
			if ($(window).scrollTop() >= tznavtop-tznavwrap.height()*2){
				tznavtitle.removeClass(tzhover);
				var tzgeshu=tznavtitle.length.valueOf();
				for(i=0;i<=tzgeshu;i++){
					if(i==tzgeshu){
						if ($(window).scrollTop() >= $(tznavname+(i+1)).offset().top-tznavwrap.height()*2 || $(window).scrollTop() < $(tznavname+1).offset().top-tznavwrap.height()){
							tznavtitle.removeClass(tzhover);
						}
					}
					else{
						if ($(window).scrollTop() >= $(tznavname+(i+1)).offset().top-tznavwrap.height()*2 && $(window).scrollTop() < $(tznavname+(i+2)).offset().top-tznavwrap.height()*2){
							tznavtitle.removeClass(tzhover);
							tznavtitle.eq(i).addClass(tzhover);
						}
					}
				};
				return false;
			}
		});
	});
	$(window).scroll(function(){
		if ($(window).scrollTop() > tznavtop){
			tznav.addClass(tzdingwei);
		}
		else{
			tznav.removeClass(tzdingwei);
		}	
	});
	
});

