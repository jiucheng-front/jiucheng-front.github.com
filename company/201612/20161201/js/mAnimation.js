/*
	mAnimation.js
	author: owys
	name: 上下划屏动画
	introduction: 每次划屏滚动一屏距离并执行每屏间的动画

	************************************ 使用说明 ************************************
	* HTML结构类似为
	* div>ul>li 共3层
	* div层为绑定touch事件层
	* ul层为执行滚动动画层
	* li层为一共有几屏内容
	* 样式可随意写

	************************************ 调用说明 ************************************
	var mAnimation = new mAnimation({
		bindEle: document.querySelector("#contain"),    //div层 绑定touch事件元素
		touchUl: document.querySelector("#wrapper"),    //ul层 执行滚动动画元素
		touchLi: document.querySelectorAll(".screen"),  //li层 一共有几屏内容
		initCallback: function(){  //初始化时执行回调
			//alert(1)
		},
		callback: function(i){
			//索引从0开始
			//到第几屏展示第几屏的动画
			console.info(i);
			if (i == 1) {
				//展示第二屏动画
			}
			if (i == 2) {
				//展示第三屏动画
			}
			//.....
		}
	});
*/

(function(){
	function scrollAnimation(aniObj){
		this.screenElem = aniObj.touchLi;  //滑动屏LI层
		this.touchAnim = aniObj.touchUl;    //滑动动画UL层
		this.touchRoot = aniObj.bindEle;    //touch事件容器(根元素)
		this.length = aniObj.touchLi.length;
		this.transform = 'webkitTransform';
		this.duration = 'webkitTransitionDuration';
		this.timing = 'webkitTransitionTimingFunction'
		this.initTop = 0;              //触摸时的顶部距离
		this.disY = 0;                 //手指滑动的距离
		this.enddisY = 0;              //元素滑动的总距离
		this.handspeed;
		this.index = 0;
		this.options = {
			speed: self.speed || '400ms',
			easing: self.easing || 'ease-out',
			initCallback: aniObj.initCallback || function(){},
			callback: aniObj.callback || function(){}
		}
		this.init();
	}

	scrollAnimation.prototype = {
		init:function (){
			var innerHeight = window.innerHeight,
				len,
				self = this,
				limH = parseInt(innerHeight / 5),
				transform = this.transform,
				duration = this.duration;

			var screenElem = this.screenElem;  //滑动屏LI层
			var touchAnim = this.touchAnim;    //滑动动画UL层
			var touchRoot = this.touchRoot;    //touch事件容器(根元素)

			//初始化每个元素的高度
			len = screenElem.length;
			for (var i = 0; i < len; i++) {
				screenElem[i].style.height = innerHeight + 'px';
			}

			function touchstart(event){
				event.preventDefault();
				//重新绑定上touch事件（防止只轻击屏幕，不执行TransitionEnd事件）
				touchRoot.addEventListener('touchmove', touchmove, false);
				touchRoot.addEventListener('touchend', touchend, false);

				self.disY = 0;
				self.handspeed = +new Date();
				self.initTop = event.touches[0].pageY;

				self.touchAnim.style[self.duration] = '';
				self.touchAnim.style[self.transform] = 'translate3d(0,' + parseInt(-self.enddisY) + "px" + ',0)';
				//防止动画队列排序bug
				//self.touchAnim.style[self.transform] = 'translateY(' + -self.enddisY + "px" + ')';
			}
			function touchmove(event){
				event.preventDefault();
				var innerHeight = window.innerHeight;
				self.disY = event.touches[0].pageY - self.initTop;//正向是- 反向是+

				//到达屏幕顶部还要下拉
				if (self.enddisY <= 0 && self.disY > 0) {
					self.touchAnim.style[self.transform] = 'translate3d(0,' + (parseInt(-self.enddisY + self.disY) / 3) + "px" + ',0)';
				}
				//到达屏幕底部还要上拉
				else if (self.enddisY >= (self.length - 1) * innerHeight && self.disY < 0) {
					self.touchAnim.style[self.transform] = 'translate3d(0,' + (parseInt(-self.enddisY + self.disY / 3)) + "px" + ',0)';
				}
				else {
					self.touchAnim.style[self.transform] = 'translate3d(0,' + parseInt(-self.enddisY + self.disY) + "px" + ',0)';
				}

			}
			function touchend(event){
				event.preventDefault();

				var height = self.screenElem.offsetHeight;
				var innerHeight = window.innerHeight;
				var limH = parseInt(innerHeight / 5);  //推屏幕多少就滑过去

				//动画结束之前移除touch事件
				touchRoot.removeEventListener('touchmove', touchmove, false);
				touchRoot.removeEventListener('touchend', touchend, false);

				self.handspeed = +new Date() - self.handspeed;

				//到达屏幕顶部还要下拉
				if (self.enddisY <= 0 && self.disY > 0) {
					self.touchAnim.style[self.transform] = 'translate3d(0,' + (-self.enddisY) + "px" + ',0)';
					self.touchAnim.style[self.duration] = self.options.speed;
					self.touchAnim.style[self.timing] = self.options.easing;
					return;
				}

				//到达屏幕底部还要上拉
				if (self.enddisY >= (self.length - 1) * innerHeight && self.disY < 0) {
					self.touchAnim.style[self.transform] = 'translate3d(0,' + (-self.enddisY) + "px" + ',0)';
					self.touchAnim.style[self.duration] = self.options.speed;
					self.touchAnim.style[self.timing] = self.options.easing;
					return;
				}

				//下拉屏幕
				if (self.disY > limH || (self.disY > 0 && self.handspeed < 200)) {
					self.index--; //
					self.enddisY -= innerHeight;

					//回调事件
					//self.options.callback(self.index, 'down');

				}
				//上拉屏幕
				if (self.disY < -limH || (self.disY < 0 && self.handspeed < 200)) {
					self.index++;
					self.enddisY += innerHeight;

					//回调事件
					self.options.callback(self.index, 'up');
					
				}

				self.touchAnim.style[self.transform] = 'translate3d(0,' + -self.enddisY + "px" + ',0)';
				self.touchAnim.style[self.duration] = self.options.speed;
				self.touchAnim.style[self.timing] = self.options.easing;

				//过渡结束后 移除 过渡时间
				self.touchAnim.addEventListener('webkitTransitionEnd', function(){
					self.touchAnim.style[self.duration] = '';
					self.touchAnim.style[self.timing] = '';
					//回调事件
					self.options.callback(self.index, 'down');
					//动画结束后重新绑定上touch事件
					touchRoot.addEventListener('touchmove', touchmove, false);
					touchRoot.addEventListener('touchend', touchend, false);
				}, false);
			}
			self.bindScrollScreen = function(){
				touchRoot.addEventListener('touchstart', touchstart, false);
				touchRoot.addEventListener('touchmove', touchmove, false);
				touchRoot.addEventListener('touchend', touchend, false);
			},
			self.unbindScrollScreen = function(){
				touchRoot.removeEventListener('touchstart', touchstart, false);
				touchRoot.removeEventListener('touchmove', touchmove, false);
				touchRoot.removeEventListener('touchend', touchend, false);
			}

			//touchstart
			touchRoot.addEventListener('touchstart', touchstart, false);
			//touchmove
			touchRoot.addEventListener('touchmove', touchmove, false);
			//touchend
			touchRoot.addEventListener('touchend', touchend, false);
			//初始回调事件
			this.options.initCallback(self.unbindScrollScreen, self.bindScrollScreen);
		}
	}

	window.mAnimation = scrollAnimation;
})();