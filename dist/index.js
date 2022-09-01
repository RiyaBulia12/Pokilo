/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/main.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/main.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --main-theme-color: #111;\\n  --dark-black-color: #040301;\\n  --yellow-color: #d8b54f;\\n}\\n\\n* {\\n  text-align: center;\\n  font-family: 'Barlow Condensed', sans-serif;\\n  font-weight: 600;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  color: #fff;\\n  background-color: var(--main-theme-color);\\n  font-family: 'Barlow Condensed', sans-serif;\\n}\\n\\n.container-fluid {\\n  display: flex;\\n  flex-direction: column;\\n  --bs-gutter-x: 0;\\n}\\n\\n.header {\\n  background-color: var(--dark-black-color);\\n}\\n\\n.header #nav li a {\\n  color: var(--yellow-color);\\n  letter-spacing: 4px;\\n}\\n\\n.logo-img {}\\n\\n.img-section img {\\n  width: 100%;\\n  height: 100vh;\\n}\\n\\n.text-section {\\n  letter-spacing: 10px;\\n\\n  padding: 2rem 3.5rem;\\n  margin: 2rem 0;\\n  box-shadow: 0 0 .2rem #fff,\\n    0 0 .2rem #fff,\\n    0 0 2rem #d8b54f,\\n    0 0 0.8rem #d8b54f,\\n    0 0 2.8rem #d8b54f,\\n    inset 0 0 1.3rem #d8b54f;\\n}\\n\\n.main-text {\\n  font-size: 72px;\\n}\\n\\n.sub-text {\\n  font-size: 40px;\\n  letter-spacing: 22px;\\n}\\n\\n.shadowText {\\n  color: #fff;\\n  text-shadow:\\n    0 0 7px #fff,\\n    0 0 10px #fff,\\n    0 0 21px #fff,\\n    0 0 42px #d8b54f,\\n    0 0 82px #d8b54f,\\n    0 0 92px #d8b54f,\\n    0 0 102px #d8b54f,\\n    0 0 151px #d8b54f;\\n  animation: pulsate 1.5s infinite alternate;\\n\\n}\\n\\n@keyframes pulsate {\\n\\n  100% {\\n    text-shadow:\\n      0 0 4px #fff,\\n      0 0 11px #fff,\\n      0 0 19px #fff,\\n      0 0 40px #d8b54f,\\n      0 0 80px #d8b54f,\\n      0 0 90px #d8b54f,\\n      0 0 100px #d8b54f,\\n      0 0 150px #d8b54f;\\n\\n  }\\n\\n  0% {\\n    text-shadow:\\n      0 0 4px #ffeeb9,\\n      0 0 8px #ffe492,\\n      0 0 12px #c3a753,\\n      0 0 20px #d8b54f,\\n      0 0 45px #d8b54f,\\n      0 0 55px #d8b54f,\\n      0 0 70px #d8b54f,\\n      0 0 80px #d8b54f;\\n  }\\n}\\n\\n.h6-text {\\n  letter-spacing: 14px;\\n  font-size: 12px;\\n}\\n\\n.text-container {\\n  position: absolute;\\n  top: 50%;\\n  left: 20%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.main-content {\\n  width: 80%;\\n  margin: 3rem auto;\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n/* ------------------------ Homepage Content Begins  -------------------------- */\\n.poke-card {\\n  background-color: #191919;\\n}\\n\\n.card {\\n  background-color: #191919;\\n  border-color: #191919;\\n}\\n\\n.image {\\n  width: 100px;\\n  height: 100px;\\n  object-fit: cover;\\n  margin: 0 auto;\\n}\\n\\n.image img {\\n  width: 100%;\\n}\\n\\n.desc {\\n  display: flex;\\n  justify-content: right;\\n  font-size: large;\\n  gap: 1rem;\\n}\\n\\n/* .desc {\\n  display: flex;\\n  justify-content: space-between;\\n  font-size: large;\\n} */\\n.card-img {\\n  filter: drop-shadow(2px 3px 12px #d8b54f);\\n}\\n\\n.comment-btn {\\n  color: #d8b54f;\\n  font-size: small;\\n  font-weight: 600;\\n  letter-spacing: 1px;\\n}\\n\\n.bi-heart {\\n  border-color: #d8b54f;\\n}\\n\\n.bi-heart-fill {\\n  color: #d8b54f;\\n}\\n\\n.modal-content {\\n  background-color: var(--yellow-color);\\n}\\n\\n.footer {\\n  padding: 1rem;\\n  color: var(--yellow-color);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokemon/./src/assets/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pokemon/./src/assets/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/img sync \\.(png%7Cjpe?g%7Csvg)$":
/*!******************************************************************!*\
  !*** ./src/assets/img/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./1.png\": \"./src/assets/img/1.png\",\n\t\"./10.png\": \"./src/assets/img/10.png\",\n\t\"./11.png\": \"./src/assets/img/11.png\",\n\t\"./12.png\": \"./src/assets/img/12.png\",\n\t\"./13.png\": \"./src/assets/img/13.png\",\n\t\"./14.png\": \"./src/assets/img/14.png\",\n\t\"./15.png\": \"./src/assets/img/15.png\",\n\t\"./16.png\": \"./src/assets/img/16.png\",\n\t\"./17.png\": \"./src/assets/img/17.png\",\n\t\"./18.png\": \"./src/assets/img/18.png\",\n\t\"./19.png\": \"./src/assets/img/19.png\",\n\t\"./2.png\": \"./src/assets/img/2.png\",\n\t\"./20.png\": \"./src/assets/img/20.png\",\n\t\"./3.png\": \"./src/assets/img/3.png\",\n\t\"./4.png\": \"./src/assets/img/4.png\",\n\t\"./5.png\": \"./src/assets/img/5.png\",\n\t\"./6.png\": \"./src/assets/img/6.png\",\n\t\"./7.png\": \"./src/assets/img/7.png\",\n\t\"./8.png\": \"./src/assets/img/8.png\",\n\t\"./9.png\": \"./src/assets/img/9.png\",\n\t\"./banner.jpg\": \"./src/assets/img/banner.jpg\",\n\t\"./favicon.png\": \"./src/assets/img/favicon.png\",\n\t\"./like.png\": \"./src/assets/img/like.png\",\n\t\"./logo.png\": \"./src/assets/img/logo.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/img sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/assets/js/api.js":
/*!******************************!*\
  !*** ./src/assets/js/api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getPoke\": () => (/* binding */ getPoke),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/i9ViDXj1rEqPZZirEc18';\n\nconst getPoke = async () => {\n   const getResult = await fetch(`${pokeUrl}?offset=0&limit=9`);\n   const json = await getResult.json();\n   return json.results;\n};\n\nconst getLikes = async () => {\n   const getResult = await fetch(`${baseUrl}/likes`);\n   const json = await getResult.json();\n   return json;\n};\n\nconst postLikes = async (itemId) => {\n   await fetch(`${baseUrl}/likes`, {\n      method: 'POST',\n      body: JSON.stringify(itemId),\n      headers: {\n         'Content-type': 'application/json; charset=UTF-8',\n      },\n   });\n};\n\n\n//# sourceURL=webpack://pokemon/./src/assets/js/api.js?");

