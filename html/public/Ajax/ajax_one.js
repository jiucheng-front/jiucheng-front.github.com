function Ajax(type, url, data, success, failed){
 	var domain='https://' + window.location.host + '/';
	var url=domain+url;
    // 创建ajax对象
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    var type = type.toUpperCase();
    // 用于清除缓存
    var random = Math.random();
    if(typeof data == 'object'){
        var str = '';
        for(var key in data){
			str+='&'+key+'='+data[key];
		}
        data = str.slice(1);
    }
    if(type == 'GET'){
        if(data){
            xhr.open('GET', url + '?' + data, true);
        } else {
            xhr.open('GET', url + '?t=' + random, true);
        }
        xhr.send();
    } else if(type == 'POST'){
        xhr.open('POST', url, true);
        // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
    // 处理返回数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
				var res=JSON.parse(xhr.responseText);
                success(res);
            } else {
                if(failed){
                    failed(xhr.status);
                }
            }
        }
    }
}
 
// 测试调用
var sendData ={
		"HTTP_USER_TOKEN":"9907fd6462e52fc064f24d0c947bbcd4",
		"HTTP_USER_UID":1024317, 
		"anchor_pfid":1000054,
		"broke_pfid":1024317,
		"date":"2017-06-13"
	};
Ajax('post', 'v2/html/broke/get_broke_ranked_info', sendData, function(data){
    console.log(data);
}, function(error){
    console.log(error);
});