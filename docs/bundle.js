/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "*{margin:0;padding:0}header{background:url(https://placeimg.com/1000/450/tech) top;width:100%;height:66vh;background-size:cover;display:-webkit-box;display:-ms-flexbox;display:flex}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0YnRheS9EZXYvZGF5c29mZGV2cy9zcmMvc2Nzcy9fcmVzZXQuc2NzcyIsIi9Vc2Vycy9tYXR0YnRheS9EZXYvZGF5c29mZGV2cy9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFDSSxTQUFRLEFBQ1IsU0FBUyxDQUNaLEFDREQsT0FDRSx1REFBK0QsQUFDL0QsV0FBVSxBQUNWLFlBQVcsQUFDWCxzQkFBc0IsQUFDdEIsb0JBQVksQUFBWixvQkFBWSxBQUFaLFlBQVksQ0FDYiIsImZpbGUiOiJzcmMvc2Nzcy9tYWluLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59IiwiQGltcG9ydCAnX3Jlc2V0JztcblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDp1cmwoXCJodHRwczovL3BsYWNlaW1nLmNvbS8xMDAwLzQ1MC90ZWNoXCIpIHRvcCBjZW50ZXI7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDo2NnZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OmZsZXg7XG59Il19 */", "", {"version":3,"sources":["/Users/mattbtay/Dev/daysofdevs/src/scss/_reset.scss","/Users/mattbtay/Dev/daysofdevs/src/scss/main.scss","/Users/mattbtay/Dev/daysofdevs/src/scss/main.scss"],"names":[],"mappings":"AAAA,EACI,SAAQ,SACC,CACZ,OCAC,uDAA+D,WACrD,YACC,sBACW,oBACtB,oBAAA,YAAY,CACb;ACPD,qwBAAqwB","file":"main.scss","sourcesContent":["* {\n    margin:0;\n    padding:0;\n}","@import '_reset';\n\nheader {\n  background:url(\"https://placeimg.com/1000/450/tech\") top center;\n  width:100%;\n  height:66vh;\n  background-size: cover;\n  display:flex;\n}","*{margin:0;padding:0}header{background:url(https://placeimg.com/1000/450/tech) top;width:100%;height:66vh;background-size:cover;display:-webkit-box;display:-ms-flexbox;display:flex}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0YnRheS9EZXYvZGF5c29mZGV2cy9zcmMvc2Nzcy9fcmVzZXQuc2NzcyIsIi9Vc2Vycy9tYXR0YnRheS9EZXYvZGF5c29mZGV2cy9zcmMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFDSSxTQUFRLEFBQ1IsU0FBUyxDQUNaLEFDREQsT0FDRSx1REFBK0QsQUFDL0QsV0FBVSxBQUNWLFlBQVcsQUFDWCxzQkFBc0IsQUFDdEIsb0JBQVksQUFBWixvQkFBWSxBQUFaLFlBQVksQ0FDYiIsImZpbGUiOiJzcmMvc2Nzcy9tYWluLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59IiwiQGltcG9ydCAnX3Jlc2V0JztcblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDp1cmwoXCJodHRwczovL3BsYWNlaW1nLmNvbS8xMDAwLzQ1MC90ZWNoXCIpIHRvcCBjZW50ZXI7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDo2NnZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OmZsZXg7XG59Il19 */"],"sourceRoot":""}]);

// exports


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

console.log('hello');

/***/ })
/******/ ]);