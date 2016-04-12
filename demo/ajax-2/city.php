<?php
	// 1. 接收客户端发送的请求数据
	$province = $_POST['province'];
	switch ($province){
		case '山东省':
			$cities = '["青岛市","济南市","威海市","日照市","德州市"]';
			break;
		case '辽宁省':
			$cities = '["沈阳市","大连市","丹东市","铁岭市","锦州市"]';
			break;
		case '吉林省':
			$cities = '["长春市","松原市","通化市","四平市","白城市"]';
			break;
	}
	echo $cities;
?>