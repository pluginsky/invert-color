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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code/actions/excludeColors.ts":
/*!*******************************************!*\
  !*** ./src/code/actions/excludeColors.ts ***!
  \*******************************************/
/*! exports provided: excludeColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excludeColors", function() { return excludeColors; });
const excludeColors = () => { };


/***/ }),

/***/ "./src/code/actions/invert.ts":
/*!************************************!*\
  !*** ./src/code/actions/invert.ts ***!
  \************************************/
/*! exports provided: invert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
// const handleElementInvertedPattern = () => {
//   switch (level.type) {
//     case 'SOLID':
//     case 'DROP_SHADOW':
//     case 'INNER_SHADOW': {
//       break;
//     }
//     case 'GRADIENT_LINEAR':
//     case 'GRADIENT_RADIAL':
//     case 'GRADIENT_DIAMOND':
//     case 'GRADIENT_ANGULAR': {
//       break;
//     }
//     case 'IMAGE': {
//       break;
//     }
//   }
// };
// const checkerOne = () => {
//   return elements.includes(selected.type.toLowerCase()) && parts.length;
// };
// const runVeryNextLevel = () => {
//   temporary.forEach(async (level) => {
//     const checkerFour = () => {
//       return (
//         level &&
//         (part === 'effects' || patterns.includes(level.type.toLowerCase()))
//       );
//     };
//     if (checkerFour()) {
//       return handleElementInvertedPattern();
//     }
//     if ('children' in selected) {
//       await runInvert(selected['children']);
//     }
//   });
// };
// const runNextLevel = () => {
//   parts.forEach((part) => {
//     const checkerTwo = part in selected;
//     const checkerThree = () => {
//       return typeof selected[part] === 'symbol' || selected[part] === undefined;
//     };
//     if (!checkerTwo || checkerThree()) {
//       return;
//     }
//     // const checkerThree = () => {
//     //   return typeof selected[part] === 'symbol' ||
//     //   selected[part] === undefined
//     // }
//     // if (checkerThree()) {
//     //   return;
//     // }
//     const temporary = clone(selected[part]);
//   });
// };
const invert = () => {
    // const selectedElements = figma.currentPage.selection;
    // selectedElements.forEach(selectedElement => {
    //   if (checkerOne()) {
    //     runNextLevel()
    //   }
    // })
};


/***/ }),

/***/ "./src/code/actions/save.ts":
/*!**********************************!*\
  !*** ./src/code/actions/save.ts ***!
  \**********************************/
/*! exports provided: save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony import */ var _services_StoreService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/StoreService */ "./src/code/services/StoreService.ts");
/* harmony import */ var _enums_StorageKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/StorageKey */ "./src/code/enums/StorageKey.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const save = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield _services_StoreService__WEBPACK_IMPORTED_MODULE_0__["StoreService"].setState(_enums_StorageKey__WEBPACK_IMPORTED_MODULE_1__["StorageKey"].Settings, data);
});


/***/ }),

/***/ "./src/code/code.ts":
/*!**************************!*\
  !*** ./src/code/code.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handleCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleCommand */ "./src/code/handleCommand.ts");

Object(_handleCommand__WEBPACK_IMPORTED_MODULE_0__["handleCommands"])();


/***/ }),

/***/ "./src/code/enums/StorageKey.ts":
/*!**************************************!*\
  !*** ./src/code/enums/StorageKey.ts ***!
  \**************************************/
/*! exports provided: StorageKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageKey", function() { return StorageKey; });
var StorageKey;
(function (StorageKey) {
    StorageKey["Settings"] = "invert-color-settings";
})(StorageKey || (StorageKey = {}));


/***/ }),

/***/ "./src/code/handleCommand.ts":
/*!***********************************!*\
  !*** ./src/code/handleCommand.ts ***!
  \***********************************/
/*! exports provided: handleCommands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCommands", function() { return handleCommands; });
/* harmony import */ var _handleUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleUI */ "./src/code/handleUI.ts");

const handleCommands = () => {
    switch (figma.command) {
        case 'invert':
            break;
        case 'configure':
            Object(_handleUI__WEBPACK_IMPORTED_MODULE_0__["handleUI"])();
            break;
        case 'configure-from-elements':
            break;
        case 'exclude-colors':
            break;
        default:
            break;
    }
};


/***/ }),

/***/ "./src/code/handleUI.ts":
/*!******************************!*\
  !*** ./src/code/handleUI.ts ***!
  \******************************/
