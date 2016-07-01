// JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
**********************************/
function addEvent(obj,ev,fn){obj.attachEvent?obj.attachEvent('on'+ev,function(){fn.call(obj,window.event);}):obj.addEventListener(ev,fn,false);}
function hasClass(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	return obj.className.match(re);
}
function addClass(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b','ig');
	if(!hasClass(obj,sClass)){
		if(!obj.className){
			obj.className=sClass;
		}else{
			obj.className+=' '+sClass;	
		}
	}
}
function removeClass(obj,sClass){
	var re=new RegExp('(\\s)?\\b'+sClass+'\\b','ig');
	if(hasClass(obj,sClass)){
		obj.className=obj.className.replace(re,'');
	}
}
function offsetTop(obj){
	if(typeof obj=='string'){var obj=document.querySelector(obj);}
	var top=0
	while(obj!=null){
		top+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return top;
}
function jsScrollAddActive(obj,bFalse){
	var bFalse=bFalse||false;
	var obj=document.querySelectorAll(obj);
	var iLen=obj.length;
	var iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var iClentH=document.documentElement.clientHeight;
	add();
	addEvent(window,'scroll',function(){
		iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		add();
	})
	function add(){
		for(var i=0;i<iLen;i++){
			if(iScrollTop+iClentH>=offsetTop(obj[i])){
				addClass(obj[i],'active');
			}else{
				if(bFalse){
					removeClass(obj[i],'active');	
				}
			}
		}	
	}
}