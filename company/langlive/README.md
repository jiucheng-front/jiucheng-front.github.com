#### 一、magic
+ 上传照片的弹出框是调用客户端的方法
+ 循环数据可以直接用for/for in，因为jq的each原理仍然是for/for in
+ 拼接html字符串注意变量与常量
+ 动态创建的DOM绑定的事件，当页面重新刷新后仍然需要再次绑定，不然无效
+ 数组内部只有一个元素仍然可以是用for循环
+ 对于参数可以通过HTML5的自定义属性传，data-index="xxx"
+ input type=file可以自定义(未用到)
+ 根据数据拼接的DOM通过append到指定class元素下的，在刷新(重新getdata)之前要class.empty