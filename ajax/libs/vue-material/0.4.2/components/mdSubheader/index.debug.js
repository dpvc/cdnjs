(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(171);


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;
	
	var _mdSubheader = __webpack_require__(172);
	
	var _mdSubheader2 = _interopRequireDefault(_mdSubheader);
	
	var _mdSubheader3 = __webpack_require__(175);
	
	var _mdSubheader4 = _interopRequireDefault(_mdSubheader3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function install(Vue) {
	  Vue.component('md-subheader', Vue.extend(_mdSubheader2.default));
	
	  Vue.material.styles.push(_mdSubheader4.default);
	}
	module.exports = exports['default'];

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(173)
	
	/* script */
	__vue_exports__ = __webpack_require__(174)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mrufino/Projects/personal/github/vue-material/src/components/mdSubheader/mdSubheader.vue"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-70d869b1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-70d869b1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdSubheader.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 173:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 174:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	
	exports.default = {
	  render: function render(createElement) {
	    var tag = 'div';
	    var options = {
	      staticClass: 'md-subheader'
	    };
	
	    if (this.$parent.$options._componentTag === 'md-list') {
	      tag = 'li';
	    }
	
	    return createElement(tag, options, this.$slots.default);
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 175:
/***/ function(module, exports) {

	module.exports = ".THEME_NAME .md-subheader.md-primary, .THEME_NAME.md-subheader.md-primary {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME .md-subheader.md-accent, .THEME_NAME.md-subheader.md-accent {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME .md-subheader.md-warn, .THEME_NAME.md-subheader.md-warn {\n  color: WARN-COLOR; }\n"

/***/ }

/******/ })
});
;
//# sourceMappingURL=index.debug.js.map