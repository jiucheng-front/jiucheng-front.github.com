!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){},function(e,t){},function(e,t){console.log("测试"),function(){for(var e=document.getElementsByClassName("js-nav-btn"),t=document.getElementsByClassName("content-item"),n=0;n<e.length;n++)e[n].index=n,e[n].onclick=function(){for(var n=0;n<t.length;n++)t[n].className="content-item",e[n].className="js-nav-btn";e[this.index].className="js-nav-btn selected",t[this.index].className="content-item show"};!function(){for(var e=document.getElementsByClassName("vote-btn"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=this.getAttribute("data-pfid");alert(e)})}(),function(e){function t(){n.style.display=o.scrollTop+i.scrollTop>100?"block":"none"}var n=document.getElementById(e),o=document.documentElement,i=document.body;window.onscroll=t,n.style.display="none",n.onclick=function(){n.style.display="none",window.onscroll=null,this.timer=setInterval(function(){o.scrollTop-=Math.ceil(.1*(o.scrollTop+i.scrollTop)),i.scrollTop-=Math.ceil(.1*(o.scrollTop+i.scrollTop)),o.scrollTop+i.scrollTop==0&&clearInterval(n.timer,window.onscroll=t)},10)}}("backTop")}()},function(e,t){!function(e,t){function n(){var t=r.getBoundingClientRect().width;t/c>540&&(t=540*c);var n=t/10;r.style.fontSize=n+"px",m.rem=e.rem=n}var o,i=e.document,r=i.documentElement,a=i.querySelector('meta[name="viewport"]'),l=i.querySelector('meta[name="flexible"]'),c=0,s=0,m=t.flexible||(t.flexible={});if(a){console.warn("将根据已有的meta标签来设置缩放比例");var d=a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(s=parseFloat(d[1]),c=parseInt(1/s))}else if(l){var u=l.getAttribute("content");if(u){var p=u.match(/initial\-dpr=([\d\.]+)/),f=u.match(/maximum\-dpr=([\d\.]+)/);p&&(c=parseFloat(p[1]),s=parseFloat((1/c).toFixed(2))),f&&(c=parseFloat(f[1]),s=parseFloat((1/c).toFixed(2)))}}if(!c&&!s){var v=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),h=e.devicePixelRatio;c=v?h>=3&&(!c||c>=3)?3:h>=2&&(!c||c>=2)?2:1:1,s=1/c}if(r.setAttribute("data-dpr",c),!a)if(a=i.createElement("meta"),a.setAttribute("name","viewport"),a.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(a);else{var b=i.createElement("div");b.appendChild(a),i.write(b.innerHTML)}e.addEventListener("resize",function(){clearTimeout(o),o=setTimeout(n,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(o),o=setTimeout(n,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*c+"px":i.addEventListener("DOMContentLoaded",function(e){i.body.style.fontSize=12*c+"px"},!1),n(),m.dpr=e.dpr=c,m.refreshRem=n,m.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},m.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t,n){n(3),n(0),n(1),n(2)}]);