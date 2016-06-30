
/*
@author brian
@email brian.netmad@gmail.com
@datetime 2014-12-01
@filename app.<file_type>
 */

(function() {
  require.config({
    paths: {
      jquery: '../../lib/jquery',
      handlebars: '../../lib/handlebars',
      util: '../../utils/1.0.1/util2',
      Templates: './templates/Templates',
      LunarCalendar: './views/LunarCalendar',
      LunarCore: './views/LunarCore',
      CalendarView: './views/CalendarView'
    },
    shim: {
      'Templates': {
        deps: ['handlebars']
      }
    }
  });

  (function() {
    document.onmousedown = function(event) {
      if (window.event) {
        event = window.event;
      }
      if (event.button === 2) {
        return false;
      }
    };
    return require(['LunarCalendar'], function(LunarCalendar) {
      var calendar;
      calendar = new LunarCalendar();
      return window.setTimeout(function() {
        return window.location.reload();
      }, 1000 * 60 * 30);
    });
  }).call(this);

}).call(this);
