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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info__ = __webpack_require__(2);

// 使用commonJs规范进行导入
const {sum,mul} = __webpack_require__(1)

console.log(sum(11,22));
console.log(mul(11,22));


// 使用ES6规范进行导入

console.log(__WEBPACK_IMPORTED_MODULE_0__info__["b" /* id */]);
console.log(__WEBPACK_IMPORTED_MODULE_0__info__["c" /* name */]);
console.log(__WEBPACK_IMPORTED_MODULE_0__info__["a" /* age */]);

// webpack的相关配置
// 1、前边我们打包的时候需要输入命令: webpack ./src/main.js ./dist/bundle.js,我们希望当我们输入webpack命令时就能
//   完成打包工作，而不需要输入前边那么长的命令，这时就需要创建一个webpack.config.js文件和package.json文件。
// 
// 2、只要用到了其他一些依赖，就需要用到package.json这个文件,我们可以通过命令： npm init  自动生成该文件
// 
// 3、如果package.json文件中还有其他的依赖的话，执行命令: npm install   安装相关依赖
// 
// 4、接下来需要创建webpack.config.js文件(具体配置详细看该文件)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function sum(num1,num2){
    return num1 + num2
}

function mul(num1,num2){
    return num1 * num2
}

module.exports = {
    sum,
    mul
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const id = '001';
/* harmony export (immutable) */ __webpack_exports__["b"] = id;

const name = 'zhansan';
/* harmony export (immutable) */ __webpack_exports__["c"] = name;

const age = 26;
/* harmony export (immutable) */ __webpack_exports__["a"] = age;




/***/ })
/******/ ]);