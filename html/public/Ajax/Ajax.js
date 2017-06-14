/*
* @Author: wangjianfei
* @Date:   2017-04-28 15:32:29
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-05-22 11:16:44
*/
'use strict';
// 1、封裝AJAX函數
function Ajax(option){
	// 定义domain,方便环境切换
	var domain='https://' + window.location.host + '/';
	var url=domain+option.urlStr;
	var type=option.ajaxType;
	var data=option.ajaxData;
	var xhrRequest=new XMLHttpRequest();
	var str=null;
	xhrRequest.open(type,url,true);
	if(type==="POST"&&data!=null){
		xhrRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
		for(var key in data){
			str+='&'+key+'='+data[key];
			str=str.slice(1);
		}
	}
	xhrRequest.onreadystatechange=function(){
		if(xhrRequest.readyState==4&&xhrRequest.status==200||xhrRequest.status==304){
			// 1、格式化返回的数据
			var responseData=JSON.parse(xhrRequest.responseText);
			console.log(responseData);
		}
	}
	xhrRequest.send(str);
}
// 2、POST：定義請求參數
var postOption={
	ajaxType:"POST",
	urlStr:"v2/html/broke/get_broke_ranked_info",
	ajaxData:{										
		"HTTP_USER_TOKEN":token,
		"HTTP_USER_UID":pfid, 
		"anchor_pfid":anchor_pfid,
		"broke_pfid":pfid,
		"date":date
	}
}

Ajax(postOption);

//3、GET：定义请求参数
var getOption={
	ajaxType:"GET",									//必须：
	urlStr:"v2/html/broke/get_broke_ranked_info",	//必须：
	ajaxData:null									//必须：		
}
Ajax(getOption);

// 注意：使用说明option必须
option={
	//1、ajaxType必须："GET"或者"POST"
	ajaxType:"",
	//2、urlStr必须："string类型"
	urlStr:"",
	//3、必须：POST时候为object{key:value}，GET的时候直接为：null
	ajaxData:null
}