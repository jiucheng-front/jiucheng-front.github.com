window.onload=function(){
	var myImg=document.getElementById("myImg");
	myImg.addEventListener("dragstart",mydragstart);
	function mydragstart(event){
		var myData=myImg.src;
		var trans=event.dataTransfer;
		trans.setData("text",myData);
	}
	var d2=document.getElementById("d2");
//	console.log(d2,myImg);
	d2.addEventListener("dragover",mydragover);
	d2.addEventListener("drop",mydrop);
	function mydragover(event){
		event.preventDefault();//阻止默认
	}
	function mydrop(event){
		var trans=event.dataTransfer;
		var mysrc=trans.getData("text");
		newImg.src=mysrc;
		trans.clearData("text");
		myImg.src="";
//		d1.innerHTML="";
	}
	var newImg=document.getElementById("newImg");
	var d1=document.getElementById("d1");
	newImg.addEventListener("dragstart",willstart);
	function willstart(event){
		var newData=newImg.src;
		var trans=event.dataTransfer;
		trans.setData("text",newData);
	}
	d1.addEventListener("dragover",mydragover);
	d1.addEventListener("drop",willdrop);
	function willdrop(event){
		var trans=event.dataTransfer;
		var newSrc=trans.getData("text");
		myImg.src=newSrc;
		trans.clearData("text");
		newImg.src="";
	}
	
}
