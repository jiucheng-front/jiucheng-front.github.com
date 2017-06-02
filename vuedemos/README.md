### 一、常用语法
+ 原生中阻止冒泡：e.stopPropagation，vue中直接：@event.stop='fn'即可
	+ event.cancelBubble=true与e.stopPropagation()，大部分说前者是阻止IE，后者是阻止Chrome、Opera、Firefox，但是确切的说在新版本的chrome和opera中已经支持，推荐
+ 原生中的阻止默认行为：event.preventDefault()；vue中直接：@click.prevent='fn'
+ 可以获取事件对象的很多属性值：$event.clientX（事件的X坐标）,$event.keyCode(事件的键盘key值)，vue中常用的按键修饰符

+ v-bind绑定属性，eg:v-bind:src,简写： :src='value'
+ :class='[a,b]',ab对应的是data里的数据，数据再对应calssName
+ :class='{a:true,b:false}',a对应的直接是calssName,true和false可以对应data里的数据，配置相关的className是否生效
+ :style={json}

二 过滤器，2.0+ 已經不支持
+ {{msg|filterA|filterB}}
+ uppercase大写，lowercase小写，capitalize首字母大写

三 交互 $http (ajax),引入官方推荐的vue-resource
+ get
+ post
+ jsonp
+ https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a
+ https://sug.so.360.cn/suggest?callback=suggest_so&word=a

```javascript

	//请求get
	get:function(){
		this.$http.get(url).then(function(res){
			//成功
			this.data=response.body;
		},function(res){
			//error
		});
	}

	// 发送get
	get:function(){
		this.$http.get(url,{
			a:xx,
			b:xxx
		}).then(function(res){
			//success
			this.data=response.body;
		},function(res){
			//error
		});
	}

	//post
	post:function(){
		this.$http.post(url,{
			a:xxx,
			b:xxx
		}).then(function(res){
			//success
			this.data=response.body;
		},function(res){
			//error
		});
	}


```