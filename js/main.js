/**
 * Created by Administrator on 2016/5/20.

 */
 require.config({
 	paths:{
 		"jQuery":["jquery-2.2.3.min","jquery-1.11.3"],
 		"willRotate":"list/willRotate.min"
 	},
 	shim:{
 		"willRotate":["jQuery"]
 	}
 });
 require(["jQuery","willRotate"]);