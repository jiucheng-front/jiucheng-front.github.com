###
@author brian
@email brian.netmad@gmail.com
@datetime 2014-12-01
@filename LunarCalendar.<file_type>
###
define(['jquery', 'util', 'handlebars', 'Templates', 'CalendarView'], ($, util, Handlebars, Templates, CalendarView)->
    ###
    @class LunarCalendar
    @desc 农历实例类
    ###
    class LunarCalendar
        weather_style: {
                        '0': 'qing'
                        '1': 'duoyun'
                        '2': 'yintian'
                        '3': 'leizhenyu'
                        '4': 'leizhenyu'
                        '5': 'zhenyubingbao'
                        '6': 'dongyu'
                        '7': 'xiaoyu'
                        '8': 'zhongyu'
                        '9': 'dayu'
                        '10': 'baoyu'
                        '11': 'baoyu'
                        '12': 'baoyu'
                        '13': 'leizhenyu'
                        '14': 'xiaoxue'
                        '15': 'zhongxue'
                        '16': 'daxue'
                        '17': 'baoxue'
                        '18': 'wu'
                        '19': 'dongyu'
                        '20': 'shachenbao'
                        '22': 'zhongyu'
                        '23': 'zhongyu'
                        '24': 'dayu'
                        '25': 'baoyu'
                        '26': 'zhongxue'
                        '27': 'daxue'
                        '28': 'baoxue'
                        '29': 'shachenbao'
                        '30': 'shachenbao'
                        '31': 'shachenbao'
                        '53': 'wumai'
                        '99': 'qing'
        }
        ###
        @funname constructor
        @desc 构造函数，程序初始化入口
        ###
        constructor: ()->
            @initialize()
        ###
        @funname initialize
        @desc 初始化DOM获取
        ###
        initialize: ()->
            @btnPrev = $ "#jsPrevMonth"
            @btnNext = $ "#jsNextMonth"
            @btnReturnToday = $ "#jsReturnTodayBtn"
            @labLunarCalendar= $ "#jsLunarcalendarLab"
            @labGregorian = $ "#jsGregorianLab"
            @calendarPanel = $ "#calendarPanel"
            @labTime = $ "#jstimeLab"
            @labYearMonth = $ "#jsYearMonthLab"
            @newsEL = $ "#jsNewList"
            @cityTemperature = $ "#city_temperature"
            @cityInfo = $ "#city_info"

            @currentDate = new Date()
            @timer = 0
            @initCalendar().eventBinds().getCityWeatherInfo()
            return @
        ###
        @funname initCalendar
        @desc 初始化日历视图控制类
        ###
        initCalendar: ()->
            @labTime.html @getTime(@timer)

            window.setInterval(()=>
                @labTime.html @getTime(@timer)
                @timer++
            , 999)
            gNum
            i=0
            __innerHTML = ''
            while(i<6)
                j=0
                while(j<7)
                    gNum = i*7+j
                    __innerHTML += Templates['DAY_ITEM']({'index': gNum})
                    j++
                i++

            @calendarPanel.html __innerHTML

            window.yftoutiao = @getNewInfo
            _random = "#{@currentDate.getFullYear()}#{@currentDate.getMonth()}#{@currentDate.getDate()}"
            require(["http://s.yunfan.com/js/client/api/yftoutiao.js?#{_random}"])

            calendarView = new CalendarView()
            return @

        getTime: (o)->
            @currentDate = new Date()
            _str_time = if o % 2 == 0 then "{0}:{1}" else "{0} {1}"
            _minutes = if @currentDate.getMinutes() < 10 then util.format("0{0}", @currentDate.getMinutes()) else @currentDate.getMinutes()
            return util.format(_str_time, @currentDate.getHours(), _minutes)

        is_leap: (year)->
             return false

        ###
        @funname eventBinds
        @desc 事件绑定
        ###
        eventBinds: ()->
            $(document.body).delegate('a.jsNews', 'click', ()->
                ###
                    data stats
                    新闻推荐点击统计
                ###
                url = $(@).attr 'href'
                NU = encodeURIComponent(url)
                ED = "yingku.rili.#{$(@).attr('index')}"
                TM = (Date.parse(new Date()) /1000)
                TI = encodeURIComponent($(@).text())
                CU = 'http%3A%2F%2Fyingku.yunfan.com%2F'
                tj = "http://ulog.s.yunfan.com/analy/?RID=&FU=&NU=#{NU}&TM=#{TM}&ED=#{ED}&CP=&CU=#{CU}&DU=&GID=&PID=&AID=&IID=&CID=&TI=#{TI}";
                img = document.getElementById('client_send_tj')
                unless img
                    img = document.createElement("img")
                    img.id = "client_send_tj"
                    document.body.appendChild(img)
                img.src = tj
            )
            return @
        ###
        @funname getNewInfo
        @desc 新闻渲染
        ###
        getNewInfo: (r)=>
            @newsEL.html Templates['NEWS_ITEM']({'data': r.small.slice(0,5)})
            return @
        ###
        @funname getCityWeatherInfo
        @desc 城市天气设置
        ###
        getCityWeatherInfo: ()->
            if uIPData
                util.get({
                    url: "http://cal.yunfan.com/calendar/weather/#{uIPData.code}.json"
                    success: (resp, status)=>
                        if resp
                            @cityTemperature.html "#{resp.weatherinfo.st1}℃" #设置温度
                            @cityInfo.html(Templates['CITY_TPL']({
                                                                  'city': resp.weatherinfo.city
                                                                  'weather1': resp.weatherinfo.weather1
                                                                  'temp1': resp.weatherinfo.temp1
                                                                  'SD': resp.weatherinfo.SD
                                                                  'pm2_5': resp.pm25.pm2_5
                                                                  'quality': resp.pm25.quality
                                                                })
                            )
                            weatherinfo_single = resp.weatherinfo.img_single #获取天气标识
                            $('.temperature .icon').addClass(@weather_style[weatherinfo_single]) # 设置天气样式
                    error: (resp, status)=>
                        #@getCityWeatherInfo()
                        return false
                })
            return @
)
