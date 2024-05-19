
/*! *****************************************************************************************************************************
* Copyright (c) Tuvalsoft Corporation. All rights reserved.                                                                     *
*                                                                                                                               *
* ████████╗██╗   ██╗██╗   ██╗ █████╗ ██╗         ███████╗██████╗  █████╗ ███╗   ███╗███████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗ *
* ╚══██╔══╝██║   ██║██║   ██║██╔══██╗██║         ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝ *
*    ██║   ██║   ██║██║   ██║███████║██║         █████╗  ██████╔╝███████║██╔████╔██║█████╗  ██║ █╗ ██║██║   ██║██████╔╝█████╔╝  *
*    ██║   ██║   ██║╚██╗ ██╔╝██╔══██║██║         ██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██║███╗██║██║   ██║██╔══██╗██╔═██╗  *
*    ██║   ╚██████╔╝ ╚████╔╝ ██║  ██║███████╗    ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗ *
*    ╚═╝    ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ *
*                                                                                                                               *
*                                                                                                                               *
* This file is part of Tuval Framework.                                                                                         *
* Copyright (c) Tuvalsoft 2019 All rights reserved.                                                                             *
*                                                                                                                               *
* Licensed under the GNU General Public License v3.0.                                                                           *
* More info at: https://choosealicense.com/licenses/gpl-3.0/                                                                    *
* Tuval Framework Created By Tuvalsoft in 2019                                                                                  *
******************************************************************************************************************************@*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tuval$forms"));
	else if(typeof define === 'function' && define.amd)
		define(["tuval$forms"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("tuval$forms")) : factory(root["tuval$forms"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE__tuval_forms__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/Controllers/AppController.ts":
/*!**********************************************!*\
  !*** ./src/App/Controllers/AppController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppController": () => (/* binding */ AppController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppController = /** @class */ (function (_super) {
    __extends(AppController, _super);
    function AppController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppController.prototype.InitController = function () {
        this.menu_text = 'About';
    };
    AppController.prototype.OnBindModel = function (form) {
    };
    AppController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 10, alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Process Library")
            .width()
            .height(60)
            .foregroundColor("black")
            .marginTop("10 px")
            .fontWeight("bold")
            .fontSize("30")).width()
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 221 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)()
            .width()
            .height()
            .placeholder("Hızlı Arama"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Excel'e Aktar").foregroundColor("white")).background("#2838d3")
            .cornerRadius(10)
            .width(100)
            .height(35)).width(500)
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 350 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("İşleyiş Adı").foregroundColor("black").marginLeft("20 px").fontWeight("bold"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Metrikler").foregroundColor("black").fontWeight("bold")).background("#d9d9d9")
            .height()
            .borderBottom("10 px black"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)("\\e5cf").size(30)).width()
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Vizyon ve Strateji Geliştirme").foregroundColor("black").fontWeight("bold"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Mevcut").foregroundColor("white")).background("#2abb04")
            .width(50)
            .height(20)
            .cornerRadius(5))
            .height()
            .width(500)
            .borderBottom("1 px solid black"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)("\\e5cc").size(30)).width()
            .height()
            .marginLeft("15 px"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("İş koseptini ve uzun vadeli vizyonu tanımlayın").foregroundColor("black"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Mevcut").foregroundColor("white")).background("#2abb04")
            .width(50)
            .height(20)
            .cornerRadius(5))
            .height()
            .width(500)
            .borderBottom("1 px solid black"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)("\\e5cf").size(30)).width()
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Dış Ortamı değerlendirin").foregroundColor("black").fontWeight("bold"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Mevcut").foregroundColor("white")).background("#2abb04")
            .width(50)
            .height(20)
            .cornerRadius(5)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)("\\e5cf").size(30)).width()
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Rakipleri Tanımlayın").foregroundColor("black").fontWeight("bold"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Mevcut").foregroundColor("white")).background("#2abb04")
            .width(50)
            .height(20)
            .cornerRadius(5)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Yeni ürün/hizmet konseptlerine öncelik verin ve seçin ").foregroundColor("black"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Mevcut").foregroundColor("white")).background("#2abb04")
            .width(50)
            .height(20)
            .cornerRadius(5)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Maliyet ve kalite hedeflerini planlayın ve geliştirin").foregroundColor("black"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Mevcut").foregroundColor("white")).background("#2abb04")
            .width(50)
            .height(20)
            .cornerRadius(5)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Geliştirme zamanlaması hedeflerini belirtin").foregroundColor("black"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("Mevcut").foregroundColor("white")).background("#2abb04")
            .width(50)
            .height(20)
            .cornerRadius(5))).width()
            .height())).backgroundColor("white");
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], AppController.prototype, "menu_text", void 0);
    return AppController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/MainForm.ts":
