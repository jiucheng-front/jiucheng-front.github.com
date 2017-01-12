

//浏览器本地存储储存window.localStorage
//即使页面关闭 该存储数据也不会丢失，除非主动删除
//1、定义KEY常量
const STORAGE_KEY='todo-list';
// var Store={
//     save:function(items){
//         return window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
//     },
//     fetch:function(){
//         return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');
//     }
// }

// //2、定义保存用户输入到localStorage的函数
// function save(items){
//     return window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
// }

// //3、定义获取指定key的值 函数
// function fetch(){
//     return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');
// }


// sessionStorage会话页面存储
//页面关闭存储的数据就会删除，不关闭会一直存在
var Store={
    save:function(items){
        return window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(items));
    },
    fetch:function(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'[]');
    },
    deletedThis:function(kk){
        return window.sessionStorage.removeItem(kk);
    }
}