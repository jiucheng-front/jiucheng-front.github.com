(function() {
  define({
    DAY_TPL: Handlebars.compile(['<a href="#" class="normal {{curr_class}}"><p class="days {{weekend}}">{{day}}</p><p class="grayWord">{{luanr}}</p></a>'].join('')),
    DAY_ITEM: Handlebars.compile(['<li id="GD{{index}}"></li>'].join('')),
    WEEK_ITEM: Handlebars.compile(['{{#each data}}', '<li><span>{{week}}周</span></li>', '{{/each}}'].join('')),
    NEWS_ITEM: Handlebars.compile(['{{#each data}}', '<li><a href="{{link}}" target="_blank" class="jsNews" index="{{@index}}">{{title}}</a></li>', '{{/each}}'].join('')),
    DAY_ITEMS: Handlebars.compile(['<li class="{{hdays}}{{works}}" data-index="{{index}}" title="{{lunar}}">', '   {{#if hdays}}', '   <div class="restIco">', '       <img src="http://s.yunfan.com/images/lunarcalendar/xiu.gif" />', '   </div>', '   {{/if}}', '   {{#if works}}', '   <div class="restIco">', '       <img src="http://s.yunfan.com/images/lunarcalendar/ban.gif" />', '   </div>', '   {{/if}}', '   <a href="javascript:;" class="{{itemCls}}">', '       <p class="days {{weekday}}">{{day}}</p>', '       <p class="grayWord {{fetvCls}}">{{lunar}}</p>', '   </a>', '</li>'].join('')),
    CITY_TPL: Handlebars.compile(['<p><span>{{city}}</span>（当地）{{weather1}}{{temp1}}</p>', '<p>湿度：{{SD}}</p>', '<p>空气：{{pm2_5}} {{quality}} PM2.5</p>'].join(''))
  });

}).call(this);