/***/ }),

/***/ "./src/assets/js/comments.js":
/*!***********************************!*\
  !*** ./src/assets/js/comments.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"viewPoke\": () => (/* binding */ viewPoke)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/assets/js/api.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/assets/js/functions.js\");\n\n\n\nconst images = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.importImages)(__webpack_require__(\"./src/assets/img sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\nfunction popupDetails(poke, id) {\n  const pokeId = +poke.url.split('/').filter(Boolean).pop();\n  if (id === pokeId) {\n    document.querySelector('.project-content').innerHTML = `<div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body\">\n              <img src=\"${images[`${id}.png`]}\" alt=\"pokemon image 1\" />\n              <h5 class=\"modal-title\">${poke.name}</h5>\n              <p> Trick Room: Brave/Quiet. <br>\n                Pivot: Relaxed/Sassy. <br>\n                Mixed Attacker: Defense-Lowering Natures. <br>\n                Special Defense: Careful/Calm. <br>\n              </p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>`;\n  }\n}\n\nconst viewPoke = async (id) => {\n  const pokeDetails = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPoke)();\n  pokeDetails.forEach((poke) => {\n    popupDetails(poke, id);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ viewPoke });\n\n\n\n//# sourceURL=webpack://pokemon/./src/assets/js/comments.js?");

/***/ }),

/***/ "./src/assets/js/functions.js":
/*!************************************!*\
  !*** ./src/assets/js/functions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"importImages\": () => (/* binding */ importImages)\n/* harmony export */ });\nfunction importImages(r) {\n  const images = {};\n  r.keys().forEach((item) => {\n    images[item.replace('./', '')] = r(item);\n  });\n  return images;\n}\n// <<<<<<< HEAD\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ importImages });\n// =======\n// export default { importImages };\n// >>>>>>> 3fc844d071526692b4d574b58b074ae97493bc17\n\n\n//# sourceURL=webpack://pokemon/./src/assets/js/functions.js?");

/***/ }),

