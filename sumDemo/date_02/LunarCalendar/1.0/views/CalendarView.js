
/*
@author brian
@email brian.netmad@gmail.com
@datetime 2014-12-01
@filename CalendarView.<file_type>
 */

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.HuangLi = window.HuangLi || {};

  define(['jquery', 'util', 'handlebars', 'Templates', 'LunarCore'], function($, util, Handlebars, Templates, LunarCore) {

    /*
    日历视图控制类
     */
    var CalendarView;
    return CalendarView = (function() {
      function CalendarView() {
        this.showHL = __bind(this.showHL, this);
        this.initialize();
      }


      /*
      @初始化DOM元素获取
      @初始化接口调用
       */

      CalendarView.prototype.initialize = function() {
        this.calendarPanel = $("#calendarPanel");
        this.btnPrev = $("#jsPrevMonth");
        this.btnNext = $("#jsNextMonth");
        this.btnReturnToday = $("#jsReturnTodayBtn");
        this.labGregorian = $("#jsGregorianLab");
        this.labYearMonth = $("#jsYearMonthLab");
        this.weekList = $("#jsWeekList");
        this.Yi = $("#jsYiLab");
        this.Ji = $("#jsJiLab");
        this.hlurl = 'http://s.yunfan.com/js/LunarCalendar/1.0/data';
        this.ganZhi = $("#jsLunarcalendarLab");
        this.hlMinYear = 2008;
        this.hlMaxYear = 2020;
        this.minYear = 1891;
        this.maxYear = 2100;
        this.now = new Date();
        this.current = null;
        this.DATA = null;
        this.panel = [0, 1];
        this.pageWidth = 0;
        this.slideIng = false;
        this.timer = -1;
        this.eventBind().setCurrentByNow().showDate().getYearMonth();
        return this;
      };


      /*
      @funname formateDayD4
      @desc 转换 月份，天数为 dd%d% ->d1201 or d0101
      @month 月份 必须为date.getMonth()返回的值，或则-1
      @day 天
      @return 'dd%d%'
       */

      CalendarView.prototype.formateDayD4 = function(month, day) {
        month = month + 1;
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        return "d" + month + day;
      };


      /*
      @funname formatDate
      @desc 获取当前日历的年月日串
      @return "d%-d%-d%"
       */

      CalendarView.prototype.formatDate = function() {
        var day, month, year;
        if (!this.current) {
          return '';
        }
        year = this.current.year;
        month = this.current.month;
        day = this.current.day;
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        return "" + year + "-" + month + "-" + day;
      };


      /*
      @funname setCurrentByNow
      @desc 设置当前或则默认时间
      @year 年
      @month 月
      @day 天
      @pos 是否是当前月
      @return @current[year, month, day, pos]
       */

      CalendarView.prototype.setCurrentByNow = function(year, month, day, pos) {
        this.current = {
          year: year || this.now.getFullYear(),
          month: month || this.now.getMonth() + 1,
          day: day || this.now.getDate(),
          pos: pos || 0
        };
        return this;
      };


      /*
      @funname getHL
      @desc 设置黄历信息
       */

      CalendarView.prototype.getHL = function() {
        var hl;
        if (HuangLi["y" + this.current.year]) {
          hl = HuangLi["y" + this.current.year][this.formateDayD4(this.current.month - 1, this.current.day)];
          return this.showHL(hl);
        } else if (this.current.year >= this.hlMinYear && this.current.year <= this.hlMaxYear) {
          return require(["" + this.hlurl + "/hl" + this.current.year + ".js"], (function(_this) {
            return function(r) {
              hl = HuangLi["y" + _this.current.year][_this.formateDayD4(_this.current.month - 1, _this.current.day)];
              return _this.showHL(hl);
            };
          })(this));
        }
      };


      /*
      @funname showHL
      @desc 显示黄历信息
       */

      CalendarView.prototype.showHL = function(hl) {
        this.Ji.text(hl != null ? hl.j : void 0);
        this.Yi.text(hl != null ? hl.y : void 0);
        return this;
      };


      /*
      @funname showInfo
      @desc 设置当前月份的日历信息，公历信息，农历信息
       */

      CalendarView.prototype.showInfo = function(_this) {
        var currentLunar, fetv, weekList, weekday, _ganzhi;
        this.currentMonth = this.current.month - 1;
        this.currentYear = this.current.year;
        currentLunar = LunarCore.solarToLunar(this.current.year, this.current.month, this.current.day);
        weekday = new Date(this.current.year, this.current.month - 1, this.current.day).getDay();
        weekList = ['日', '一', '二', '三', '四', '五', '六'];
        _ganzhi = "【" + currentLunar.zodiac + "年】" + currentLunar.lunarMonthName + currentLunar.lunarDayName;
        fetv = [];
        if (currentLunar.term) {
          fetv.push(currentLunar.term);
        }
        if (currentLunar.lunarFestival) {
          fetv.push(currentLunar.lunarFestival);
        }
        if (currentLunar.solarFestival) {
          fetv.push(currentLunar.solarFestival.split(' '));
        }
        if (_this) {
          $('a.click').removeClass('click');
          $(_this.find('a')).addClass('click');
        }
        this.ganZhi.html(_ganzhi);
        this.labYearMonth.html("" + this.current.year + "-" + this.current.month);
        if (this.current.year === this.now.getFullYear() && this.current.month === this.now.getMonth() + 1 && this.current.day === this.now.getDate()) {
          this.labGregorian.html("<span class='today'></span><span class='returnToday' style='display:none'></span>" + this.current.year + "年" + this.current.month + "月" + this.current.day + " 周" + weekList[weekday]);
        } else {
          this.labGregorian.html("<span class='returnToday'></span>" + this.current.year + "年" + this.current.month + "月" + this.current.day + " 周" + weekList[weekday]);
        }
        this.getHL();
        return this;
      };


      /*
      @funname resetInfo
      @desc 设置返回默认日期
       */

      CalendarView.prototype.resetInfo = function() {
        var oldObj;
        oldObj = this.calendarPanel.find('li').eq(current.pos);
        if (this.now.getFullYear() === this.current.year && this.now.getMonth() + 1 === this.current.month && this.now.getDate() === this.current.day) {
          oldObj.attr('class', 'date_item date_today');
        } else {
          oldObj.attr('class', 'date_item');
        }
        return this;
      };


      /*
      @funname showDate
      @desc 1. 设置日历列表
            2. 设置周列表
            3. 获取月份数据信息
       */

      CalendarView.prototype.showDate = function() {
        var dateHtml, endData, end_week, extendObj, fetvCls, first_week, holiday, i, iconCl, itemCls, itemData, lunar, temp, weekday, worktime, _day;
        this.DATA = LunarCore.calendar(this.current.year, this.current.month, true);
        dateHtml = '';
        temp = Templates['DAY_ITEMS'];
        i = 0;
        while (i < this.DATA.monthData.length) {
          itemData = this.DATA.monthData[i];
          if (i === 0) {
            endData = this.DATA.monthData[this.DATA.monthData.length - 1];
            first_week = this.getWeeks("" + itemData.year + "-" + itemData.month + "-" + itemData.day);
            end_week = this.getWeeks("" + endData.year + "-" + endData.month + "-" + endData.day);
            this.setCurrMonthWeek(first_week, end_week);
          }
          iconCl = '';
          holiday = null;
          worktime = null;
          if (itemData.worktime) {
            iconCl = itemData.worktime === 1 ? 'worktime' : 'holiday';
          } else {
            iconCl = '';
          }
          fetvCls = '';
          if (itemData.lunarFestival || itemData.term) {
            fetvCls = ' lunar_fetv';
          } else {
            fetvCls = itemData.solarFestival ? ' label-color' : '';
          }
          if (iconCl === 'holiday') {
            holiday = 'holiday';
          }
          if (iconCl === 'worktime') {
            worktime = 'work';
          }
          weekday = '';
          _day = new Date(itemData.year, itemData.month - 1, itemData.day);
          if (_day.getDay() === 0 || _day.getDay() === 6) {
            weekday = 'label-color';
          }
          extendObj = {
            index: i,
            itemCls: '',
            hdays: holiday,
            works: worktime,
            fetvCls: fetvCls,
            weekday: weekday,
            lunar: ''
          };
          itemCls = '';
          if (this.now.getFullYear() === itemData.year && this.now.getMonth() + 1 === itemData.month && this.now.getDate() === itemData.day) {
            itemCls = 'normal selected';
          } else {
            if (this.current.year === itemData.year && this.current.month === itemData.month && this.current.day === itemData.day) {
              itemCls = 'click';
              this.current.pos = i;
            } else {
              if (i < this.DATA.firstDay || i >= this.DATA.firstDay + this.DATA.monthDays) {
                itemCls = 'abnormal';
              } else {
                itemCls = 'normal';
              }
            }
          }
          extendObj.itemCls = itemCls;
          lunar = itemData.lunarDayName;
          if (itemData.solarFestival) {
            extendObj.fetvCls = 'label-color';
            lunar = itemData.solarFestival;
          }
          if (itemData.lunarFestival) {
            extendObj.fetvCls = 'label-color';
            lunar = itemData.lunarFestival;
          }
          if (itemData.term) {
            lunar = itemData.term;
            extendObj.fetvCls = 'label-color';
          }
          extendObj.lunar = lunar;
          $.extend(itemData, extendObj);
          dateHtml += temp(itemData);
          i++;
        }
        this.calendarPanel.html(dateHtml);
        this.showInfo();
        return this;
      };


      /*
      @funname pageDate
      @desc 设置选择日历
      @parameter
          @offset 上下月设置-1 上一月 +1 下月
          @_year 年
          @_month 月
          @_day 日
       */

      CalendarView.prototype.pageDate = function(offset, _year, _month, _day) {
        var day, month, year;
        year = 0;
        month = 0;
        day = 0;
        if (_year && _month) {
          year = _year;
          month = _month;
        } else {
          if (this.current.month + offset < 1) {
            year = this.current.year - 1;
            month = 12;
          } else if (this.current.month + offset > 12) {
            year = this.current.year + 1;
            month = 1;
          } else {
            year = this.current.year;
            month = this.current.month + offset;
          }
        }
        if (_day) {
          day = _day;
        } else {
          if (this.current.day > LunarCalendar.getSolarMonthDays[month - 1]) {
            day = LunarCalendar.getSolarMonthDays[month - 1];
          } else {
            day = this.current.day;
          }
        }
        if (year < this.minYear || year > this.maxYear) {
          return;
        }
        this.setCurrentByNow(year, month, day);
        this.showDate();
        return this;
      };

      CalendarView.prototype.getYearMonth = function(opt) {
        var _month;
        this.currentDate = new Date();
        if (!opt) {
          this.currentYear = this.currentDate.getFullYear();
          this.currentMonth = this.currentDate.getMonth();
        } else {
          if (opt === 1) {
            this.currentMonth += 1;
            if (this.currentMonth >= 12) {
              this.currentMonth = 0;
              this.currentYear += 1;
            }
            this.pageDate(1, this.currentYear, this.currentMonth + 1, 1);
          } else {
            this.currentMonth -= 1;
            if (this.currentMonth < 0) {
              this.currentMonth = 11;
              this.currentYear -= 1;
            }
            this.pageDate(-1, this.currentYear, this.currentMonth + 1, 1);
          }
        }
        _month = this.currentMonth + 1 < 10 ? util.format('0{0}', this.currentMonth + 1) : this.currentMonth + 1;
        this.labYearMonth.html(util.format("{0}-{1}", this.currentYear, _month));
        return this;
      };


      /*
      @funname eventBind
      @desc 事件绑定
       */

      CalendarView.prototype.eventBind = function() {
        var _this;
        _this = this;
        this.btnPrev.on('click', (function(_this) {
          return function() {
            return _this.getYearMonth(-1);
          };
        })(this));
        this.btnNext.on('click', (function(_this) {
          return function() {
            return _this.getYearMonth(1);
          };
        })(this));
        this.calendarPanel.delegate('li', 'click', function() {
          var index, itemData;
          index = $(this).attr('data-index');
          index = parseInt(index, 10);
          itemData = _this.DATA.monthData[index];
          if (index < _this.DATA.firstDay) {
            return _this.pageDate(-1, itemData.year, itemData.month, itemData.day);
          } else if (index >= _this.DATA.firstDay + _this.DATA.monthDays) {
            return _this.pageDate(1, itemData.year, itemData.month, itemData.day);
          } else {
            _this.setCurrentByNow(itemData.year, itemData.month, itemData.day, index);
            return _this.showInfo($(this));
          }
        });
        $(document.body).delegate('.returnToday', 'click', function() {
          return _this.setCurrentByNow().showDate().getYearMonth();
        });
        return this;
      };


      /*
      @funname getYearWeek
      @desc 获取某年某月第多少周
      @return 周数
       */

      CalendarView.prototype.getYearWeek = function(year, month) {
        var d, date, date2, day1, day2;
        date = new Date(year, month - 1, 1);
        date2 = new Date(year, 0, 1);
        day1 = date.getDay();
        if (day1 === 0) {
          day1 = 7;
        }
        day2 = date2.getDay();
        if (day2 === 0) {
          day2 = 7;
        }
        d = Math.round((date.getTime() - date2.getTime() + (day2 - day1) * (24 * 60 * 60 * 1000)) / 86400000);
        return Math.ceil(d / 7) + 1;
      };


      /*
      @funname setCurrMonthWeek
      @desc 设置显示月份的周列表
       */

      CalendarView.prototype.setCurrMonthWeek = function(first_week, end_week) {
        var _i, _loop, _other_loop, _weeks;
        _loop = 0;
        _weeks = [];
        if (first_week > end_week) {
          _loop = (first_week + 5) - end_week;
          _other_loop = end_week;
        } else {
          _loop = end_week;
        }
        _i = first_week;
        while (_i <= _loop) {
          _weeks.push({
            'week': _i
          });
          _i++;
        }
        _i = 1;
        while (_i <= _other_loop && _other_loop > 0) {
          _weeks.push({
            'week': _i
          });
          _i++;
        }
        this.weekList.html(Templates['WEEK_ITEM']({
          'data': _weeks
        }));
        return this;
      };


      /*
      @funname getWeeks
      @desc 获取某日在第几周
      @return 返回周数
       */

      CalendarView.prototype.getWeeks = function(days) {
        var D, D2, W, a, ad, b, c, cd, ds, e, i, x, year;
        if (days) {
          days = days.split('-');
          try {
            year = days[0];
            b = new Date(days[0], days[1] - 1, days[2], 0, 0, 0, 0);
            b = b.getDay() >= 0 ? b : false;
          } catch (_error) {
            e = _error;
            b = false;
          }
        }
        if (!b) {
          b = new Date();
          year = b.getYear();
        }
        ds = 24 * 3600 * 1000;
        a = new Date(year, 0, 1, 0, 0, 0, 0);
        ad = a.getDay() === 0 ? 7 : a.getDay();
        D = (b.getTime() - a.getTime()) / ds;
        if (ad <= 4) {
          if ((D + ad) <= 7) {
            return 1;
          } else {
            D += a.getDay();
          }
        } else {
          if ((D + ad) <= 7) {
            year -= 1;
            i = 31;
            while (i > 24) {
              x = this.getWeeks("" + year + "-12-" + i);
              if (x > 10) {
                return x;
              }
              i--;
            }
          } else {
            D -= 7 - ad;
          }
        }
        W = D / 7;
        if (Math.ceil(W) === W) {
          return W;
        }
        c = new Date(year, 11, 31, 0, 0, 0, 0);
        cd = c.getDay() === 0 ? 7 : c.getDay();
        if (cd < 4) {
          D2 = (c - b) / ds;
          if (D2 < cd) {
            return 1;
          }
        }
        return Math.ceil(W);
      };

      return CalendarView;

    })();
  });

}).call(this);
