({
  appDir: './1.0',
  baseUrl: './',
  dir: './min',
  modules: [
    {
      name: 'app'
    }
  ],
  fileExclusionRegExp: /^(r|build)\.js$/,
  optimizeCss: 'standard',
  removeCombined: false,
  paths: {
      jquery: '../../lib/jquery',
      handlebars: '../../lib/handlebars',
      handlebarsHelpers: '../../lib/helpers',
      util: '../../utils/1.0.1/util2',
      rondell: '../../lib/jquery.rondell.min',
      Templates: './templates/Templates',
      LunarCalendar: './views/LunarCalendar',
      LunarCore: './views/LunarCore',
      CalendarView: './views/CalendarView'
  },
  shim: {
    'jsonp': {
        deps: ['jquery']
	},
	'Templates': {
		deps: ['handlebars', 'handlebarsHelpers']
	},
	'handlebarsHelpers': {
		deps: ['handlebars']
	}
  }
})
