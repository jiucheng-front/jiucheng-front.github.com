 /*
 *
 * koringz.github.io
 *
 * $author koringz
 * $date 2015-9-20
 * $version 0.1
 *
 * $author koringz
 * $date 2015-12-25
 * $version 0.2
 *
 * $author koringz
 * $date 2015-12-28
 * $version 0.4
 *
 * $author koringz
 * $date 2016-04-03
 * $version 0.5
 * 
 *
 */

(function (w) {
	var cout = 0,current_img_number = 0,setTimes =  null,koringz,koringsition;


	koringz = function () {};

	koringz.prototype.get = function (elem,options) {
		// 这是一个存放东西的仓库，我可以获得参数
		/*
			options {
	        	all_img : Img
			}
		*/
		this.all_img = options.all_img;
		// 图片列的长度
		this.all_img_number = this.all_img.length;
		// 默认图片的宽度
		this.default_img_width = this.all_img[0].offsetWidth;
		// 图片的一半长度
		this.half = this.all_img_number/2;
	};

	koringz.prototype.previous = function (elem,options) {
		// 这是下一张图片的调用逻辑
			cout++;
			this.get(elem,options);
			if (cout == 1) {
				elem.innerHTML += elem.innerHTML;
				elem.style.width = (this.default_img_width)*this.all_img_number*2 + 'px';
			}
			if (current_img_number > 0) {
				current_img_number -= 1;
			}
			else {
				current_img_number = this.half - 1;
				elem.style.left = -this.default_img_width * this.half + 'px';
			}
			this.readyStatus(elem)
	};

	koringz.prototype.next = function (elem,options) {
		// 这是下一张图片的调用逻辑
			cout++;
			this.get(elem,options);
			if (cout == 1) {
				elem.innerHTML += elem.innerHTML;
				elem.style.width = (this.default_img_width)*this.all_img_number*2 + 'px';
			}
			if (current_img_number < this.all_img_number - 1) {
				current_img_number += 1;
			}
			else {
				current_img_number = this.half;
				elem.style.left = -this.default_img_width * (this.half - 1) + 'px';
			}
			this.readyStatus(elem)
	};

	koringz.prototype.readyStatus = function (el) {
		this.current_scroll_Width = -(this.default_img_width * current_img_number);
		this.scroll(el, this.current_scroll_Width)
	};

	koringz.prototype.scroll = function (elem,currentscrollwidth) {
		if (setTimes !== null && setTimes !== undefined) {
			clearInterval(setTimes)
		}
		setTimes = setInterval(function() {
			var moving = elem.offsetLeft;
			
			scroll_Width = parseInt(moving);
			speed = (currentscrollwidth - scroll_Width) / 6; // 从开始为100ms 到结束为0ms 
			speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);

			if (scroll_Width !== currentscrollwidth) {
				var v = scroll_Width + speed;
				elem.style.left = v + 'px';
			} else {
				clearInterval(setTimes);
				setTimes = null;
			}
		}, 36);
	};

	koringsition = function () {
		return new koringz();
	}();

	w.k = koringsition;

})(window)







/*
	轮播图片有2出需要注意
	1.设置定时器的时间参数必须用对象声明，不可用变量声明定时器的值
	2.每次滚动的图片数目的参数必须在全局下声明，每次滚动图片就会自动更新全局下声明图片数目的参数值
	3.如果图片过多，点击播放图片会出现掉帧现象，当播放到最后几张图片出现黑屏
*/


/*	
	避免了全局变量的实现
	点击第一次，让他自动添加一个滚动的图片数目
	修复了全局变量为原型对象的属性
	修复了调用函数使用对象即可
	如何去掉innerhtml，改为设置left达到滚动的效果
	cout++;
	if (cout == 1) {
		elem.innerHTML += elem.innerHTML;
	}
	
	(function (koringz) {})(window);
*/