###
@author brian
@email brian.netmad@gmail.com
@datetime 2014-12-01
@filename app.<file_type>
###

require.config(
    #urlArgs: "?#{Math.random()}"
    paths:
        # 基础模块
        jquery: '../../lib/jquery'
        handlebars: '../../lib/handlebars'
        util: '../../utils/1.0.1/util2'
        #Module
        Templates: './templates/Templates'
        LunarCalendar: './views/LunarCalendar'
        LunarCore: './views/LunarCore'
        CalendarView: './views/CalendarView'

    shim:
        'Templates':
            deps: ['handlebars']

)

(->
    document.onmousedown = (event)->
        if window.event
            event = window.event
        if event.button == 2
            return false

    require(['LunarCalendar'], (LunarCalendar)->
        calendar = new LunarCalendar()
        window.setTimeout(()->
           window.location.reload()
        , 1000*60*30)
    )
).call(this)
