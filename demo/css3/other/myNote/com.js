var obj;
    window.onload=init;
    function init(){
                        //变量定义
        var title=document.getElementById("title"),list=document.getElementById("left").getElementsByTagName("section")[1],dd=list.getElementsByTagName("dd"),num=0,cs_header=document.getElementById("header").getContext("2d"),nav=document.getElementById("nav"),next=document.getElementById("next"),prev=document.getElementById("prev");
                        //标题cvs样式构建
        cs_header.fillStyle="rgb(194,194,194)";
        cs_header.fillRect(0,0,1100,90);
        cs_header.font="bold 60px 微软雅黑";
        cs_header.textBaseline="middle";
        cs_header.fillStyle="rgb(255,255,255)";
        cs_header.fillText("My Note",45,45);
        cs_header.font="bold 60px 微软雅黑";
        cs_header.textBaseline="middle";
        cs_header.strokeStyle="#8b8b8b";
        cs_header.lineWidth=2;
        cs_header.strokeText("My Note",45,45);
                        //头部类目点击事件绑定
        nav.onclick=function(e){
            var e=e||event;
            var li=e.srcElement||e.target;
            if(li!=this){
                for(var i=0;i<nav.children.length;i++){
                    nav.children[i].style.borderBottom="";
                }
                li.style.borderBottom="3px solid rgb(204,0,0)";
                num=index(li,nav);
                initbody(num);
                title.innerHTML=data[num][0].dl[0];
                wenzhang.innerHTML=data[num][0].text[0];
                dd[0].style.color="red";
                obj=dd[0];
            }
            drawtable();
        }
        next.onclick=function(){
            var title=document.getElementById("left").getElementsByTagName("section")[0];
            var list=document.getElementById("left").getElementsByTagName("section")[1];
            var dd=list.getElementsByTagName("dd");
            var index;
            var wenzhang=document.getElementById("wenzhang");
            var title=document.getElementById("title");
            for(var i=0;i<dd.length;i++){
                if(obj==dd[i]){
                index=i;
                break;
                }
            }
            index++;
            if(index>=dd.length){index=dd.length-1}
            var I=dd[index].getAttribute("indexi");
            var J=dd[index].getAttribute("indexj");
            obj=dd[index];
            for(var i=0;i<dd.length;i++){
                    dd[i].style.color="#000";
            }
            dd[index].style.color="red";
            
            title.innerHTML=data[num][I].dl[J];
            wenzhang.innerHTML=data[num][I].text[J];
            drawtable();
        }
        prev.onclick=function(){
            var title=document.getElementById("left").getElementsByTagName("section")[0];
            var list=document.getElementById("left").getElementsByTagName("section")[1];
            var dd=list.getElementsByTagName("dd");
            var index;
            var wenzhang=document.getElementById("wenzhang");
            var title=document.getElementById("title");
            for(var i=0;i<dd.length;i++){
                if(obj==dd[i]){
                index=i;
                break;
                }
            }
            index--;
            if(index<0){index=0}
            obj=dd[index];
            for(var i=0;i<dd.length;i++){
                    dd[i].style.color="#000";
            }
            dd[index].style.color="red";
            var I=dd[index].getAttribute("indexi");
            var J=dd[index].getAttribute("indexj");
            title.innerHTML=data[num][I].dl[J];
            wenzhang.innerHTML=data[num][I].text[J];
            drawtable();
        }
        //初始化内容
        initbody(0);
        nav.children[0].style.borderBottom="3px solid rgb(204,0,0)";
        title.innerHTML=data[0][0].dl[0];
        wenzhang.innerHTML=data[0][0].text[0];
        dd[0].style.color="red";
        obj=dd[0];
        drawtable();
    }
            //
    function move(){
            var wy=window.open('','_blank','width=500,height=500,top=50,left=50');
            wy.document.write(document.getElementById("textarea").value);   
    }
    function index(sub,sup){
        for(var i=0;i<sup.children.length;i++){
            if(sub==sup.children[i]){
                return i;
            }
        }
    }
            //内容主体部分构建
    function initbody(index){
        var title=document.getElementById("left").getElementsByTagName("section")[0];
        var list=document.getElementById("left").getElementsByTagName("section")[1];
        var dd=list.getElementsByTagName("dd");
        title.innerHTML=nav.children[index].innerHTML;
        var str="<dl>";
        for(var i=0;i<data[index].length;i++){
            str+="<dt>"+data[index][i].dt+"</dt>";
            for(var j=0;j<data[index][i].dl.length;j++){
                str+="<dd indexi="+i+" indexj="+j+">"+data[index][i].dl[j]+"</dd>";
            }
        }
        str+="</dl>";
        list.innerHTML=str;
        for(var i=0;i<dd.length;i++){
            dd[i].onclick=function(){
                for(var j=0;j<dd.length;j++){
                    dd[j].style.color="#000";
                }
                this.style.color="red";
                obj=this;
                var I=this.getAttribute("indexi");
                var J=this.getAttribute("indexj");
                var wenzhang=document.getElementById("wenzhang");
                var title=document.getElementById("title");
                title.innerHTML=data[index][I].dl[J];
                wenzhang.innerHTML=data[index][I].text[J];
                drawtable();
            }
        }
    }
            //搜索构建
    function search(){
        var right=document.getElementById("right");
        var key=document.getElementById("key");
        if(right.getElementsByTagName("ul")[0]){right.removeChild(right.getElementsByTagName("ul")[0]);}
        if(right.getElementsByTagName("div")[1]){right.removeChild(right.getElementsByTagName("div")[1]);}
        if(!key.value){
            if(right.getElementsByTagName("div")[1]){right.removeChild(right.getElementsByTagName("div")[1]);}
            var div=document.createElement("div");
            div.innerHTML="请输入关键字!";
            div.style.color="rgb(174,65,65)";
            div.style.marginLeft="15px"
            right.appendChild(div);
        }else{
            var tmp=[];
            for(var i=0;i<data.length;i++){
                for(var j=0;j<data[i].length;j++){
                    for(var k=0;k<data[i][j].text.length;k++){
                        if(data[i][j].text[k].indexOf(key.value)!=-1){
                            tmp.push(i+"-"+j+"-"+k);
                        }
                    }
                }
            }
            if(!tmp.length){
                var div=document.createElement("div");
                div.innerHTML="没有相关内容，请重新搜索!";
                div.style.color="rgb(174,65,65)";
                div.style.fontSize="14px"
                right.appendChild(div);
            }
            else{
                
                var ul=document.createElement("ul");
                right.appendChild(ul);
                for(var i=0;i<tmp.length;i++){
                    var sj=tmp[i].split("-");
                    var sub1=data[sj[0]][sj[1]].name;
                    var sub2=data[sj[0]][sj[1]].dt;
                    var sub3=data[sj[0]][sj[1]].dl[sj[2]];
                    var str="<b>"+sub1+"</b>"+"<b style='color:#5e5e5e'>>></b>"+"<b>"+sub2+"</b>"+">>"+"<b>"+sub3+"</b>";
                    var li=document.createElement("li");
                    li.indexi=sj[0];
                    li.indexj=sj[1];
                    li.indexk=sj[2];
                    li.innerHTML=str;
                    ul.appendChild(li);
                    li.onclick=function(){
                        var nav=document.getElementById("nav");
                        var wenzhang=document.getElementById("wenzhang");
                        var title=document.getElementById("title");
                        title.innerHTML=data[this.indexi][this.indexj].dl[this.indexk];
                        wenzhang.innerHTML=data[this.indexi][this.indexj].text[this.indexk];
                        for(var i=0;i<nav.children.length;i++){
                            nav.children[i].style.borderBottom="";
                        }
                        nav.children[this.indexi].style.borderBottom="3px solid rgb(204,0,0)";
                        initbody(this.indexi);
                        var title=document.getElementById("left").getElementsByTagName("section")[0];
                        var list=document.getElementById("left").getElementsByTagName("section")[1];
                        var dd=list.getElementsByTagName("dd");
                        var jg=0;
                        var move=this.indexj-1;
                        if(this.indexj>0){
                            for(move;move>=0;move--){
                                jg+=Number(data[this.indexi][move].dl.length);
                                Number(jg);
                                
                            }
                            jg+=Number(this.indexk);
                        }else{jg=this.indexk}
                        dd[jg].style.color="red";
                        obj=dd[jg];
                        drawtable();
                    }
                }
                
            }
        }
    
    }
            //内部函数
    function drawtable(){
                var table=document.getElementById("table");
                
                var arr=table.getAttribute("cmpt").split("-");
                var tr1="<thead><td colspan=4>兼容性</td></thead><tbody><tr><td>IE</td><td>火狐</td><td>谷歌</td><td>欧朋</td></tr><tr><td>"+arr[0]+"</td><td>"+arr[1]+"</td><td>"+arr[2]+"</td><td>"+arr[3]+"</td></tr></tbody>";
                table.innerHTML=tr1;
                table.tBodies[0].rows[0].style.background="rgb(239,239,239)";
                table.tBodies[0].rows[1].style.color="red";
    }
    function hid(v){
        var btn=document.getElementsByName("btn");
        var div=document.getElementById("_div");
        if(v==0){
        div.setAttribute("hidden","hidden");}else{div.removeAttribute("hidden");}
    }
    function contenteditable(){

        var div=document.getElementById("_div2");
        div.setAttribute("contenteditable","false");
        alert("修改成功")
    }
    function fs(){
        var files=document.getElementById("files");
        for(var i=0;i<files.files.length;i++){
            alert("文件名为："+files.files[i].name+"\n文件大小为："+parseInt(files.files[i].size/1024)+"KB")
        }
    }
    function readImg(obj){
        var imgUrl='';
        var ul=document.getElementById("ul1");
        for(var i=0;i<obj.files.length;i++){
            var tmp=obj.files[i];
            var readF=new FileReader();
            readF.readAsDataURL(tmp);
            readF.onload=function(e){
                imgUrl="<li style='list-style:none;width:400px'><img width=400 src='"+e.target.result+"' /><li>"
                ul.innerHTML+=imgUrl;
            }
        }
        
    }
    function readText(obj){
        var textR='';
        var div=document.getElementById("div1");
        for(var i=0;i<obj.files.length;i++){
            var readF=new FileReader();
            readF.readAsText(obj.files[i]);
            readF.onload=function(e){
                textR=e.target.result;
                div1.innerHTML+=textR;
            }
        }
        
    }
    function checkdom(obj){
        var span=document.getElementById("span1");
        for(var i=0;i<obj.files.length;i++){
            var readF=new FileReader();
            readF.readAsText(obj.files[i]);
            readF.onload=function(e){
                span.innerHTML+="读取文件成功</br>"
            }
            readF.onloadstart=function(e){
                span.innerHTML+="开始读取数据</br>"
            }
            readF.onloadend=function(e){
                span.innerHTML+="数据读取完毕</br>"
            }
            readF.onprogress+=function(e){
                span.innerHTML="正在读取数据中</br>"
            }
        }
        
    }
     function controlsshow(obj){
        obj.setAttribute('controls','true')
    }
     function controlshide(obj){
        obj.removeAttribute('controls')
    }
     function play(obj){
        var v=document.getElementById("v");
        if(obj.innerHTML=='播放'){obj.innerHTML='暂停';v.play()}
        else{obj.innerHTML='播放';v.pause()}
    }
    function timeupdate(obj){
        var s=document.getElementById("s");
        s.innerHTML=parseInt(obj.currentTime)+"/"+parseInt(obj.duration)
    }
    var cv_index=0;
    function cv_rotate(){
        cv_index+=10;
        
        var exe=document.getElementById("cv1").getContext("2d");
        exe.clearRect(0,0,300,300);
        exe.save();
        exe.translate(150,150);
        exe.rotate(cv_index*Math.PI/180)
        exe.strokeRect(-50,-50,100,100);
        exe.restore();
    }
    function cv_scale(){
        cv_index+=10;
        
        var exe=document.getElementById("cv1").getContext("2d");
        exe.clearRect(0,0,300,300);
        exe.save();
        exe.translate(150,150);
        var num=(100+cv_index)/100;
        exe.scale(num,num)
        exe.strokeRect(-50,-50,100,100);
        exe.restore();
    }
    function cv_move(){
        cv_index+=10;
        
        var exe=document.getElementById("cv1").getContext("2d");
        exe.clearRect(0,0,300,300);
        exe.save();
        exe.translate(150+cv_index,150+cv_index);
        exe.strokeRect(-50,-50,100,100);
        exe.restore();
    }
    function savess(){
        var ipt=document.getElementById('ss');
        sessionStorage.setItem("ipt",ipt.value);
        ipt.value='';

    }
    function getss(){
        alert(sessionStorage.getItem("ipt"));
    }
    var Db;
    function createDb(){
        var div=document.getElementById('Dbshow');
        Db=openDatabase('stuss','1.0','学生信息表','1024*1024',function(){
            div.innerHTML='数据库创建成功'
        });
    }
    function testDb(){
        var div=document.getElementById('Dbshow');
        if(Db){
            div.innerHTML='数据库连接成功'
        }else{
            div.innerHTML='数据库连接失败'
        }
    }
    function createTable(){
        if(Db){
            Db.transaction(
                function(tx){
                    tx.executeSql(
                    'create table if not exists stu(id unique,name text,sex text)'
                    )
                },
                function(){
                    alert('表格创建失败')
                },
                function(){
                    alert('表格创建成功')
                }
            )
        }
    }
    function insertDb(){
        if(Db){
            Db.transaction(
                function(tx){
                    tx.executeSql(
                    'insert into stu values(?,?,?)',
                    ['01','张三','男'],
                    function(){alert('插入成功')},
                    function(){alert('插入失败')}
                    )
                })
        }
    }
    function deleteDb(){
        if(Db){
            Db.transaction(
                function(tx){
                    tx.executeSql(
                    'delete from stu where id=?',
                    ['01'],
                    function(){alert('删除成功')},
                    function(){alert('删除失败')}
                    )
                })
        }
    }
    function updataDb(){
        if(Db){
            Db.transaction(
                function(tx){
                    tx.executeSql(
                    'update stu set name=?,sex=? where id=?',
                    ['李四','男','01'],
                    function(){alert('更新成功')},
                    function(){alert('更新失败')}
                    )
                })
        }
    }
    function selectDb(){
        if(Db){
            Db.transaction(
                function(tx){
                    tx.executeSql(
                    'select * from stu',
                    [],
                    function(tx,result){
                        alert('查询到'+result.rows.length+'条数据');
                        for(var i=0;i<result.rows.length;i++){
                            alert('姓名：'+result.rows.item(i)['name']+
                            ' 性别：'+result.rows.item(i)['sex'])
                        }
                    },
                    function(){alert('查询失败')}
                    )
                })
        }
    }
    function deletaTable(){
        if(Db){
            Db.transaction(
                function(tx){
                    tx.executeSql('drop table stu')
                })
        }
    }
    function deletaBase(){
        if(Db){
            Db.transaction(
                function(tx){
                    tx.executeSql('drop database stuss')
                })
        }
    }
    function getpostion(){
        var div=document.getElementById('gpshow');
        navigator.geolocation.getCurrentPosition(function(objpos){
            div.innerHTML+='纬度值：'+objpos.coords.latitude+'</br>';
            div.innerHTML+='经度值：'+objpos.coords.longitude+'</br>';
            div.innerHTML+='精确度值：'+objpos.coords.accuracy+'</br>';
            div.innerHTML+='时间戳：'+objpos.timestamp+'</br>';
            div.innerHTML+='国家：'+objpos.address.country+'</br>';
            div.innerHTML+='省份:'+objpos.address.region+'</br>';
            div.innerHTML+='城市：'+objpos.address.city+'</br>';
        },function(Ecode){
            div.innerHTML=Ecode.code+':'+Ecode.message;
        })
    }