/*!*************************!*\
  !*** ./src/MainForm.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainForm": () => (/* binding */ MainForm)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Controllers_AppController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/Controllers/AppController */ "./src/App/Controllers/AppController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MainForm = /** @class */ (function (_super) {
    __extends(MainForm, _super);
    function MainForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainForm.prototype.InitComponents = function () {
        this.Width = 1120;
        this.Height = 700;
        this.ShowHeader = true;
        var appController = new _App_Controllers_AppController__WEBPACK_IMPORTED_MODULE_1__.AppController();
        appController.Bind(this);
        this.Controls.Add(appController);
    };
    return MainForm;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TForm));



/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'TestApp',
        path: './src/Application.ts',
        icon:"data:image/svg+xml;base64,PHN2ZyBpZD0iYjFlNzE0NzktMjEzOC00NGUwLWFkZjAtMDJmZTlmZWQ1YzFlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNMS4xNTUsNC45M3YuNTEyTDksOS44NjhsNy4wMDYtMy45NTcsMCwxLjZMOSwxMS40OTEsMS41NSw3LjI1OGwtLjM5NS4yMlYxMC41NEw5LDE0Ljk1NWw3LjAwNi0zLjk0MiwwLDEuNTg2TDksMTYuNTgxLDEuNTUsMTIuMzQ3bC0uMzk1LjIydi41MTlMOSwxNy41bDcuODQ1LTQuNDE0VjEwLjAyMWwtLjQtLjIxOEw5LDE0LjAzNiwxLjk5MiwxMC4wNTRWOC40NzZMOSwxMi40MTQsMTYuODQ1LDhWNC45NzhsLS40LS4yMTlMOSw4Ljk5MywyLjM1Miw1LjIxNSw5LDEuNDZsNS40NzYsMy4wOTQuNDc5LS4yNjlWMy44NjNMOSwuNVoiIGZpbGw9IiNmZjM2MjEiIC8+PC9zdmc+",
        docker_container_name:"realm_dev_1"
    }
}

/***/ }),

/***/ "@tuval/forms":
/*!******************************!*\
  !*** external "tuval$forms" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_forms__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/Application.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconLibrary": () => (/* binding */ IconLibrary)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainForm */ "./src/MainForm.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var manifest = __webpack_require__(/*! ./manifest */ "./src/manifest.js");
function App(manifest) {
    return function (constructor) {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    };
}
var IconLibrary = /** @class */ (function (_super) {
    __extends(IconLibrary, _super);
    function IconLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconLibrary.prototype.InitComponents = function () {
        var _this = this;
        debugger;
        this.Icon = manifest.application.icon;
        var fileExprorer = new _MainForm__WEBPACK_IMPORTED_MODULE_1__.MainForm();
        //fileExprorer.Controls.Add(button);
        this.SetMainForm(fileExprorer);
        setTimeout(function () { return _this.Start(); }, 100);
    };
    IconLibrary = __decorate([
        App(manifest)
    ], IconLibrary);
    return IconLibrary;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication));


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map

                tuval$core.ModuleLoader.FireModuleLoadedEvent('TestApp', tuval$core['__APPS__']['TestApp']);
                