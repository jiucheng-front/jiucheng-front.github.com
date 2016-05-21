/**
 * Created by Administrator on 2016/5/20.

 */
 require.config({
 	paths:{
 		"jQuery":["http://cdn.bootcss.com/jquery/1.11.3/jquery.min","jquery-1.11.3"],
 		"willRotate":"list/willRotate.min"
 	},
 	shim:{
 		"willRotate":["jQuery"]
 	}
 });
 require(["jQuery","willRotate"]);