/*! exports provided: handleUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleUI", function() { return handleUI; });
/* harmony import */ var _actions_save__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/save */ "./src/code/actions/save.ts");
/* harmony import */ var _actions_invert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/invert */ "./src/code/actions/invert.ts");
/* harmony import */ var _actions_excludeColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/excludeColors */ "./src/code/actions/excludeColors.ts");
/* harmony import */ var _services_StoreService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/StoreService */ "./src/code/services/StoreService.ts");
/* harmony import */ var _enums_StorageKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/StorageKey */ "./src/code/enums/StorageKey.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





// const checkIsAtLeastElementSelectedOrClosePlugin = () => {
//   if (!figma.currentPage.selection.length) {
//     return figma.closePlugin('Select at least 1 element');
//   }
// };
const hideUI = () => {
    figma.ui.close();
};
const handleUIMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    // checkIsAtLeastElementSelectedOrClosePlugin();
    hideUI();
    switch (message.type) {
        case 'save':
            console.log(message.data);
            yield Object(_actions_save__WEBPACK_IMPORTED_MODULE_0__["save"])(message.data);
            figma.closePlugin();
            break;
        case 'invert':
            Object(_actions_invert__WEBPACK_IMPORTED_MODULE_1__["invert"])();
            break;
        case 'save-invert':
            yield Object(_actions_save__WEBPACK_IMPORTED_MODULE_0__["save"])(message.data);
            Object(_actions_invert__WEBPACK_IMPORTED_MODULE_1__["invert"])();
            break;
        case 'exclude-colors':
            Object(_actions_excludeColors__WEBPACK_IMPORTED_MODULE_2__["excludeColors"])();
            break;
        case 'get-settings':
            // figma.ui.postMessage({ pluginMessage: { type: 'get-settings' } });
            break;
        case 'cancel':
            return figma.closePlugin();
        default:
            break;
    }
});
const handleUI = () => __awaiter(void 0, void 0, void 0, function* () {
    figma.showUI(__html__, { height: 440 });
    console.log(yield _services_StoreService__WEBPACK_IMPORTED_MODULE_3__["StoreService"].getState(_enums_StorageKey__WEBPACK_IMPORTED_MODULE_4__["StorageKey"].Settings));
    figma.ui.postMessage({
        type: 'get-settings',
        data: yield _services_StoreService__WEBPACK_IMPORTED_MODULE_3__["StoreService"].getState(_enums_StorageKey__WEBPACK_IMPORTED_MODULE_4__["StorageKey"].Settings),
    });
    figma.ui.onmessage = (message) => {
        handleUIMessage(message);
    };
});


/***/ }),

