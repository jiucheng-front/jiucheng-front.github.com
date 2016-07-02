###
@author brian
@email brian.netmad@gmail.com
@datetime 2014-12-01
@filename CalendarView.<file_type>
###
window.HuangLi = window.HuangLi or {}

define(['jquery', 'util', 'handlebars', 'Templates', 'LunarCore'], ($, util, Handlebars, Templates, LunarCore)->
    ###
    日历视图控制类
    ###
    class CalendarView

        constructor: ()->
            @initialize()

        ###
        @初始化DOM元素获取
        @初始化接口调用
        ###
        initialize: ()->
            @calendarPanel = $ "#calendarPanel" # 列表DOM
            @btnPrev = $ "#jsPrevMonth" #上一月
            @btnNext = $ "#jsNextMonth" #下一月
            @btnReturnToday = $ "#jsReturnTodayBtn" #返回今天
            @labGregorian = $ "#jsGregorianLab" #农历标签
            @labYearMonth = $ "#jsYearMonthLab" #公里年份标签
            @weekList = $ "#jsWeekList" #周列表DOM
            @Yi = $ "#jsYiLab" #宜 标签
            @Ji = $ "#jsJiLab" #季 标签
            @hlurl = 'http://s.yunfan.com/js/LunarCalendar/1.0/data' # 黄历URL根目录
            @ganZhi = $ "#jsLunarcalendarLab" #农历干支

            @hlMinYear = 2008 #支持黄历的最小年份
            @hlMaxYear = 2020 #支持黄历的最大年份
            @minYear = 1891 #最小年份
            @maxYear = 2100 #最大年份
            @now = new Date() #今日日期
            @current = null #当前日历
            @DATA = null #日历数据
            @panel = [0,1]
            @pageWidth = 0
            @slideIng = false
            @timer = -1
            @eventBind().setCurrentByNow().showDate().getYearMonth() #初始化调用

            return @
        ###
        @funname formateDayD4
        @desc 转换 月份，天数为 dd%d% ->d1201 or d0101
        @month 月份 必须为date.getMonth()返回的值，或则-1
        @day 天
        @return 'dd%d%'
        ###
        formateDayD4: (month, day)->
            month = month + 1
            month = if month < 10 then "0#{month}" else month
            day = if day < 10 then "0#{day}" else day
            return "d#{month}#{day}"

        ###
        @funname formatDate
        @desc 获取当前日历的年月日串
        @return "d%-d%-d%"
        ###
        formatDate: ()->
            unless @current
                return ''
            year = @current.year
            month = @current.month
            day = @current.day

            month = if month < 10 then "0#{month}" else month
            day = if day < 10 then "0#{day}" else day
            return "#{year}-#{month}-#{day}"
        ###
        @funname setCurrentByNow
        @desc 设置当前或则默认时间
        @year 年
        @month 月
        @day 天
        @pos 是否是当前月
        @return @current[year, month, day, pos]
        ###
        setCurrentByNow: (year, month, day, pos)->
            @current = {
                year: year or @now.getFullYear()
                month: month or @now.getMonth()+1
                day: day or @now.getDate()
                pos: pos or 0
            }
            return @
        ###
        @funname getHL
        @desc 设置黄历信息
        ###
        getHL: ()->
            if HuangLi["y#{@current.year}"]
                hl = HuangLi["y#{@current.year}"][@formateDayD4(@current.month-1, @current.day)]
                @showHL(hl)
            else if @current.year>=@hlMinYear and @current.year<=@hlMaxYear
                require(["#{@hlurl}/hl#{@current.year}.js"], (r)=>
                    hl = HuangLi["y#{@current.year}"][@formateDayD4(@current.month-1, @current.day)]
                    @showHL(hl)
                )
        ###
        @funname showHL
        @desc 显示黄历信息
        ###
        showHL: (hl)=>

            @Ji.text hl?.j
            @Yi.text hl?.y
            return @
        ###
        @funname showInfo
        @desc 设置当前月份的日历信息，公历信息，农历信息
        ###
        showInfo: (_this)->

            @currentMonth = @current.month-1
            @currentYear = @current.year
            currentLunar = LunarCore.solarToLunar(@current.year, @current.month, @current.day)

            weekday = new Date(@current.year, @current.month-1, @current.day).getDay()
            weekList = ['日', '一', '二', '三', '四', '五', '六']
            _ganzhi = "【#{currentLunar.zodiac}年】#{currentLunar.lunarMonthName}#{currentLunar.lunarDayName}"
            fetv = []

            if currentLunar.term
                fetv.push currentLunar.term
            if currentLunar.lunarFestival
                fetv.push currentLunar.lunarFestival
            if currentLunar.solarFestival
                fetv.push currentLunar.solarFestival.split(' ')

            #$('.date_fetv').html(fetv.length>0 ? '节假日纪念日：'+fetv.join('，') : '');
            if(_this)
                $('a.click').removeClass 'click'
                $(_this.find('a')).addClass 'click'
            @ganZhi.html _ganzhi
            @labYearMonth.html "#{@current.year}-#{@current.month}"

            if @current.year==@now.getFullYear() and @current.month == @now.getMonth()+1 and  @current.day == @now.getDate()
                @labGregorian.html "<span class='today'></span><span class='returnToday' style='display:none'></span>#{@current.year}年#{@current.month}月#{@current.day} 周#{weekList[weekday]}"
            else
                @labGregorian.html "<span class='returnToday'></span>#{@current.year}年#{@current.month}月#{@current.day} 周#{weekList[weekday]}"
            @getHL()
            return @
        ###
        @funname resetInfo
        @desc 设置返回默认日期
        ###
        resetInfo: ()->
            oldObj = @calendarPanel.find('li').eq(current.pos)
            if @now.getFullYear()==@current.year and @now.getMonth()+1==@current.month and @now.getDate()==@current.day
                oldObj.attr('class','date_item date_today')
            else
                oldObj.attr('class','date_item');
            return @
        ###
        @funname showDate
        @desc 1. 设置日历列表
              2. 设置周列表
              3. 获取月份数据信息
        ###
        showDate: ()->
            @DATA = LunarCore.calendar(@current.year, @current.month, true)
            dateHtml = ''
            temp = Templates['DAY_ITEMS']
            i = 0
            #console.log?@DATA
            while (i<@DATA.monthData.length)

                itemData = @DATA.monthData[i]
                if i==0
                    endData = @DATA.monthData[@DATA.monthData.length-1]
                    first_week = @getWeeks("#{itemData.year}-#{itemData.month}-#{itemData.day}")
                    end_week = @getWeeks("#{endData.year}-#{endData.month}-#{endData.day}")
                    @setCurrMonthWeek(first_week, end_week)

                iconCl = ''
                holiday = null
                worktime = null

                if itemData.worktime
                    iconCl = if itemData.worktime==1 then 'worktime' else 'holiday'
                else
                    iconCl = ''

                fetvCls = ''
                if itemData.lunarFestival or itemData.term
                    fetvCls = ' lunar_fetv'
                else
                    fetvCls = if itemData.solarFestival then ' label-color' else ''

                if iconCl == 'holiday'
                    holiday = 'holiday'

                if iconCl == 'worktime'
                    worktime = 'work'
                weekday = ''
                _day = new Date(itemData.year, itemData.month-1, itemData.day)
                if _day.getDay() == 0 or _day.getDay() == 6
                    weekday = 'label-color'
                extendObj = {
                        index : i
                        itemCls: ''
                        hdays: holiday
                        works: worktime
                        fetvCls: fetvCls
                        weekday: weekday
                        lunar: ''
                    }
                itemCls = ''

                if @now.getFullYear()==itemData.year and @now.getMonth()+1==itemData.month and @now.getDate()==itemData.day
                    itemCls = 'normal selected'

                else
                    if @current.year==itemData.year and @current.month==itemData.month and @current.day==itemData.day
                        itemCls = 'click'
                        @current.pos = i
                    else
                        if i<@DATA.firstDay or i>=@DATA.firstDay+@DATA.monthDays
                            itemCls = 'abnormal'
                        else
                            itemCls = 'normal'
                extendObj.itemCls = itemCls
                lunar = itemData.lunarDayName

                if itemData.solarFestival
                    extendObj.fetvCls = 'label-color'
                    lunar = itemData.solarFestival
                if itemData.lunarFestival
                    extendObj.fetvCls = 'label-color'
                    lunar = itemData.lunarFestival
                if itemData.term

                    lunar = itemData.term
                    extendObj.fetvCls = 'label-color'
                extendObj.lunar = lunar
                $.extend(itemData, extendObj)

                dateHtml += temp(itemData)
                i++
            @calendarPanel.html(dateHtml)
            @showInfo()
            return @
        ###
        @funname pageDate
        @desc 设置选择日历
        @parameter
            @offset 上下月设置-1 上一月 +1 下月
            @_year 年
            @_month 月
            @_day 日
        ###
        pageDate: (offset,_year,_month,_day)->
            year = 0
            month = 0
            day = 0
            if _year and _month
                year  = _year
                month = _month
            else
                if @current.month+offset<1
                    year = @current.year-1
                    month = 12
                else if @current.month+offset>12
                    year = @current.year+1
                    month = 1
                else
                    year = @current.year
                    month = @current.month+offset

            if _day
                day = _day
            else
                if @current.day > LunarCalendar.getSolarMonthDays[month-1]
                    day = LunarCalendar.getSolarMonthDays[month-1]
                else
                    day = @current.day

            if year<@minYear or year>@maxYear
                return
            @setCurrentByNow(year,month,day)
            @showDate()
            return @

        getYearMonth: (opt)->

            @currentDate = new Date()
            unless opt
                @currentYear = @currentDate.getFullYear()
                @currentMonth = @currentDate.getMonth()
            else
                if opt == 1
                    @currentMonth += 1
                    if @currentMonth >= 12
                        @currentMonth = 0
                        @currentYear += 1
                    @pageDate(1,@currentYear, @currentMonth+1, 1)
                else
                    @currentMonth -= 1
                    if @currentMonth < 0
                        @currentMonth = 11
                        @currentYear -= 1
                    @pageDate(-1,@currentYear, @currentMonth+1, 1)
            _month = if @currentMonth+1 < 10 then util.format('0{0}', @currentMonth+1) else @currentMonth+1

            @labYearMonth.html util.format("{0}-{1}", @currentYear, _month)
            return @

        ###
        @funname eventBind
        @desc 事件绑定
        ###
        eventBind: ()->
            _this = @

            @btnPrev.on 'click', ()=>
                @getYearMonth(-1)

            @btnNext.on 'click', ()=>
                @getYearMonth(1)


            @calendarPanel.delegate('li', 'click', ()->
                index = $(@).attr('data-index')
                index = parseInt(index, 10)
                itemData = _this.DATA.monthData[index]
                if index < _this.DATA.firstDay
                    _this.pageDate(-1,itemData.year,itemData.month,itemData.day)
                else if index >= _this.DATA.firstDay + _this.DATA.monthDays
                    _this.pageDate(1,itemData.year,itemData.month,itemData.day)
                else
                    _this.setCurrentByNow(itemData.year,itemData.month,itemData.day,index)
                    _this.showInfo($(@))
            )

            $(document.body).delegate('.returnToday', 'click', ()->
                _this.setCurrentByNow().showDate().getYearMonth()
            )
            return @

        ###
        @funname getYearWeek
        @desc 获取某年某月第多少周
        @return 周数
        ###
        getYearWeek: (year, month)->
            date = new Date(year, month-1, 1)
            date2 = new Date(year, 0, 1)
            day1 = date.getDay()

            if day1 == 0
                day1 = 7

            day2 = date2.getDay()
            if day2 == 0
                day2 = 7
            d = Math.round((date.getTime() - date2.getTime() + (day2 - day1) * (24 * 60 * 60 * 1000)) / 86400000)
            return Math.ceil(d / 7) + 1

        ###
        @funname setCurrMonthWeek
        @desc 设置显示月份的周列表
        ###
        setCurrMonthWeek: (first_week, end_week)->
            #week = getYearWeek(year, month)
            _loop = 0
            _weeks = []
            if first_week > end_week
                _loop = (first_week+5) - end_week
                _other_loop = end_week
            else
                _loop = end_week

            _i = first_week
            while(_i<=_loop)
                _weeks.push({'week': _i})
                _i++
            _i = 1
            while(_i<=_other_loop and _other_loop > 0)
                _weeks.push({'week': _i})
                _i++
            @weekList.html Templates['WEEK_ITEM']({'data': _weeks})

            return @
        ###
        @funname getWeeks
        @desc 获取某日在第几周
        @return 返回周数
        ###
        getWeeks: (days)->
            if days
                days = days.split '-'
                try
                    year = days[0]
                    b = new Date(days[0], days[1]-1, days[2], 0, 0, 0, 0)
                    b = if b.getDay() >= 0 then b else false
                catch e
                    b = false
            unless b
                b = new Date()
                year = b.getYear()
            ds = 24*3600*1000
            a=new Date(year,0,1,0,0,0,0)
            ad= if a.getDay()==0 then 7 else a.getDay()
            D=(b.getTime()-a.getTime()) / ds

            if ad <= 4
                if (D+ad)<=7
                    return 1
                else
                    D+=a.getDay()
            else
                if (D+ad)<=7
                    year -= 1
                    i = 31
                    while(i>24)
                        x = @getWeeks("#{year}-12-#{i}")
                        if x > 10
                            return x
                        i--
                else
                    D -= 7 - ad
            W = D/7
            if Math.ceil(W)==W
                return W
            c = new Date(year, 11, 31, 0, 0, 0, 0)
            cd = if c.getDay() == 0 then 7 else c.getDay()
            if cd < 4
                D2 = (c-b) / ds
                if D2<cd
                    return 1
            return Math.ceil(W)

)
