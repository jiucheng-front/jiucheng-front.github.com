function Cell(row,col,img){
	this.row=row;
	this.col=col;
	this.img=img;
	//三下落
	if(!Cell.prototype.drop){
		Cell.prototype.drop=function(){
			this.row++;
		}
	}
	if(!Cell.prototype.moveR){//十一
		Cell.prototype.moveR=function(){
			this.col++;
		}
	}
	if(!Cell.prototype.moveL){//十一
		Cell.prototype.moveL=function(){
			this.col--;
		}
	}
}
//十四、下落的各种变化状态
function State(r0,c0,r1,c1,r2,c2,r3,c3){
	//第0个cell相对于参照cell的下标偏移量
	this.r0=r0;
	this.c0=c0;
	//第1个cell相对于参照cell的下标偏移量
	this.r1=r1;
	this.c1=c1;
	//第2个cell相对于参照cell的下标偏移量
	this.r2=r2;
	this.c2=c2;
	//第3个cell相对于参照cell的下标偏移量
	this.r3=r3;
	this.c3=c3;
}
function Shape(img,orgi){
	this.img=img;
	this.states=[];//十四、保存每个图形不同状态的数组
	this.orgi=orgi;//十四、以它为固定不变的参照点，去旋转变形，就是数组states的下标
	this.statei=0;//默认所有图形的最初状态都是0
	//三
	if(!Shape.prototype.drop){
		Shape.prototype.drop=function(){
			//遍历当前对象的cells中的每个cell对象
			//	  调用当前cell对象的drop方法
			for(var i=0;i<this.cells.length;i++){
				this.cells[i].drop();
			}
		}
	}
	if(!Shape.prototype.moveR){//十一
		Shape.prototype.moveR=function(){
			//遍历当前对象的cells中的每个cell对象
			for(var i=0;i<this.cells.length;i++){
			//    调用当前cell对象的drop方法
				this.cells[i].moveR();
			}
		}
	}
	if(!Shape.prototype.moveL){//十一
		Shape.prototype.moveL=function(){
			//遍历当前对象的cells中的每个cell对象
			for(var i=0;i<this.cells.length;i++){
			//    调用当前cell对象的drop方法
				this.cells[i].moveL();
			}
		}
	}
	//十五
	if(!Shape.prototype.rotateR){
		Shape.prototype.rotateR=function(){
			//if(Object.getPrototypeOf(this)!=O.prototype){
			if(this.constructor!=O){
				this.statei++;
				this.statei>=this.states.length&&(this.statei=0);
				//获得下一个状态对象
				var state=this.states[this.statei];
				var orgr=this.cells[this.orgi].row;
				var orgc=this.cells[this.orgi].col;
				//遍历当前图形中的每个cell
				//按state中偏移量，设置每个cell的新位置
				for(var i=0;i<this.cells.length;i++){
					this.cells[i].row=orgr+state["r"+i];
					this.cells[i].col=orgc+state["c"+i];
				}//for的结束
			}//if的结束
		}//function的结束
	}//if的结束
	if(!Shape.prototype.rotateL){
		Shape.prototype.rotateL=function(){
			//if(Object.getPrototypeOf(this)!O.prototype){
			if(this.constructor!=O){
				this.statei--;
				this.statei<0&&(this.statei=this.states.length-1);
				//获得下一个状态对象
				var state=this.states[this.statei];
				var orgr=this.cells[this.orgi].row;
				var orgc=this.cells[this.orgi].col;
				//遍历当前图形中的每个cell
				//按照state中偏移量，设置每个cell的心位置
				for(var i=0;i<this.cells.length;i++){
					this.cells[i].row=orgr+state["r"+i];
					this.cells[i].col=orgc+state["c"+i];
				}//for的结束
			}//if的结束
		}//function的结束
	}//if的结束
}//function Shape(img,orgi)的结束
//二
function O(){//1
	Shape.call(this,"img/O.png");
	if(!Shape.prototype.isPrototypeOf(O.prototype)){
		Object.setPrototypeOf(O.prototype,Shape.prototype);//继承
	}
	this.cells=[
		new Cell(0,4,this.img),new Cell(0,5,this.img),
		new Cell(1,4,this.img),new Cell(1,5,this.img)
	];
}
function T(){//2
	Shape.call(this,"img/T.png",1);
	if(!Shape.prototype.isPrototypeOf(T.prototype)){
		Object.setPrototypeOf(T.prototype,Shape.prototype);//继承
	}
	this.cells=[
		new Cell(0,3,this.img),new Cell(0,4,this.img),
		new Cell(0,5,this.img),new Cell(1,4,this.img)
	];
	//十四
	this.states[0]=new State(0,-1, 0,0, 0,1, 1,0);
	this.states[1]=new State(-1,0, 0,0, 1,0, 0,-1);
	this.states[2]=new State(0,1, 0,0, 0,-1, -1,0);
	this.states[3]=new State(1,0, 0,0, -1,0, 0,1);
						//   [0]   [1]	[2]	 [3]
}

