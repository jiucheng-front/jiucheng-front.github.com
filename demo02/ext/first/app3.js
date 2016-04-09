Ext.onReady(function(){
  //Ext内置对象的使用——窗口对象
  new Ext.window.Window({
    id:'parentWindow',
    width: 500,
    height: 400,
    title: '注册新用户',
    titleAlign: 'center',
    //closable: true
    maximizable: true,  /*是否具有最大化按钮*/
    maximized: true,   /*初始是否最大化显示*/
    minimizable: true /*是否具有最小化按钮*/
  }).show();

  //在Ext中创建对象的第一种方法
  new Ext.window.Window({
    width: 400,
    height: 300,
    title: '窗口-1',
    renderTo: 'parentWindow'
  }).show();

  //在Ext中创建对象的第二种方法  Ext.create('对象名',{config})
  Ext.create('Ext.window.Window',{
    width: 300,
    height: 200,
    title: '窗口-2',
    renderTo: 'parentWindow',
    tbar:[
      {text:'File',menu:[
        {text:'New'},
        {text:'Open',menu:[
          {text:'kaifanla'},
          {text:'intel'},
          {text:'bootstrap',menu:[
            {text:'StartUp'},
            {text:'CSS Style'},
            {text:'Component'},
            {text:'Plugin'},
            {text:'Customize'}
          ]}
        ]},
        {text:'Save'},
        {text:'Exit'}
      ]},
      {text:'Edit'},
      {text:'View', handler: function(src,event){
        Ext.Msg.alert('提示','View菜单项被单击了')
      }}
    ]
    /*bbar:[
      {text:'File'},
      {text:'Edit'},
      {text:'View'}
    ]*/
  }).show();
})