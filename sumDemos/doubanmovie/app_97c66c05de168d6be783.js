!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=4)}([function(n,t){},function(n,t,e){var o=e(3),r={btn:null,init:function(){var n=this;n.getData(),n.btn=document.getElementById("gotop"),n.btn.onclick=n.backTop},getData:function(){o.ajax({type:"GET",url:"https://api.douban.com/v2/movie/in_theaters",dataType:"jsonp",success:function(n){for(var t=n,e=o("<h1></h1>").html(t.title+"共有"+t.count+"部"),r=t.subjects,a=r.length,c=o("<ul class='movelist clear'></ul>"),i=0;i<a;i++)c.append("<li><img class='left' src='"+r[i].images.large+"'><div class='right message'><h3>"+r[i].title+"</h3><p>类型：<span>"+r[i].genres.join("、")+"</span></p><p>导演：<span>"+r[i].directors[0].name+"</span></p><p>领衔主演：<br><span>"+r[i].casts[0].name+"</span></p><p>豆瓣评分：<span>"+r[i].rating.average+"分</span></p><p>上映年份：<span>"+r[i].year+"年</span></p><p>评价人数：<span>"+r[i].collect_count+"人评价</span></p><p><a href='"+r[i].alt+"'>影片详情</a></p></div></li>");o("#content").append(e,c)}})},backTop:function(){function n(){o.style.display=t.scrollTop+e.scrollTop>100?"block":"none"}window.onscroll=n;var t=document.documentElement,e=document.body,o=this;o.style.display="none",o.timer=setInterval(function(){t.scrollTop-=Math.ceil(.1*(t.scrollTop+e.scrollTop)),e.scrollTop-=Math.ceil(.1*(t.scrollTop+e.scrollTop)),t.scrollTop+e.scrollTop==0&&clearInterval(o.timer,window.onscroll=n)},10)}};n.exports=r},function(n,t){!function(n,t){var e=n.documentElement,o="orientationchange"in window?"orientationchange":"resize",r=function(){var n=e.clientWidth;n&&(e.style.fontSize=n>=640?"100px":n/640*100+"px")};n.addEventListener&&(t.addEventListener(o,r,!1),n.addEventListener("DOMContentLoaded",r,!1))}(document,window)},function(n,t){n.exports=window.jQuery},function(n,t,e){e(2),e(0),e(1).init()}]);