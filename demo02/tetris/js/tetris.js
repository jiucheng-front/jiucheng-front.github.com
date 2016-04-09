window.$=HTMLElement.prototype.$=function(selector){
	return (this==window?document:this).querySelectorAll(selector);
}
var tetris={
	RN:20,//总行数
	CN:10,//总列数
	CSIZE:26,//每个格子的宽高都是26px
	OFFSET_X:15,//每个单元格的左侧都要加15px
	OFFSET_y:15,//每个单元格的上面都要加15px
	pg:null,//保存游戏主界面对象
	currShape:null,//专门保存正在移动的图形对象
	nextShape:null,//八、专门保存下一个图形
	interval:500,//每秒重绘一次==>下落的速度
	timer:null,
	wall:[],//六、保存所有停止的下落的方块
	state:1,//十、保存游戏当前状态
	STATE_RUNNING:1,//十、游戏正在运行
	STATE_GAMEOVER:0,//十、游戏结束
	STATE_PAUSE:2,//十、游戏暂停
	IMG_GAMEOVER:"img/game-over.png",
	IMG_PAUSE:"img/pause.png",
	SCORES:[0,10,50,80,200],//十三,要加的分数档位
	score:0,//十三、当前总分
	lines:0,//十三、当前总行数
	//十、为游戏添加不同状态的图片
	paintState:function(){//根据当前游戏状态，为游戏添加不同的图片
		var img=new Image();
		switch(this.state){
		//如果当前状态是STATE_GAMEOVER
		case this.STATE_GAMEOVER:
		//		img.src设置为IMG_GAMEOVER
			img.src=this.IMG_GAMEOVER;
			break;
		//如果当前状态是STATE_PAUSE
		case this.STATE_PAUSE:
		//		img.src设置为IMG_PAUSE
			img.src=this.IMG_PAUSE;
		}
		//将img追加到pg中
		this.pg.appendChild(img);
	},
	init:function(){
		this.pg=$(".playground")[0];
		//创建一个随机图形的对象存在currShape中
		this.currShape=this.randomShape();
		this.nextShape=this.randomShape();
		//六、将wall数组初始化为RN的空数组对象
		for(var i=0;i<this.RN;i++){
			this.wall[i]=[];
		}
		this.score=0;//十六、初始化
		this.lines=0;//十六、初始化
		this.state=1;//十六、初始化
		this.paint();
		//三、
		this.timer=setInterval(function(){
			//调用tetris的drop方法
			tetris.drop();
			//再调用tetris的paint方法;
			tetris.paint();
		},this.interval);
		//十一、
		document.onkeydown=function(){
			var e=window.event||arguments[0];
			switch(e.keyCode){
				case 37: tetris.moveL();break;//左
				case 39: tetris.moveR();break;//右
				case 40: tetris.drop();break;//下
				//十五步、
				case 38: tetris.rotateR();break;//上键控制右边旋转
				case 90: tetris.rotateL();break;//字母Z键控制控制左边旋转
				//十六步
				case 80: tetris.pause();break;//字母P键：暂停
				case 81: tetris.gameOver();break;//字母Q：结束游戏
				case 67: tetris.myContinue();break;//字母C，在暂停后有效：暂停后，继续游戏
				case 83: //游戏结束后，重新开始
					if(this.state==this.STATE_GAMEOVER){
						tetris.init();
					}//字母S键：重新开始游戏
			}
		}
	},//init的结束
	//十六、暂停，开始，继续、结束
	gameOver:function(){
		this.state=this.STATE_GAMEOVER;
		clearInterval(this.timer);
		this.timer=null;
		this.paint();
	},
	pause:function(){
		if(this.state==this.STATE_RUNNING){
			this.state=this.STATE_PAUSE;
		}
	},
	myContinue:function(){
		if(this.state==this.STATE_PAUSE){
			this.state=this.STATE_RUNNING;
		}
	},
	//十五、变形
	rotateR:function(){//按键上，向右旋转
		if(this.state==this.STATE_RUNNING){//十六
			this.currShape.rotateR();
			if(this.outOfBounds()||this.hit()){//验证不通过
				this.currShape.rotateL();
			}
		}
	},
	rotateL:function(){//按键Z，向左旋转
		if(this.state==this.STATE_RUNNING){
			this.currShape.rotateL();
			if(this.outOfBounds()||this.hit()){//验证不通过
				this.currShape.rotateR();
			}
		}
	},
	//十一、
	moveR:function(){
		this.currShape.moveR();
		if(this.outOfBounds()||this.hit()){//验证不通过
			this.currShape.moveL();
		}
	},
	moveL:function(){
		this.currShape.moveL();
		if(this.outOfBounds()||this.hit()){//验证不通过
			this.currShape.moveR();
		}
	},
	outOfBounds:function(){//检查当前图形是否越界
		//当前shape中任意一个单元格的col<0或>=CN
		var cells=this.currShape.cells;
		for(var i=0;i<cells.length;i++){
			if(cells[i].col<0||cells[i].col>=this.CN){
				return true;
			}
		}
		return false;
	},
	hit:function(){//检查当前图形是否碰撞
	//当前shape中任意一个单元格在wall中相同位置有格
		var cells=this.currShape.cells;
		for(var i=0;i<cells.length;i++){
			if(this.wall[cells[i].row][cells[i].col]){
				return true;
			}
		}
		return false;
	},
	//四、重绘所有的格子，分数等的方法
	paint:function(){
		//把所有的img格子删除，再重绘
				/*结尾的4个/<img(.*?){4}>*/
		this.pg.innerHTML=this.pg.innerHTML.replace(/<img(.*?)>/g,"");
		this.paintShape();
		this.paintWall();
		this.paintNext();
		//十三
		this.paintScore();
		this.paintState();//十、
	},
	//十三、计分
	paintScore:function(){//找到span元素
		//第一个span中放this.score
		$("span")[0].innerHTML=this.score;
		//第二个放this.lines
		$("span")[1].innerHTML=this.lines;
	},
	drop:function(){
		//判断能否下落
		if(this.state==this.STATE_RUNNING){//该行是第十六步加的
			if(this.canDrop()){
				this.currShape.drop();
			}else{//六、否则
				//六、如果不能下落，就将图形中每个cell，放入wall数组中
				this.landIntoWall();
				//十二、消行、并计分
				var ln=this.deleteLines();//消除并返回本次删除的行数
				//十三、计分
				this.score+=this.SCORES[ln];
				this.lines+=ln;
				//九、如果游戏没有结束才。。
				if(!this.isGameOver()){
					//七、将等待的nextShape，换到currShape
					this.currShape=this.nextShape;
					//七、
					this.nextShape=this.randomShape();
				}else{//十、否则，一级结束
					clearInterval(this.timer);
					this.timer=null;
					this.state=this.STATE_GAMEOVER;
					this.paint();//手动绘制一次
				}
			}
		}
	},
	//十二、消行，并计分
	deleteLines:function(){//检查wall中每一行是否要消除
		//遍历wall中每一行,定义lines变量存本次共删除的行数line
		for(var row=0,lines=0;row<this.RN;row++){
			//如果当前行是满的:isFull(row)
			if(this.isFull(row)){
				//	就删除当前行：
				this.deleteL(row);
				//	每删除一行，lines++
				lines++;
			}
		}
		return lines;
	},
	isFull:function(row){//判断指定行是否已满
		//取出wall中第row行，存在line变量中
		var line=this.wall[row];		
			//遍历line中每个cell
		for(var c=0;c<this.CN;c++){
			//	只要当前cell无效
			if(!line[c]){
				return false;
			}
		}//遍历结束后
		return true;
	},
	deleteL:function(row){//删除指定行，并将其之上所有的cell下移
		this.wall.splice(row,1);//只删除一行
		this.wall.unshift([]);//顶部压入一个新空行
		//从row行开始，向上遍历每一行
		for(var r=row;r>0;r--){
			//		从0开始遍历当前行每个格
			for(var c=0;c<this.CN;c++){
			//			如果当前格有效
				if(this.wall[r][c]){
				//				将当前格的row++
					this.wall[r][c].row++;
				}
			}
		}
	},
	//九、判断游戏是否结束
	isGameOver:function(){
		//获取nextShape中所有cell，保存在cells中
		var cells=this.nextShape.cells;	
		//遍历cells中每个cell
		for(var i=0;i<cells.length;i++){
			//取出wall中和当前cell相同row，col位置的格子
			var cell=this.wall[cells[i].row][cells[i].col];
			//只要碰到有效的
			if(cell){
				return true;
			}
		}//for的结束
		return false;
	},
	//八、
	paintNext:function(){
		var cells=this.nextShape.cells;
		for(var i=0;i<cells.length;i++){
			//先将当前cell的row+1,存在r变量中
			var r=cells[i].row+1;
			//再将当前cell的col+11,存在c变量中
			var c=cells[i].col+11;
			var x=c*this.CSIZE+this.OFFSET_X;
			var y=r*this.CSIZE+this.OFFSET_y;
			var img=new Image();
			img.src=cells[i].img;
			img.style.left=x+"px";
			img.style.top=y+"px";
			this.pg.appendChild(img);
		}
	},
	//七、
	paintWall:function(){
		//七、遍历二维数组wall中每个格
		for(var r=0;r<this.RN;r++){
			for(var c=0;c<this.CN;c++){
				var cell=this.wall[r][c];
		//		如果当前cell有效
				if(cell){
					var x=cell.col*this.CSIZE+this.OFFSET_X;
					var y=cell.row*this.CSIZE+this.OFFSET_y;
					var img=new Image();
					img.src=cell.img;
					img.style.left=x+"px";
					img.style.top=y+"px";
					this.pg.appendChild(img);
				}
			}
		}
	},
	//六、把所有停止下落的方块放入wall中
	landIntoWall:function(){
		//遍历当前图形中每个cells
		//	每遍历一个cell
		//	就将cell放入wall中相同row，col的位置:this.wall[?][?]=?
		var cells=this.currShape.cells;
		for(var i=0;i<cells.length;i++){
			this.wall[cells[i].row][cells[i].col]=cells[i];
		}
	},
	//五、//判断是否继续可以下落
	canDrop:function(){
		//遍历当前currShape中的cells
		//		只要发现任意一个的cell的row==RN-1
		//		就返回false
		//		
		var cells=this.currShape.cells;
		for(var i=0;i<cells.length;i++){
			if(cells[i].row==this.RN-1){
				return false;
			}//七、wall中，当前cell的下一行位置有效
			if(this.wall[cells[i].row+1][cells[i].col]){
				return false
			}
		}//遍历结束后
		//七、currShape中，任意一个cell的下方有wall中的cell
		return true;
	},
	//4、随机生成一种图形--二
	randomShape:function(){
		switch(parseInt(Math.random()*7)){
			case 0: return new O();
			case 1: return new L();
			case 2: return new J();
			case 3: return new S();
			case 4: return new Z();
			case 5: return new I();
			case 6: return new T();
		}
	},
	//3
	paintShape:function(){//3、专门绘制当前图形的方法
		var cells=this.currShape.cells;
		for(var i=0;i<cells.length;i++){
			var x=cells[i].col*this.CSIZE+this.OFFSET_X;
			var y=cells[i].row*this.CSIZE+this.OFFSET_y;
			var img=new Image();
			img.src=cells[i].img;
			img.style.left=x+"px";
			img.style.top=y+"px";
			this.pg.appendChild(img);
		}
	},//paintShape的结束
}//tetris结束
window.onload=function(){
	tetris.init();
}