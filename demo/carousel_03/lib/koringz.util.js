// (function(kwindow) {
	
	function getElementNode(attr_name, node, element) {
		element = el(element);
		if (isString(attr_name)) {
			if (/^\./g.test(attr_name)) {
				if (element.getElementsByClassName) {
					return element.getElementsByClassName((new callback(attr_name)).attr_class())[0]
				} else {
					var a = [];
					node = node || element;
					if (node.ownerDocument === '[object HTMLDocument]') node.all;
					for (var i = 0; i < node.length; i++) {
						if (node[i].className == (new callback(attr_name)).attr_class()) a.push(node[i])
					}
					return a
				}
			} else if (/^\#/g.test(attr_name)) {
				return element.getElementById((new callback(attr_name)).attr_id())
			} else {
				return element.getElementsByTagName(attr_name)[0]
			}
		}
	};

	function callback(element) {
		reg.apply(this, arguments)
	};

	function reg(options) {
		this.attr_class = function() {
			return options.replace(/./, "")
		};
		this.attr_id = function() {
			return options.replace(/#/, "")
		}
	};

	function addLister(domnode, eventType, handler) {
		el();
		if (el().all) {
			domnode.attachEvent("on" + eventType, handler)
		} else {
			domnode.addEventListener(eventType, handler, false)
		}
	};

	function isFragment(element) {
		return !!element && element instanceof documentFragment
	};

	function el(element) {
		if (!element) {
			element = document
		}
		return element
	};

	function trim(options) {
		return options.replace(/^\s+|\s+$/g, '')
	};

	function trySelector(element) {
		if (!isString(element)) {
			return false
		}
		el().querySelector(element);
		return true
	};

	function extend(dest, source) {
		for (var pop in source) {
			dest[pop] = source[pop]
		};
		return dest
	};

	function indexOf(array, target) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] == target) {
				return i
			}
		};
		return -1
	};

	function contains(array, target) {
		return indexOf(array, target) !== -1
	};

	function getWindow(element) {
		if (isWindow(element)) {
			return element
		}
		var rootElement = (element.ownerDocument || element);
		return rootElement.defaultView || rootElement.parentWindow || window
	};

	function isWindow(element) {
		return element === "window"
	};

	function isElement(element) {
		if (!element || (typeof element !== 'object')) {
			return false
		}
		var _window = getWindow(element) || window;
		return (/object|function/.test(typeof _window.Element) ? element instanceof _window.Element : element.nodeType == 1 && element.nodeName == 'string')
	};

	function isString(element) {
		return typeof element === "string"
	};

	function isFunction(element) {
		return typeof element === "function"
	};

	function isNumber(element) {
		return typeof element === "number"
	};

	function isObject(element) {
		return !!element && (typeof element === "object")
	};

	function isArray(element) {
		return typeof element === "array"
	};

	function isBoolean(element) {
		return typeof element === "boolean"
	};

	function isNull(element) {
		return element === null
	};

	function isUndefined(element) {
		return element === undefined
	};

	function isEmpty(element) {
		return /^\s*$/.test(element)
	};

	function loadImg(path, callback) {
		var img = new Image();
		img.src = path;
		img.onload = function() {
			img.src = null;
			if (callback ? !0 : !1) callback(path)
		}
	};

	// function koringz(element, options) {
	// 	return new koringsition(element, options)
	// };
	// var koringsition = function koringsition(element, options) {
	// 		this._element = element;
	// 		this._events = this._events || {};
	// 		if (trySelector(element)) {
	// 			this.selector = element;
	// 			var context = options && options.context;
	// 			var _window = context ? getWindow(context) : window;
	// 			if (context && (_window.Node ? context instanceof _window.Node : (isElement(context) || context === _window.document))) {
	// 				this._context = context
	// 			}
	// 		} else {
	// 			_window = getWindow(element);
	// 			if (isElement(element, _window)) {}
	// 		}
	// 		this._doc = _window.document;
	// 		if (!contains(documents, this._doc)) {}
	// 		this.set(options)
	// 	};
	// koringsition.prototype = {
	// 	set: function(options) {
	// 		if (!options) {
	// 			options = {}
	// 		}
	// 		this.options = extend({}, defaultElements.base);
	// 		var i, useElements = ['up', 'over', 'down'],
	// 			methods = ['mouseup', 'mouseover', 'mousedown'];
	// 		for (i = 0; i < useElements.length; i++) {
	// 			var useElement = useElements[i];
	// 			this.options[useElement] = extend({}, defaultElements[useElement])
	// 		}
	// 		var settings = ['accept', 'actionChecker', 'allowFrom', 'deltaSource', 'dropChecker', 'ignoreFrom', 'origin', 'preventDefault', 'rectChecker', 'styleCursor'];
	// 		for (var i = 0; i < settings.length; i++) {
	// 			var setting = settings[i];
	// 			this.options[setting] = defaultElements.base[setting];
	// 			if (setting in options) {
	// 				this[setting](options[setting])
	// 			}
	// 		}
	// 	}
	// };
	if (!OBJECT) var OBJECT = {};
	OBJECT.namespace = function(att) {
		for (var arr = att.split('.'), o = OBJECT, i = (arr[0] == 'OBJECT') ? 1 : 0; i < arr.length; i++) {
			o[arr[i]] = o[arr[i]] || {};
			o = o[arr[i]]
		}
	};
	var cool = {
		version: 2015 - 9 - 27,
		reversion: 0.1
	}
// })(window);