/***/ "./src/assets/js/likes.js":
/*!********************************!*\
  !*** ./src/assets/js/likes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/assets/js/api.js\");\n\n\nconst updateLikes = (e) => {\n   e.target.classList.remove('bi-heart');\n   e.target.classList.add('bi-heart-fill');\n\n   (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)({ item_id: e.target.id });\n   const count = document.querySelectorAll('.like-counts');\n   count.forEach((item) => {\n      const id = item.id.split('-')[1];\n      if (id === e.target.id) {\n         let count = +item.innerHTML;\n         count += 1;\n         item.innerHTML = count.toString();\n      }\n   });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ updateLikes });\n\n\n//# sourceURL=webpack://pokemon/./src/assets/js/likes.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/assets/css/main.css\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/assets/js/api.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/assets/js/comments.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.js */ \"./src/assets/js/functions.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./likes.js */ \"./src/assets/js/likes.js\");\n\n\n\n\n\n\n\nconst images = (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.importImages)(__webpack_require__(\"./src/assets/img sync \\\\.(png%7Cjpe?g%7Csvg)$\"));\nconst grid = document.querySelector('.poke-grid');\nconst createGrid = (item, id, likes) => {\n  grid.innerHTML += `\n    <div class=\"col-3 px-4 pt-4 poke-card\">\n      <div class=\"card\">\n        <div class=\"desc\">\n          <i class=\"bi bi-heart\" id=\"${item?.name}\"></i>\n          <span class=\"like-counts\" id=\"like-${item?.name}\">${likes}</span>\n        </div>\n        <img class=\"card-img py-4 w-75 m-auto\" src=\"${images[`${id}.png`]}\" alt=\"Pokemon Image\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title text-capitalize\">${item.name}</h3>\n          <div class=\"btn-container\">\n            <button type=\"button\" class=\"btn comment-btn text-uppercase\" id=\"${id}\" data-bs-toggle=\"modal\" data-bs-target=\"#projectModal\">Comment</button>\n          </div>\n        </div>\n\n    </div>\n  </div>`;\n  //   <div class=\"image\">\n  //     <img src=\"${images[`${id}.png`]}\" alt=\"pokemon image 1\" />\n  //   </div>\n  //   <div class=\"desc\">\n  //     <h3>${item.name}</h3>\n  //     <i class=\"bi bi-heart\" id=\"${item?.name}\"></i>\n  //     <span class=\"like-counts\" id=\"like-${item?.name}\">${likes}</span>\n  //   </div>\n  //   <div class=\"btn-container\">\n  //     <button type=\"button\" class=\"btn btn-warning comment-btn\" id=\"${id}\" data-bs-toggle=\"modal\" data-bs-target=\"#projectModal\">Comment</button>\n  //   </div>\n  // </div>\n  // `;\n};\n\nconst loadPoke = async () => {\n  const getPokemon = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getPoke)();\n  const getLikeList = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\n  getPokemon.forEach((item, id) => {\n    const like = getLikeList[id]?.likes;\n    const pokeId = +item.url.split('/').filter(Boolean).pop();\n    createGrid(item, pokeId, like);\n\n    const likeIcon = document.querySelectorAll('.bi-heart');\n    likeIcon.forEach((item) => {\n      item.addEventListener('click', (e) => {\n        (0,_likes_js__WEBPACK_IMPORTED_MODULE_4__.updateLikes)(e);\n      });\n    });\n\n    // =======\n    // import { getPoke } from './api.js';\n    // import { viewPoke } from './comments.js';\n    // import { importImages } from './functions.js';\n\n    // const images = importImages(require.context('../img', false, /\\.(png|jpe?g|svg)$/));\n    // const grid = document.querySelector('.poke-grid');\n    // const createGrid = (item, id) => {\n    //   grid.innerHTML += `\n    //     <div class=\"col-3 \">\n    //       <div class=\"image\">\n    //         <img src=\"${images[`${id}.png`]}\" alt=\"pokemon image 1\" />\n    //       </div>\n    //       <div class=\"desc\">\n    //         <h3>${item.name}</h3>\n    //         <img src=\"${images['like.png']}\" alt=\"Like Icon\" class=\"icon\"/>\n    //       </div>\n    //       <div class=\"btn-container\">\n    //         <button type=\"button\" class=\"btn btn-warning comment-btn\" id=\"${id}\" data-bs-toggle=\"modal\" data-bs-target=\"#projectModal\">Comment</button>\n    //       </div>\n    //     </div>\n    //   `;\n    // };\n\n    // const loadPoke = async () => {\n    //   let id = 1;\n    //   const getPokemon = await getPoke();\n    //   getPokemon.forEach((item) => {\n    //     id += 1;\n    //     createGrid(item, id);\n    // >>>>>>> 3fc844d071526692b4d574b58b074ae97493bc17\n    const commentBtns = document.querySelectorAll('.comment-btn');\n    commentBtns.forEach((comment) => {\n      comment.onclick = (event) => {\n        (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.viewPoke)(+event.target.id);\n      };\n    });\n  });\n};\n\n// <<<<<<< HEAD\nloadPoke();\n// =======\n// loadPoke();\n// >>>>>>> 3fc844d071526692b4d574b58b074ae97493bc17\n\n\n//# sourceURL=webpack://pokemon/./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/img/1.png":
