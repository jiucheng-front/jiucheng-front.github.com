
/*
@author brian
@email brian.netmad@gmail.com
@datetime 2014-12-01
@filename LunarCalendar.<file_type>
 */

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'util', 'handlebars', 'Templates', 'CalendarView'], function($, util, Handlebars, Templates, CalendarView) {

    /*
    @class LunarCalendar
    @desc 农历实例类
     */
    var LunarCalendar;
    return LunarCalendar = (function() {
      LunarCalendar.prototype.weather_style = {
        '0': 'qing',
        '1': 'duoyun',
        '2': 'yintian',
        '3': 'leizhenyu',
        '4': 'leizhenyu',
        '5': 'zhenyubingbao',
        '6': 'dongyu',
        '7': 'xiaoyu',
        '8': 'zhongyu',
        '9': 'dayu',
        '10': 'baoyu',
        '11': 'baoyu',
        '12': 'baoyu',
        '13': 'leizhenyu',
        '14': 'xiaoxue',
        '15': 'zhongxue',
        '16': 'daxue',
        '17': 'baoxue',
        '18': 'wu',
        '19': 'dongyu',
        '20': 'shachenbao',
        '22': 'zhongyu',
        '23': 'zhongyu',
        '24': 'dayu',
        '25': 'baoyu',
        '26': 'zhongxue',
        '27': 'daxue',
        '28': 'baoxue',
        '29': 'shachenbao',
        '30': 'shachenbao',
        '31': 'shachenbao',
        '53': 'wumai',
        '99': 'qing'
      };


      /*
      @funname constructor
      @desc 构造函数，程序初始化入口
       */

      function LunarCalendar() {
        this.getNewInfo = __bind(this.getNewInfo, this);
        this.initialize();
      }


      /*
      @funname initialize
      @desc 初始化DOM获取
       */

      LunarCalendar.prototype.initialize = function() {
        this.btnPrev = $("#jsPrevMonth");
        this.btnNext = $("#jsNextMonth");
        this.btnReturnToday = $("#jsReturnTodayBtn");
        this.labLunarCalendar = $("#jsLunarcalendarLab");
        this.labGregorian = $("#jsGregorianLab");
        this.calendarPanel = $("#calendarPanel");
        this.labTime = $("#jstimeLab");
        this.labYearMonth = $("#jsYearMonthLab");
        this.newsEL = $("#jsNewList");
        this.cityTemperature = $("#city_temperature");
        this.cityInfo = $("#city_info");
        this.currentDate = new Date();
        this.timer = 0;
        this.initCalendar().eventBinds().getCityWeatherInfo();
        return this;
      };


      /*
      @funname initCalendar
      @desc 初始化日历视图控制类
       */

      LunarCalendar.prototype.initCalendar = function() {
        var calendarView, gNum, i, j, __innerHTML, _random;
        this.labTime.html(this.getTime(this.timer));
        window.setInterval((function(_this) {
          return function() {
            _this.labTime.html(_this.getTime(_this.timer));
            return _this.timer++;
          };
        })(this), 999);
        gNum;
        i = 0;
        __innerHTML = '';
        while (i < 6) {
          j = 0;
          while (j < 7) {
            gNum = i * 7 + j;
            __innerHTML += Templates['DAY_ITEM']({
              'index': gNum
            });
            j++;
          }
          i++;
        }
        this.calendarPanel.html(__innerHTML);
        window.yftoutiao = this.getNewInfo;
        _random = "" + (this.currentDate.getFullYear()) + (this.currentDate.getMonth()) + (this.currentDate.getDate());
        require(["http://s.yunfan.com/js/client/api/yftoutiao.js?" + _random]);
        calendarView = new CalendarView();
        return this;
      };

      LunarCalendar.prototype.getTime = function(o) {
        var _minutes, _str_time;
        this.currentDate = new Date();
        _str_time = o % 2 === 0 ? "{0}:{1}" : "{0} {1}";
        _minutes = this.currentDate.getMinutes() < 10 ? util.format("0{0}", this.currentDate.getMinutes()) : this.currentDate.getMinutes();
        return util.format(_str_time, this.currentDate.getHours(), _minutes);
      };

      LunarCalendar.prototype.is_leap = function(year) {
        return false;
      };


      /*
      @funname eventBinds
      @desc 事件绑定
       */

      LunarCalendar.prototype.eventBinds = function() {
        $(document.body).delegate('a.jsNews', 'click', function() {

          /*
              data stats
              新闻推荐点击统计
           */
          var CU, ED, NU, TI, TM, img, tj, url;
          url = $(this).attr('href');
          NU = encodeURIComponent(url);
          ED = "yingku.rili." + ($(this).attr('index'));
          TM = Date.parse(new Date()) / 1000;
          TI = encodeURIComponent($(this).text());
          CU = 'http%3A%2F%2Fyingku.yunfan.com%2F';
          tj = "http://ulog.s.yunfan.com/analy/?RID=&FU=&NU=" + NU + "&TM=" + TM + "&ED=" + ED + "&CP=&CU=" + CU + "&DU=&GID=&PID=&AID=&IID=&CID=&TI=" + TI;
          img = document.getElementById('client_send_tj');
          if (!img) {
            img = document.createElement("img");
            img.id = "client_send_tj";
            document.body.appendChild(img);
          }
          return img.src = tj;
        });
        return this;
      };


      /*
      @funname getNewInfo
      @desc 新闻渲染
       */

      LunarCalendar.prototype.getNewInfo = function(r) {
        this.newsEL.html(Templates['NEWS_ITEM']({
          'data': r.small.slice(0, 5)
        }));
        return this;
      };


      /*
      @funname getCityWeatherInfo
      @desc 城市天气设置
       */

      LunarCalendar.prototype.getCityWeatherInfo = function() {
        if (uIPData) {
          util.get({
            url: "http://cal.yunfan.com/calendar/weather/" + uIPData.code + ".json",
            success: (function(_this) {
              return function(resp, status) {
                var weatherinfo_single;
                if (resp) {
                  _this.cityTemperature.html("" + resp.weatherinfo.st1 + "℃");
                  _this.cityInfo.html(Templates['CITY_TPL']({
                    'city': resp.weatherinfo.city,
                    'weather1': resp.weatherinfo.weather1,
                    'temp1': resp.weatherinfo.temp1,
                    'SD': resp.weatherinfo.SD,
                    'pm2_5': resp.pm25.pm2_5,
                    'quality': resp.pm25.quality
                  }));
                  weatherinfo_single = resp.weatherinfo.img_single;
                  return $('.temperature .icon').addClass(_this.weather_style[weatherinfo_single]);
                }
              };
            })(this),
            error: (function(_this) {
              return function(resp, status) {
                return false;
              };
            })(this)
          });
        }
        return this;
      };

      return LunarCalendar;

    })();
  });

}).call(this);
