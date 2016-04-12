<?php
	// 接收客户端发送的请求数据 - state
	$state = $_REQUEST['state'];
	// 判断$state的值
	if($state == 1){// 获取省份
		echo '山东省,辽宁省,吉林省';
	}else{// 获取城市
		$province = $_POST['province'];
		switch ($province){
			case '山东省':
				echo '青岛市,济南市,威海市,日照市,德州市';
				break;
			case '辽宁省':
				echo '沈阳市,大连市,铁岭市,丹东市,锦州市';
				break;
			case '吉林省':
				echo '长春市,松原市,吉林市,通化市,四平市';
				break;
		}
	}
?>