function I(){//3
	Shape.call(this,"img/I.png",1);
	if(!Shape.prototype.isPrototypeOf(I.prototype)){
		Object.setPrototypeOf(I.prototype,Shape.prototype);//继承
	}
	this.cells=[
		new Cell(0,3,this.img),new Cell(0,4,this.img),
		new Cell(0,5,this.img),new Cell(0,6,this.img)
	];
	this.states[0]=new State(0,-1, 0,0, 0,1, 0,2);
						//   [0]   [1]	[2]	 [3]
	this.states[1]=new State(-1,0, 0,0, 1,0, 2,0);
}
function S(){//4
	Shape.call(this,"img/S.png",3);
	if(!Shape.prototype.isPrototypeOf(S.prototype)){
		Object.setPrototypeOf(S.prototype,Shape.prototype);//继承
	}
	this.cells=[
		new Cell(0,4,this.img),new Cell(0,5,this.img),
		new Cell(1,3,this.img),new Cell(1,4,this.img)
	];
	//十四
	this.states[0]=new State(-1,0, -1,1, 0,-1, 0,0);
	this.states[1]=new State(0,1, 1,1, -1,0, 0,0);
						//   [0]   [1]	[2]	 [3]
}
function Z(){//5
	Shape.call(this,"img/Z.png",1);
	if(!Shape.prototype.isPrototypeOf(Z.prototype)){
		Object.setPrototypeOf(Z.prototype,Shape.prototype);//继承
	}
	this.cells=[
		new Cell(0,3,this.img),new Cell(0,4,this.img),
		new Cell(1,4,this.img),new Cell(1,5,this.img)
	];
	this.states[0]=new State(0,-1, 0,0, 1,0, 1,1);
	this.states[1]=new State(-1,0, 0,0, 0,-1, 1,-1);
						//   [0]   [1]	[2]	 [3]
}
function L(){//6
	Shape.call(this,"img/L.png",1);
	if(!Shape.prototype.isPrototypeOf(L.prototype)){
		Object.setPrototypeOf(L.prototype,Shape.prototype);//继承
	}
	this.cells=[
		new Cell(0,3,this.img),new Cell(0,4,this.img),
		new Cell(0,5,this.img),new Cell(1,3,this.img)
	];
	this.states[0]=new State(0,-1, 0,0, 0,1, 1,-1);
	this.states[1]=new State(-1,0, 0,0, 1,0, -1,-1);
	this.states[2]=new State(0,1, 0,0, 0,-1, -1,1);
	this.states[3]=new State(1,0, 0,0, -1,0, 1,1);
						//   [0]   [1]	[2]	 [3]
}
function J(){//7
	Shape.call(this,"img/J.png",1);
	if(!Shape.prototype.isPrototypeOf(J.prototype)){
		Object.setPrototypeOf(J.prototype,Shape.prototype);//继承
	}
	this.cells=[
		new Cell(0,3,this.img),new Cell(0,4,this.img),
		new Cell(0,5,this.img),new Cell(1,5,this.img)
	];
	this.states[0]=new State(-1,0, 0,0, 1,-1, 1,0);
	this.states[1]=new State(0,1, 0,0, -1,-1, 0,-1);
	this.states[2]=new State(1,0, 0,0, -1,1, -1,0);
	this.states[3]=new State(0,-1, 0,0, 1,1, 0,1);
						//   [0]   [1]	[2]	 [3]
}