/*!******************************!*\
  !*** ./src/assets/img/1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"102350da58482ee4ad1c.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/1.png?");

/***/ }),

/***/ "./src/assets/img/10.png":
/*!*******************************!*\
  !*** ./src/assets/img/10.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6e20e883ae77907854a0.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/10.png?");

/***/ }),

/***/ "./src/assets/img/11.png":
/*!*******************************!*\
  !*** ./src/assets/img/11.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b3751f5a5f82b6b2a5b9.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/11.png?");

/***/ }),

/***/ "./src/assets/img/12.png":
/*!*******************************!*\
  !*** ./src/assets/img/12.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ea8b695bdf8a14837469.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/12.png?");

/***/ }),

/***/ "./src/assets/img/13.png":
/*!*******************************!*\
  !*** ./src/assets/img/13.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c5d519f0caee696f726b.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/13.png?");

/***/ }),

/***/ "./src/assets/img/14.png":
/*!*******************************!*\
  !*** ./src/assets/img/14.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"72932b506dca2608e32b.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/14.png?");

/***/ }),

/***/ "./src/assets/img/15.png":
/*!*******************************!*\
  !*** ./src/assets/img/15.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"30726753f7e882050125.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/15.png?");

/***/ }),

/***/ "./src/assets/img/16.png":
/*!*******************************!*\
  !*** ./src/assets/img/16.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2d8941b05f4f4d05c3ad.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/16.png?");

/***/ }),

/***/ "./src/assets/img/17.png":
/*!*******************************!*\
  !*** ./src/assets/img/17.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ef2a3a603482502128ea.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/17.png?");

/***/ }),

/***/ "./src/assets/img/18.png":
/*!*******************************!*\
  !*** ./src/assets/img/18.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"adb0dd56f9410ed1070b.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/18.png?");

/***/ }),

/***/ "./src/assets/img/19.png":
/*!*******************************!*\
  !*** ./src/assets/img/19.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"70316b79434e7727f5d4.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/19.png?");

/***/ }),

/***/ "./src/assets/img/2.png":
/*!******************************!*\
  !*** ./src/assets/img/2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"651a86c07b304c7ff753.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/2.png?");

/***/ }),

/***/ "./src/assets/img/20.png":
/*!*******************************!*\
  !*** ./src/assets/img/20.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b411511ba47903a33cc0.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/20.png?");

/***/ }),

/***/ "./src/assets/img/3.png":
/*!******************************!*\
  !*** ./src/assets/img/3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"76df1a2e169ee0136e9b.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/3.png?");

/***/ }),

/***/ "./src/assets/img/4.png":
/*!******************************!*\
  !*** ./src/assets/img/4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3284e51ab1112efd91cc.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/4.png?");

/***/ }),

/***/ "./src/assets/img/5.png":
/*!******************************!*\
  !*** ./src/assets/img/5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f3cb5a2109ecd6067892.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/5.png?");

/***/ }),

/***/ "./src/assets/img/6.png":
/*!******************************!*\
  !*** ./src/assets/img/6.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c285ffdeff42fc622673.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/6.png?");

/***/ }),

/***/ "./src/assets/img/7.png":
/*!******************************!*\
  !*** ./src/assets/img/7.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8aa607dea488ce0c680b.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/7.png?");

/***/ }),

/***/ "./src/assets/img/8.png":
/*!******************************!*\
  !*** ./src/assets/img/8.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cd8e100dc1deec94c27b.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/8.png?");

/***/ }),

/***/ "./src/assets/img/9.png":
/*!******************************!*\
  !*** ./src/assets/img/9.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5e9a9a0ae7015c648ea4.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/9.png?");

/***/ }),

/***/ "./src/assets/img/banner.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/banner.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6f035efcbeabb09df369.jpg\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/banner.jpg?");

/***/ }),

/***/ "./src/assets/img/favicon.png":
/*!************************************!*\
  !*** ./src/assets/img/favicon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"41a029c229ed12123279.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/favicon.png?");

/***/ }),

/***/ "./src/assets/img/like.png":
/*!*********************************!*\
  !*** ./src/assets/img/like.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"512bc1bdffab949c3c40.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/like.png?");

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"abbffc351702cf5621dc.png\";\n\n//# sourceURL=webpack://pokemon/./src/assets/img/logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/main.js");
/******/ 	
/******/ })()
;