/***/ "./src/code/services/StoreService.ts":
/*!*******************************************!*\
  !*** ./src/code/services/StoreService.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// TODO typeof StorageKey
class StoreService {
    static getState(storageKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield figma.clientStorage.getAsync(storageKey);
        });
    }
    static setState(storageKey, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield figma.clientStorage.setAsync(storageKey, data);
        });
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvYWN0aW9ucy9leGNsdWRlQ29sb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL2FjdGlvbnMvaW52ZXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL2FjdGlvbnMvc2F2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9jb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL2VudW1zL1N0b3JhZ2VLZXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvaGFuZGxlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9oYW5kbGVVSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9zZXJ2aWNlcy9TdG9yZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7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Q1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUvY29kZS50c1wiKTtcbiIsImV4cG9ydCBjb25zdCBleGNsdWRlQ29sb3JzID0gKCkgPT4geyB9O1xuIiwiLy8gY29uc3QgaGFuZGxlRWxlbWVudEludmVydGVkUGF0dGVybiA9ICgpID0+IHtcbi8vICAgc3dpdGNoIChsZXZlbC50eXBlKSB7XG4vLyAgICAgY2FzZSAnU09MSUQnOlxuLy8gICAgIGNhc2UgJ0RST1BfU0hBRE9XJzpcbi8vICAgICBjYXNlICdJTk5FUl9TSEFET1cnOiB7XG4vLyAgICAgICBicmVhaztcbi8vICAgICB9XG4vLyAgICAgY2FzZSAnR1JBRElFTlRfTElORUFSJzpcbi8vICAgICBjYXNlICdHUkFESUVOVF9SQURJQUwnOlxuLy8gICAgIGNhc2UgJ0dSQURJRU5UX0RJQU1PTkQnOlxuLy8gICAgIGNhc2UgJ0dSQURJRU5UX0FOR1VMQVInOiB7XG4vLyAgICAgICBicmVhaztcbi8vICAgICB9XG4vLyAgICAgY2FzZSAnSU1BR0UnOiB7XG4vLyAgICAgICBicmVhaztcbi8vICAgICB9XG4vLyAgIH1cbi8vIH07XG4vLyBjb25zdCBjaGVja2VyT25lID0gKCkgPT4ge1xuLy8gICByZXR1cm4gZWxlbWVudHMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZS50b0xvd2VyQ2FzZSgpKSAmJiBwYXJ0cy5sZW5ndGg7XG4vLyB9O1xuLy8gY29uc3QgcnVuVmVyeU5leHRMZXZlbCA9ICgpID0+IHtcbi8vICAgdGVtcG9yYXJ5LmZvckVhY2goYXN5bmMgKGxldmVsKSA9PiB7XG4vLyAgICAgY29uc3QgY2hlY2tlckZvdXIgPSAoKSA9PiB7XG4vLyAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICBsZXZlbCAmJlxuLy8gICAgICAgICAocGFydCA9PT0gJ2VmZmVjdHMnIHx8IHBhdHRlcm5zLmluY2x1ZGVzKGxldmVsLnR5cGUudG9Mb3dlckNhc2UoKSkpXG4vLyAgICAgICApO1xuLy8gICAgIH07XG4vLyAgICAgaWYgKGNoZWNrZXJGb3VyKCkpIHtcbi8vICAgICAgIHJldHVybiBoYW5kbGVFbGVtZW50SW52ZXJ0ZWRQYXR0ZXJuKCk7XG4vLyAgICAgfVxuLy8gICAgIGlmICgnY2hpbGRyZW4nIGluIHNlbGVjdGVkKSB7XG4vLyAgICAgICBhd2FpdCBydW5JbnZlcnQoc2VsZWN0ZWRbJ2NoaWxkcmVuJ10pO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9O1xuLy8gY29uc3QgcnVuTmV4dExldmVsID0gKCkgPT4ge1xuLy8gICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4vLyAgICAgY29uc3QgY2hlY2tlclR3byA9IHBhcnQgaW4gc2VsZWN0ZWQ7XG4vLyAgICAgY29uc3QgY2hlY2tlclRocmVlID0gKCkgPT4ge1xuLy8gICAgICAgcmV0dXJuIHR5cGVvZiBzZWxlY3RlZFtwYXJ0XSA9PT0gJ3N5bWJvbCcgfHwgc2VsZWN0ZWRbcGFydF0gPT09IHVuZGVmaW5lZDtcbi8vICAgICB9O1xuLy8gICAgIGlmICghY2hlY2tlclR3byB8fCBjaGVja2VyVGhyZWUoKSkge1xuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgICAvLyBjb25zdCBjaGVja2VyVGhyZWUgPSAoKSA9PiB7XG4vLyAgICAgLy8gICByZXR1cm4gdHlwZW9mIHNlbGVjdGVkW3BhcnRdID09PSAnc3ltYm9sJyB8fFxuLy8gICAgIC8vICAgc2VsZWN0ZWRbcGFydF0gPT09IHVuZGVmaW5lZFxuLy8gICAgIC8vIH1cbi8vICAgICAvLyBpZiAoY2hlY2tlclRocmVlKCkpIHtcbi8vICAgICAvLyAgIHJldHVybjtcbi8vICAgICAvLyB9XG4vLyAgICAgY29uc3QgdGVtcG9yYXJ5ID0gY2xvbmUoc2VsZWN0ZWRbcGFydF0pO1xuLy8gICB9KTtcbi8vIH07XG5leHBvcnQgY29uc3QgaW52ZXJ0ID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHNlbGVjdGVkRWxlbWVudHMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgLy8gc2VsZWN0ZWRFbGVtZW50cy5mb3JFYWNoKHNlbGVjdGVkRWxlbWVudCA9PiB7XG4gICAgLy8gICBpZiAoY2hlY2tlck9uZSgpKSB7XG4gICAgLy8gICAgIHJ1bk5leHRMZXZlbCgpXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL1N0b3JlU2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlS2V5IH0gZnJvbSAnLi4vZW51bXMvU3RvcmFnZUtleSc7XG5leHBvcnQgY29uc3Qgc2F2ZSA9IChkYXRhKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBTdG9yZVNlcnZpY2Uuc2V0U3RhdGUoU3RvcmFnZUtleS5TZXR0aW5ncywgZGF0YSk7XG59KTtcbiIsImltcG9ydCB7IGhhbmRsZUNvbW1hbmRzIH0gZnJvbSAnLi9oYW5kbGVDb21tYW5kJztcbmhhbmRsZUNvbW1hbmRzKCk7XG4iLCJleHBvcnQgdmFyIFN0b3JhZ2VLZXk7XG4oZnVuY3Rpb24gKFN0b3JhZ2VLZXkpIHtcbiAgICBTdG9yYWdlS2V5W1wiU2V0dGluZ3NcIl0gPSBcImludmVydC1jb2xvci1zZXR0aW5nc1wiO1xufSkoU3RvcmFnZUtleSB8fCAoU3RvcmFnZUtleSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBoYW5kbGVVSSB9IGZyb20gJy4vaGFuZGxlVUknO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUNvbW1hbmRzID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoZmlnbWEuY29tbWFuZCkge1xuICAgICAgICBjYXNlICdpbnZlcnQnOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbmZpZ3VyZSc6XG4gICAgICAgICAgICBoYW5kbGVVSSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbmZpZ3VyZS1mcm9tLWVsZW1lbnRzJzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdleGNsdWRlLWNvbG9ycyc6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHNhdmUgfSBmcm9tICcuL2FjdGlvbnMvc2F2ZSc7XG5pbXBvcnQgeyBpbnZlcnQgfSBmcm9tICcuL2FjdGlvbnMvaW52ZXJ0JztcbmltcG9ydCB7IGV4Y2x1ZGVDb2xvcnMgfSBmcm9tICcuL2FjdGlvbnMvZXhjbHVkZUNvbG9ycyc7XG5pbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL1N0b3JlU2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlS2V5IH0gZnJvbSAnLi9lbnVtcy9TdG9yYWdlS2V5Jztcbi8vIGNvbnN0IGNoZWNrSXNBdExlYXN0RWxlbWVudFNlbGVjdGVkT3JDbG9zZVBsdWdpbiA9ICgpID0+IHtcbi8vICAgaWYgKCFmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4vLyAgICAgcmV0dXJuIGZpZ21hLmNsb3NlUGx1Z2luKCdTZWxlY3QgYXQgbGVhc3QgMSBlbGVtZW50Jyk7XG4vLyAgIH1cbi8vIH07XG5jb25zdCBoaWRlVUkgPSAoKSA9PiB7XG4gICAgZmlnbWEudWkuY2xvc2UoKTtcbn07XG5jb25zdCBoYW5kbGVVSU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgLy8gY2hlY2tJc0F0TGVhc3RFbGVtZW50U2VsZWN0ZWRPckNsb3NlUGx1Z2luKCk7XG4gICAgaGlkZVVJKCk7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2F2ZSc6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgeWllbGQgc2F2ZShtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpbnZlcnQnOlxuICAgICAgICAgICAgaW52ZXJ0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2F2ZS1pbnZlcnQnOlxuICAgICAgICAgICAgeWllbGQgc2F2ZShtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgaW52ZXJ0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXhjbHVkZS1jb2xvcnMnOlxuICAgICAgICAgICAgZXhjbHVkZUNvbG9ycygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dldC1zZXR0aW5ncyc6XG4gICAgICAgICAgICAvLyBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2dldC1zZXR0aW5ncycgfSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgICAgcmV0dXJuIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVVSSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyBoZWlnaHQ6IDQ0MCB9KTtcbiAgICBjb25zb2xlLmxvZyh5aWVsZCBTdG9yZVNlcnZpY2UuZ2V0U3RhdGUoU3RvcmFnZUtleS5TZXR0aW5ncykpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ2dldC1zZXR0aW5ncycsXG4gICAgICAgIGRhdGE6IHlpZWxkIFN0b3JlU2VydmljZS5nZXRTdGF0ZShTdG9yYWdlS2V5LlNldHRpbmdzKSxcbiAgICB9KTtcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICBoYW5kbGVVSU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfTtcbn0pO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyBUT0RPIHR5cGVvZiBTdG9yYWdlS2V5XG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGUoc3RvcmFnZUtleSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoc3RvcmFnZUtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0U3RhdGUoc3RvcmFnZUtleSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoc3RvcmFnZUtleSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=