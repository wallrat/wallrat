/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(191);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(189);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(36);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(188);
	module.exports = __webpack_require__(7);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , $export           = __webpack_require__(5)
	  , DESCRIPTORS       = __webpack_require__(10)
	  , createDesc        = __webpack_require__(9)
	  , html              = __webpack_require__(16)
	  , cel               = __webpack_require__(17)
	  , has               = __webpack_require__(19)
	  , cof               = __webpack_require__(20)
	  , invoke            = __webpack_require__(21)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(22)
	  , aFunction         = __webpack_require__(15)
	  , isObject          = __webpack_require__(18)
	  , toObject          = __webpack_require__(23)
	  , toIObject         = __webpack_require__(25)
	  , toInteger         = __webpack_require__(27)
	  , toIndex           = __webpack_require__(28)
	  , toLength          = __webpack_require__(29)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(13)('__proto__')
	  , createArrayMethod = __webpack_require__(30)
	  , arrayIndexOf      = __webpack_require__(35)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;
	
	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(32)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	
	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(12)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , createDesc = __webpack_require__(9);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , SRC       = __webpack_require__(13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(23)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(31);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(18)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(13)
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(4)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(37)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(38)
	  , $names         = __webpack_require__(39)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(9)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(4).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(4).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(23)
	  , IObject  = __webpack_require__(26);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(49)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);
	
	__webpack_require__(51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(51)('getOwnPropertyNames', function(){
	  return __webpack_require__(39).get;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(4).setDesc
	  , createDesc = __webpack_require__(9)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(4)
	  , isObject      = __webpack_require__(18)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(4)
	  , global      = __webpack_require__(6)
	  , has         = __webpack_require__(19)
	  , cof         = __webpack_require__(20)
	  , toPrimitive = __webpack_require__(64)
	  , fails       = __webpack_require__(11)
	  , $trim       = __webpack_require__(65).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(10) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , defined = __webpack_require__(24)
	  , fails   = __webpack_require__(11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(69)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(77)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(81);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(85)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(81)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(77)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {sign: __webpack_require__(81)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(28)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(100)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(37)
	  , getProto       = __webpack_require__(4).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(4)
	  , descriptor     = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(37)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(107)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18)
	  , cof      = __webpack_require__(20)
	  , MATCH    = __webpack_require__(33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(33)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(106)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(111)
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(14)
	  , $export     = __webpack_require__(5)
	  , toObject    = __webpack_require__(23)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(120)
	  , step             = __webpack_require__(121)
	  , Iterators        = __webpack_require__(102)
	  , toIObject        = __webpack_require__(25);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123)('Array');

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , $           = __webpack_require__(4)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(33)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(125)});
	
	__webpack_require__(120)('copyWithin');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {fill: __webpack_require__(127)});
	
	__webpack_require__(120)('fill');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , global   = __webpack_require__(6)
	  , isRegExp = __webpack_require__(107)
	  , $flags   = __webpack_require__(131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(33)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(12)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(123)('RegExp');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(22);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(4);
	if(__webpack_require__(10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(131)
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(12)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(24)
	  , wks      = __webpack_require__(33);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(134)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(134)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(4)
	  , LIBRARY    = __webpack_require__(41)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(14)
	  , classof    = __webpack_require__(49)
	  , $export    = __webpack_require__(5)
	  , isObject   = __webpack_require__(18)
	  , anObject   = __webpack_require__(22)
	  , aFunction  = __webpack_require__(15)
	  , strictNew  = __webpack_require__(139)
	  , forOf      = __webpack_require__(140)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(45)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(141)
	  , asap       = __webpack_require__(142)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(144)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(37)(P, PROMISE);
	__webpack_require__(123)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(117)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(143).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(20)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(21)
	  , html               = __webpack_require__(16)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(20)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.1 Map Objects
	__webpack_require__(147)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , hide         = __webpack_require__(8)
	  , redefineAll  = __webpack_require__(144)
	  , ctx          = __webpack_require__(14)
	  , strictNew    = __webpack_require__(139)
	  , defined      = __webpack_require__(24)
	  , forOf        = __webpack_require__(140)
	  , $iterDefine  = __webpack_require__(101)
	  , step         = __webpack_require__(121)
	  , ID           = __webpack_require__(13)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(18)
	  , setSpecies   = __webpack_require__(123)
	  , DESCRIPTORS  = __webpack_require__(10)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(144)
	  , forOf          = __webpack_require__(140)
	  , strictNew      = __webpack_require__(139)
	  , isObject       = __webpack_require__(18)
	  , fails          = __webpack_require__(11)
	  , $iterDetect    = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(37);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.2 Set Objects
	__webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , redefine     = __webpack_require__(12)
	  , weak         = __webpack_require__(150)
	  , isObject     = __webpack_require__(18)
	  , has          = __webpack_require__(19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(147)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(8)
	  , redefineAll       = __webpack_require__(144)
	  , anObject          = __webpack_require__(22)
	  , isObject          = __webpack_require__(18)
	  , strictNew         = __webpack_require__(139)
	  , forOf             = __webpack_require__(140)
	  , createArrayMethod = __webpack_require__(30)
	  , $has              = __webpack_require__(19)
	  , WEAK              = __webpack_require__(13)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(150);
	
	// 23.4 WeakSet Objects
	__webpack_require__(147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(5)
	  , _apply  = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(4)
	  , $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(22)
	  , isObject  = __webpack_require__(18)
	  , bind      = Function.bind || __webpack_require__(7).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , getDesc  = __webpack_require__(4).getDesc
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(103)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(4)
	  , has      = __webpack_require__(19)
	  , $export  = __webpack_require__(5)
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(4).getProto
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(22)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(163)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(4)
	  , anObject = __webpack_require__(22)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(22)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(4)
	  , has        = __webpack_require__(19)
	  , $export    = __webpack_require__(5)
	  , createDesc = __webpack_require__(9)
	  , anObject   = __webpack_require__(22)
	  , isObject   = __webpack_require__(18);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(47);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(35)(true);
	
	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(120)('includes');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(111)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(5)
	  , $re     = __webpack_require__(175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(4)
	  , $export    = __webpack_require__(5)
	  , ownKeys    = __webpack_require__(163)
	  , toIObject  = __webpack_require__(25)
	  , createDesc = __webpack_require__(9);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(178)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(178)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(181)('Map')});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(140)
	  , classof = __webpack_require__(49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(181)('Set')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(4)
	  , $export = __webpack_require__(5)
	  , $ctx    = __webpack_require__(14)
	  , $Array  = __webpack_require__(7).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(21)
	  , partial    = __webpack_require__(185)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(186)
	  , invoke    = __webpack_require__(21)
	  , aFunction = __webpack_require__(15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var global      = __webpack_require__(6)
	  , hide        = __webpack_require__(8)
	  , Iterators   = __webpack_require__(102)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          context._sent = arg;
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(190)))

/***/ },
/* 190 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _eventEmitter = __webpack_require__(192);
	
	var _eventEmitter2 = _interopRequireDefault(_eventEmitter);
	
	var _map = __webpack_require__(193);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _gamePlay = __webpack_require__(200);
	
	var _gamePlay2 = _interopRequireDefault(_gamePlay);
	
	var _input = __webpack_require__(205);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _keyboard = __webpack_require__(206);
	
	var _keyboard2 = _interopRequireDefault(_keyboard);
	
	var _touch = __webpack_require__(207);
	
	var _touch2 = _interopRequireDefault(_touch);
	
	var _mixins = __webpack_require__(208);
	
	var _gameLoop = __webpack_require__(209);
	
	var _pixiRenderer = __webpack_require__(210);
	
	var _pixiRenderer2 = _interopRequireDefault(_pixiRenderer);
	
	var _pause = __webpack_require__(211);
	
	var _pause2 = _interopRequireDefault(_pause);
	
	var _nextLevel = __webpack_require__(212);
	
	var _nextLevel2 = _interopRequireDefault(_nextLevel);
	
	var _gameOver = __webpack_require__(213);
	
	var _gameOver2 = _interopRequireDefault(_gameOver);
	
	var _levels = __webpack_require__(214);
	
	var _levels2 = _interopRequireDefault(_levels);
	
	__webpack_require__(215);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//TODO: rename to game.js
	console.log('Loading Game');
	
	// Game mixins
	
	// other stuff
	
	//import Renderer from './textRenderer'
	
	// modals
	
	// resources
	
	// import GameMath from './math'
	
	// - FSM
	//   - Booting
	//   - Menu
	//   - Playing
	//   - Paused
	//     - modals?
	//     - deviceOrientation?
	//   - Win
	//   - Loose
	//   - Help? (paused modal?)
	
	var INITIAL_PLAYER_HEALTH = 5;
	var INITIAL_PLAYER_LIVES = 3;
	
	var Game = {
	  name: 'Warehouse',
	  fps: 60,
	
	  // state
	  debug: {},
	  player: { name: 'Player', lives: 3 },
	  totalTimeSpent: 0,
	  // sessionTimeSpent: 0,
	  levelTimeSpent: 0,
	  levelTimeBonus: 0,
	
	  // resources
	  renderer: Object.create(_pixiRenderer2.default),
	  map: Object.create(_map2.default),
	
	  reset: function reset() {
	    console.log('Game - Reset', this);
	
	    this.level = 0;
	    this.score = 0;
	
	    this.player.hp = INITIAL_PLAYER_HEALTH;
	    this.player.lives = INITIAL_PLAYER_LIVES;
	
	    this.debug = {};
	  },
	
	  // FSM
	  mode: StateMachine.create({
	    initial: 'booting',
	    events: [{ name: 'ready', from: 'booting', to: 'menu' }, // initial page loads images and sounds then transitions to 'menu'
	    { name: 'start', from: 'menu', to: 'starting' }, // start a new game from the menu
	    { name: 'load', from: ['starting', 'playing', 'died'], to: 'loading' }, // start loading a new level (either to start a new game, or next level while playing)
	    { name: 'play', from: 'loading', to: 'playing' }, // play the level after loading it
	    { name: 'pause', from: ['loading', 'playing'], to: 'paused' }, // pause the game to show a help topic
	    { name: 'resume', from: 'paused', to: 'playing' }, // resume playing after showing a help topic
	
	    { name: 'die', from: 'playing', to: 'died' }, // player died
	    { name: 'lose', from: 'died', to: 'gameOver' }, // player have no lives left
	    { name: 'win', from: 'playing', to: 'won' }, // player won
	    //{ name: 'quit',   from: 'playing',                       to: 'lost'     }, // player quit
	    { name: 'finish', from: ['won', 'gameOver'], to: 'menu' } // back to menu
	    ]
	  }),
	
	  // init
	  init: function init() {
	    console.log('Game - init', this);
	
	    // setup mode FSM
	    //this.mode.onLeaveState = function(event,from,to) { console.log('onLeaveState',event,from,'->',to) }
	    //this.mode.onBeforeEvent = function(event,from,to) { console.log('onBeforeEvent',event,from,'->',to) }
	
	    this.mode.onMenu = this.enterMenu.bind(this);
	    this.mode.onStarting = this.newGame.bind(this);
	    this.mode.onLoading = this.loadLevel.bind(this);
	    this.mode.onPlaying = this.startGame.bind(this);
	    this.mode.onPaused = this.pauseGame.bind(this);
	
	    this.mode.onDied = this.playerDied.bind(this);
	    this.mode.onGameOver = this.gameOver.bind(this);
	    // this.mode.onStarting = (event,from,to) => { console.log('onStarting',event,from,'->',to); this.mode.load() }
	    //this.mode.onLoad = (event,from,to,level) => { console.log('onLoad',event,from,'->',to,level); }
	
	    // reset game state (uneccesary, done in newGame())
	    this.reset();
	
	    // init renderer (load assets etc)
	    this.renderer.init(this);
	    this.renderer.render(0);
	
	    //TODO: start loading assets
	
	    // init GameLoop
	    this.gameloop = (0, _gameLoop.makeGameloop)({
	      fps: this.fps,
	      update: this.update.bind(this),
	      render: this.render.bind(this),
	      input: this.playerInput.bind(this)
	    });
	
	    // kick-off booting process
	    console.log('Game - Booting');
	
	    this.mode.ready();
	  },
	
	  // modes
	  enterMenu: function enterMenu(event, from, to) {
	    console.log('enterMenu', this.name);
	
	    // tell render to defer rendering to menu scene
	    //this.scene = menu
	
	    this.mode.start();
	  },
	
	  newGame: function newGame(event, from, to) {
	    console.log('newGame', event, from, '->', to);
	    this.reset();
	    this.mode.load(0);
	  },
	
	  loadLevel: function loadLevel(event, from, to, level) {
	    console.log('loadLevel (level=' + level + ')', event, from, '->', to);
	    this.level = level;
	
	    // TODO: temporarily loop levels
	    if (!_levels2.default[this.level]) this.level = 0;
	
	    // load entities to map
	    this.map.load(_levels2.default[this.level], this);
	
	    // TODO: can we refactor this?
	    // provide a game-global context for events etc
	    this.map.game = this;
	
	    // map has a placeholder for the player, merge it with our version
	    this.map.player = Object.assign(this.player, this.map.player);
	
	    // reset stats
	    this.levelTimeSpent = 0;
	    this.levelTimeBonus = 0;
	    this.levelMaxTime = _levels2.default[this.level].levelMaxTime || 60;
	    this.multipleKillCounter = 0;
	
	    // clear out effects
	    this.effects = null;
	
	    // let the renderer load it's resources
	    this.renderer.loadLevel(_levels2.default[this.level]);
	
	    // show a modal before starting
	    this.showModal(_nextLevel2.default.create());
	  },
	
	  startGame: function startGame(event, from, to) {
	    console.log('startGame (level=' + this.level + ')', event, from, '->', to);
	    this.hideModal();
	  },
	
	  pauseGame: function pauseGame(event, from, to) {
	    var modal = arguments.length <= 3 || arguments[3] === undefined ? _pause2.default.create() : arguments[3];
	
	    console.log('pauseGame', event, from, to, modal);
	    this.showModal(modal);
	  },
	
	  playerDied: function playerDied(event, from, to, reason) {
	    console.log('playerDied', event, from, to, reason);
	    this.player.lives -= 1;
	    if (this.player.lives > 0) {
	      this.player.hp = INITIAL_PLAYER_HEALTH;
	      this.mode.load(this.level);
	    } else {
	      this.mode.lose(reason);
	    }
	  },
	
	  gameOver: function gameOver(event, from, to, reason) {
	    console.log('gameOver', event, from, to);
	    this.showModal(_gameOver2.default.create(reason));
	  },
	
	  // modals
	  // TODO: stack modals?
	  showModal: function showModal(modal) {
	    this.modal = modal;
	    this.modal.init(this);
	  },
	
	  hideModal: function hideModal() {
	    this.modal && this.modal.remove && this.modal.remove();
	    this.modal = null;
	  }
	
	};
	
	// --- Start game
	window.onload = function () {
	  var game = (0, _mixins.compose)(Game, _eventEmitter2.default, _gamePlay2.default, _input2.default, _keyboard2.default, _touch2.default);
	  game.init();
	
	  // store game in global
	  window.game = game;
	};

/***/ },
/* 192 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// event emitter mix-in
	
	exports.default = {
	  subscribe: function subscribe(event, callback, target) {
	    this.subscribers = this.subscribers || {};
	    this.subscribers[event] = this.subscribers[event] || [];
	    this.subscribers[event].push({ callback: callback, target: target });
	  },
	
	  publish: function publish(event) {
	    console.log('publish', event);
	    // callbacks runs next tick!
	    if (this.subscribers && this.subscribers[event]) {
	      var subs = this.subscribers[event];
	      var args = [].slice.call(arguments, 1);
	      var n, sub;
	      for (n = 0; n < subs.length; ++n) {
	        sub = subs[n];
	        sub.callback.apply(sub.target, args);
	      }
	    }
	    // setTimeout(() => {
	    //   if (this.subscribers && this.subscribers[event]) {
	    //     var subs = this.subscribers[event];
	    //     var args = [].slice.call(arguments, 1);
	    //     var n, sub;
	    //     for(n = 0 ; n < subs.length ; ++n) {
	    //       sub = subs[n];
	    //       sub.callback.apply(sub.target, args);
	    //     }
	    //   }
	    // },0)
	  }
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.posToIndex = posToIndex;
	exports.indexToPos = indexToPos;
	
	var _entities = __webpack_require__(194);
	
	var _math = __webpack_require__(195);
	
	var _math2 = _interopRequireDefault(_math);
	
	var _levelGenerator = __webpack_require__(198);
	
	var _constants = __webpack_require__(197);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log('WIDTH', _constants.MAP_WIDTH);
	console.log('HEIGHT', _constants.MAP_HEIGHT);
	
	var sourceToEntity = {
	  '.': false,
	  '@': _entities.ENTITY.PLAYER,
	  'b': _entities.ENTITY.BOX,
	  'B': _entities.ENTITY.HEAVY_BOX,
	  ',': _entities.ENTITY.VOID,
	  'G': _entities.ENTITY.GRUE,
	  'S': _entities.ENTITY.SNAKE,
	  'Z': _entities.ENTITY.ZOMBIE,
	  'E': _entities.ENTITY.EGG
	};
	
	// TODO: remove
	function posToIndex(x, y) {
	  return y * _constants.MAP_WIDTH + x;
	}
	
	function indexToPos(index) {
	  var y = Math.floor(index / _constants.MAP_WIDTH);
	  var x = index - y * _constants.MAP_WIDTH;
	  return [x, y];
	}
	
	// Mixin
	exports.default = {
	  loaded: false,
	
	  posToIndex: posToIndex,
	  indexToPos: indexToPos,
	
	  entityAt: function entityAt(x, y) {
	    return this.tiles[posToIndex(x, y)];
	  },
	  isEmpty: function isEmpty(x, y) {
	    return this.entityAt(x, y) === false;
	  },
	  isWithin: function isWithin(x, y) {
	    return x > -1 && x < this.width && y > -1 && y < this.height;
	  },
	  isPlayer: function isPlayer(x, y) {
	    return this.player.x === x && this.player.y === y;
	  },
	
	  near: function near(_ref, _ref2) {
	    var x = _ref.x;
	    var y = _ref.y;
	    var x1 = _ref2.x;
	    var y1 = _ref2.y;
	
	    return (x == x1 || x == x1 - 1 || x == x1 + 1) && (y == y1 || y == y1 - 1 || y == y1 + 1);
	  },
	
	  nextTo: function nextTo(_ref3, _ref4) {
	    var x = _ref3.x;
	    var y = _ref3.y;
	    var x1 = _ref4.x;
	    var y1 = _ref4.y;
	
	    if (x == x1 && y == y1 - 1) return true;
	    if (x == x1 && y == y1 + 1) return true;
	    if (x == x1 - 1 && y == y1) return true;
	    if (x == x1 + 1 && y == y1) return true;
	    return false;
	  },
	
	  move: function move(entity, x, y) {
	    //if (!tryMove(entity,x,y)) return false
	    if (this.entityAt(x, y)) {
	      console.error('move to bad coords', entity, x, y);
	    }
	
	    this.tiles[posToIndex(entity.x, entity.y)] = false;
	    this.tiles[posToIndex(x, y)] = entity;
	
	    entity.x = x;
	    entity.y = y;
	  },
	
	  tryMove: function tryMove(entity, x, y) {
	    var other = this.entityAt(x, y);
	    if (!other && this.isWithin(x, y)) {
	      return true;
	    } else {
	      return false;
	    }
	  },
	
	  tryPush: function tryPush(e, dx, dy) {
	    // try to move e
	    var tx = e.x + dx;
	    var ty = e.y + dy;
	
	    // not within map -> squash or false
	    if (!this.isWithin(tx, ty)) {
	      if (e.isSquashable) {
	        e.squash();
	        return true;
	      }
	      return false;
	    }
	
	    // empty -> move if movable ?
	    var t = this.entityAt(tx, ty);
	    if (!t) {
	      // movable ?
	      if (!e.isMovable) return false;
	
	      // move
	      this.move(e, tx, ty);
	      return true;
	    }
	
	    // not empty -> squashable -> squash
	    if (e.isSquashable) {
	      e.squash();
	      return true;
	    }
	
	    // movable ?
	    if (!e.isMovable) return false;
	
	    // try to push whatever is in the way
	    if (this.tryPush(t, dx, dy)) {
	      this.move(e, tx, ty);
	      return true;
	    } else {
	      return false;
	    }
	  },
	
	  _randomCoords: [[-1, 0], [1, 0], [0, -1], [0, 1]],
	  moveRandom: function moveRandom(entity) {
	    _math2.default.shuffle(this._randomCoords);
	    for (var i = 0; i < this._randomCoords.length; i++) {
	      var nx = entity.x + this._randomCoords[i][0];
	      var ny = entity.y + this._randomCoords[i][1];
	      if (this.tryMove(entity, nx, ny)) {
	        this.move(entity, nx, ny);
	        break;
	      }
	    }
	  },
	
	  //TODO: creates a lot of garbage! (refactor, send in path etc)
	  canSeePlayer: function canSeePlayer(entity) {
	    var maxDistance = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];
	
	    var path = [];
	    _math2.default.line(entity.x, entity.y, this.player.x, this.player.y, function (x, y) {
	      return path.push({ x: x, y: y });
	    });
	
	    // inSight
	    var inSight = true;
	    for (var i = 0; i < path.length; i++) {
	      var pos = path[i];
	      var lastPos = i > 0 && path[i - 1];
	      // check if position in path is empty, ignore first (entity) and last (player)
	      if (i != 0 && i != path.length - 1 && !this.isEmpty(pos.x, pos.y)) {
	        inSight = false;
	        break;
	      }
	
	      // check diagonals (in our world, you can't see between corner boxes)
	      if (lastPos && lastPos.x !== pos.x && lastPos.y !== pos.y) {
	        var dx = lastPos.x - pos.x;
	        var dy = lastPos.y - pos.y;
	
	        inSight = this.isEmpty(pos.x + dx, pos.y) || this.isEmpty(pos.x, pos.y + dy);
	        if (!inSight) break;
	      }
	    }
	
	    // path
	    return inSight && path.length < maxDistance ? path : false;
	  },
	
	  //TODO: creates a lot of garbage! (refactor, send in path etc)
	  pathBetween: function pathBetween(mx, my, tx, ty) {
	    var _this = this;
	
	    var passableCallback = function passableCallback(x, y) {
	      if (mx == x && my == y) return true;
	      return x > 0 && x < _this.width && y > 0 && y < _this.height && _this.isEmpty(x, y);
	    };
	
	    var pathFinder = new ROT.Path.AStar(tx, ty, passableCallback, { topology: 4 });
	
	    var path = [];
	    pathFinder.compute(mx, my, function (x, y) {
	      return path.push({ x: x, y: y });
	    });
	    return path;
	  },
	
	  pathToPlayer: function pathToPlayer(entity) {
	    return this.pathBetween(entity.x, entity.y, this.player.x, this.player.y);
	  },
	
	  remove: function remove(entity) {
	    this.tiles[posToIndex(entity.x, entity.y)] = false;
	    entity.hidden = true;
	  },
	
	  load: function load(level, game) {
	    var _this2 = this;
	
	    this.monsters = [];
	    this.things = [];
	
	    // generate map
	    var source = level.map ? level.map : (0, _levelGenerator.generate)(level);
	
	    this.width = _constants.MAP_WIDTH;
	    this.height = _constants.MAP_HEIGHT;
	    this.source = source;
	
	    var pos = 0;
	    for (var x = 0, c = ''; c = source.charAt(x); x++) {
	      if (c == ' ' || c == '\t' || c == '\n') continue;
	
	      var type = sourceToEntity[c];
	
	      var _indexToPos = indexToPos(pos++);
	
	      var _indexToPos2 = _slicedToArray(_indexToPos, 2);
	
	      var _x2 = _indexToPos2[0];
	      var y = _indexToPos2[1];
	
	      if (type === undefined) {
	        console.error('Unknown tile ', type, _x2, c);
	      }
	
	      if (type === _entities.ENTITY.PLAYER) {
	        this.player = {};
	        this.player.x = _x2;
	        this.player.y = y;
	      } else if (type === _entities.ENTITY.GRUE || type === _entities.ENTITY.SNAKE || type === _entities.ENTITY.ZOMBIE || type == _entities.ENTITY.EGG) {
	        this.monsters.push((0, _entities.createEntity)(type, _x2, y, game));
	      } else if (type) {
	        //TODO: remove special list of boxes? dead/alive instead?
	        this.things.push((0, _entities.createEntity)(type, _x2, y, game));
	      }
	    }
	
	    if (pos != _constants.MAP_WIDTH * _constants.MAP_HEIGHT) {
	      throw new Error('bad map');
	    }
	
	    // create collision map
	    this.tiles = new Array(this.width * this.height);
	    this.tiles.fill(false);
	    this.tiles[posToIndex(this.player.x, this.player.y)] = this.player;
	    this.things.forEach(function (b) {
	      return _this2.tiles[posToIndex(b.x, b.y)] = b;
	    });
	    this.monsters.forEach(function (m) {
	      return _this2.tiles[posToIndex(m.x, m.y)] = m;
	    });
	
	    console.log('> Loaded map (map.js)');
	    this.loaded = true;
	  }
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ENTITY = undefined;
	exports.createEntity = createEntity;
	
	var _math = __webpack_require__(195);
	
	var _math2 = _interopRequireDefault(_math);
	
	var _constants = __webpack_require__(197);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ENTITY = exports.ENTITY = {
	  PLAYER: 1,
	  BOX: 2,
	  HEAVY_BOX: 3,
	  VOID: 4,
	  GRUE: 10,
	  SNAKE: 11,
	  ZOMBIE: 12,
	  EGG: 20
	};
	
	var Movable = { isMovable: true };
	var NotMovable = { isMovable: false };
	
	var Monster = { isMonster: true };
	
	var Squashable = {
	  isSquashable: true,
	  squash: function squash() {
	    console.log('squash', this);
	    this.kill();
	  }
	};
	
	var Killable = {
	  isKillable: true,
	  kill: function kill(score) {
	    if (this.isDead) {
	      console.error('entitity already dead in .kill()', this);
	      return;
	    }
	
	    this.isDead = true;
	
	    // remove ourselfs from the map so we can move another entity
	    // to this position the same tick (ie 'squash')
	    this.game.map.remove(this);
	
	    this.game.publish('kill', this, score || this.score);
	  }
	};
	
	var Trappable = {
	  checkIfTrapped: function checkIfTrapped(step) {
	    var map = this.game.map;
	
	    // find any free coords
	    var trapped = true;
	    for (var i = 0; i < _constants.NEAR_COORDS.length; i++) {
	      var x = this.x + _constants.NEAR_COORDS[i][0];
	      var y = this.y + _constants.NEAR_COORDS[i][1];
	      if (map.isWithin(x, y) && (map.isEmpty(x, y) || map.isPlayer(x, y))) {
	        trapped = false;
	        break;
	      }
	
	      // TODO: handle groups of trapped monsters
	      var e = map.entityAt(x, y);
	      if (e && e.isMonster) {
	        trapped = false;
	        break;
	      }
	    }
	
	    if (!trapped) {
	      this.isTrapped = false;
	      this.trappedFor = 0;
	      return false;
	    }
	
	    // Strong monsters can push light boxes out of the way
	    if (this.isStrong) {
	      var coords = _math2.default.shuffle(_constants.NEAR_COORDS.slice());
	      for (var i = 0; i < coords.length; i++) {
	        var _coords$i = _slicedToArray(coords[i], 2);
	
	        var dx = _coords$i[0];
	        var dy = _coords$i[1];
	
	        var x = this.x + dx;
	        var y = this.y + dy;
	        var other = map.entityAt(x, y);
	        if (other && other.isMovable && map.tryPush(other, dx, dy)) {
	          map.move(this, x, y);
	          this.think = 1;
	          break;
	        }
	      }
	    }
	
	    // trapped!
	    if (!this.isTrapped) console.log("uhu, I'm trapped!", this);
	
	    this.isTrapped = true;
	    this.trappedFor = this.trappedFor || 0;
	    this.trappedFor += step;
	    return true;
	  }
	};
	
	//TODO: game passed in here smells, think about how we could decouple this?
	function createEntity(type, x, y, game) {
	  switch (type) {
	    case ENTITY.BOX:
	      return Object.assign({ x: x, y: y, game: game }, Box, Movable);
	    case ENTITY.HEAVY_BOX:
	      return Object.assign({ x: x, y: y, game: game }, Box, NotMovable);
	    case ENTITY.VOID:
	      return Object.assign({ x: x, y: y, game: game }, Void, NotMovable);
	    case ENTITY.SNAKE:
	      return Object.assign({ x: x, y: y, game: game }, Snake, NotMovable, Monster, Killable, Squashable);
	    case ENTITY.GRUE:
	      return Object.assign({ x: x, y: y, game: game }, Grue, NotMovable, Monster, Killable, Squashable, Trappable);
	    case ENTITY.ZOMBIE:
	      return Object.assign({ x: x, y: y, game: game }, Zombie, NotMovable, Monster, Killable, Squashable, Trappable);
	    case ENTITY.EGG:
	      return Object.assign({ x: x, y: y, game: game }, Egg, NotMovable, Killable, Squashable);
	  }
	  throw new Error('createEntity for unknown type ' + type);
	}
	
	// -- Entities --
	//TODO: move to modules
	
	var Void = {
	  type: ENTITY.VOID,
	  name: 'Void'
	};
	
	var Box = {
	  type: ENTITY.BOX,
	  name: 'Box'
	};
	
	// Snakes waits on a tile and attacks player when near
	var Snake = {
	  type: ENTITY.SNAKE,
	  name: 'Snake',
	  score: 100,
	
	  update: function update(step) {
	    var map = this.game.map;
	
	    if (this.isDead) return;
	
	    if (this.think) {
	      this.think = this.think - step;
	      if (this.think > 0) return;
	    }
	
	    // trapped?
	
	    // attack?
	    if (map.nextTo(this, map.player)) {
	      this.game.publish('attack', this, map.player);
	      this.think = 2;
	      return;
	    }
	  }
	};
	
	// TODO: rename to xxx
	var Egg = {
	  type: ENTITY.EGG,
	  name: 'Egg',
	  score: 200,
	  period: 10,
	  spawnEntityOfType: ENTITY.GRUE,
	
	  update: function update(step) {
	    if (this.isDead) return;
	
	    this.nextSpawn = this.nextSpawn || this.period;
	    this.nextSpawn -= step;
	
	    // waiting?
	    if (this.nextSpawn > 0) return;
	
	    // spawn
	    console.log('trying to spawn monster!');
	    var map = this.game.map;
	
	    for (var i = 0; i < _constants.NEAR_COORDS.length; i++) {
	      var x = this.x + _constants.NEAR_COORDS[i][0];
	      var y = this.y + _constants.NEAR_COORDS[i][1];
	
	      if (map.isWithin(x, y) && map.isEmpty(x, y)) {
	        var m = createEntity(this.spawnEntityOfType, x, y, this.game);
	        map.monsters.push(m);
	        map.tiles[map.posToIndex(m.x, m.y)] = m;
	        console.log('spawned ', m.name, 'at', m.x, m.y);
	        break;
	      }
	    }
	
	    // reset
	    this.nextSpawn = this.period;
	  }
	};
	
	var Grue = {
	  type: ENTITY.GRUE,
	  name: 'Grue',
	  score: 500,
	  think: 1,
	
	  update: function update(step) {
	    var map = this.game.map;
	
	    if (this.isDead) return;
	
	    // dont bother trying to update a monster that is still 'thinking'
	    if (this.think) {
	      this.think = this.think - step;
	      if (this.think > 0) return;
	    }
	
	    // trapped?
	    if (this.checkIfTrapped(step)) {
	      if (this.trappedFor < 2) return;
	      this.game.publish('explosion', { x: this.x, y: this.y });
	      this.kill(this.score * 5);
	      return;
	    }
	
	    // attack?
	    if (map.nextTo(this, map.player)) {
	      this.game.publish('attack', this, map.player);
	      this.think = 1;
	      return;
	    }
	
	    // -- Move Grue--
	
	    // Grues find their victims by smell.
	    // To model this we use pathfinding with a max path length
	    this.path = map.pathToPlayer(this);
	    if (this.path.length > 0 && this.path.length < 10) {
	      console.log('I smell a player', this.path.length);
	      if (map.tryMove(this, this.path[1].x, this.path[1].y)) {
	        map.move(this, this.path[1].x, this.path[1].y);
	      }
	      this.think = 0.9;
	      return;
	    }
	
	    // What do grues do when they idle?
	    if (_math2.default.random(0, 100) < 20) {
	      map.moveRandom(this);
	      this.think = 1;
	      return;
	    }
	
	    // some default think time
	    this.think = 1;
	  }
	};
	
	var Zombie = {
	  type: ENTITY.ZOMBIE,
	  name: 'Zombie',
	  score: 300,
	  think: 1,
	
	  update: function update(step) {
	    var map = this.game.map;
	
	    if (this.isDead) return;
	
	    // TODO: rename this.think to this.think
	    // dont bother trying to update a monster that is still 'thinking'
	    // if (this.thinking && --this.thinking)
	    //   return;
	    if (this.think) {
	      this.think = this.think - step;
	      if (this.think > 0) return;
	    }
	
	    // trapped?
	    if (this.checkIfTrapped(step)) {
	      if (this.trappedFor < 2) return;
	      this.game.publish('explosion', { x: this.x, y: this.y });
	      this.kill(this.score * 5);
	      return;
	    }
	
	    // attack?
	    if (map.nextTo(this, map.player)) {
	      this.game.publish('attack', this, map.player);
	      this.think = 1;
	      return;
	    }
	
	    // -- Move Zombie --
	
	    // Zombies find ther victims by sight.
	    // We use map.canSeePlayer wich uses a simple line algo
	    this.path = map.canSeePlayer(this, 10);
	    if (this.path) {
	      console.log('I can see a player', this.path.length);
	      if (map.tryMove(this, this.path[1].x, this.path[1].y)) {
	        map.move(this, this.path[1].x, this.path[1].y);
	      }
	      this.think = 1;
	      return;
	    }
	
	    // What do zombies do when they idle?
	    // TODO: move in circle
	    if (_math2.default.random(0, 100) < 20) {
	      map.moveRandom(this);
	      this.think = 1;
	      return;
	    }
	
	    // some default think time
	    this.think = 1;
	  }
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _alea = __webpack_require__(196);
	
	var _alea2 = _interopRequireDefault(_alea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var math = {
	  random: function random(min, max) {
	    return _alea2.default.random(min, max);
	  },
	  randomInt: function randomInt(min, max) {
	    return _alea2.default.randomInt(min, max);
	  },
	  randomChoice: function randomChoice(choices) {
	    return _alea2.default.randomChoice(choices);
	  },
	  randomBool: function randomBool() {
	    return _alea2.default.randomBool();
	  },
	
	  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	  shuffle: function shuffle(array) {
	    var rng = arguments.length <= 1 || arguments[1] === undefined ? _alea2.default : arguments[1];
	
	    var currentIndex = array.length,
	        temporaryValue,
	        randomIndex;
	
	    // While there remain elements to shuffle...
	    while (0 !== currentIndex) {
	
	      // Pick a remaining element...
	      randomIndex = Math.floor(rng.random(0, 1) * currentIndex);
	      currentIndex -= 1;
	
	      // And swap it with the current element.
	      temporaryValue = array[currentIndex];
	      array[currentIndex] = array[randomIndex];
	      array[randomIndex] = temporaryValue;
	    }
	
	    return array;
	  },
	
	  distance: function distance(x1, y1, x2, y2) {
	    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	  },
	
	  // Bresenham's Line Algorithm
	  // source: http://www.roguebasin.com/index.php?title=Bresenham%27s_Line_Algorithm
	  line: function line(x0, y0, x1, y1, callback) {
	    var dx = Math.abs(x1 - x0);
	    var dy = Math.abs(y1 - y0);
	    var sx = x0 < x1 ? 1 : -1;
	    var sy = y0 < y1 ? 1 : -1;
	    var err = dx - dy;
	
	    while (true) {
	      // points.push({x: x0, y: y0})
	      callback(x0, y0);
	
	      if (x0 == x1 && y0 == y1) break;
	
	      var e2 = err * 2;
	      if (e2 > -dx) {
	        err -= dy;
	        x0 += sx;
	      }
	
	      if (e2 < dx) {
	        err += dx;
	        y0 += sy;
	      }
	    }
	  },
	
	  overlap: function overlap(x1, y1, w1, h1, x2, y2, w2, h2) {
	    return !(x1 + w1 - 1 < x2 || x2 + w2 - 1 < x1 || y1 + h1 - 1 < y2 || y2 + h2 - 1 < y1);
	  },
	
	  limit: function limit(x, min, max) {
	    return Math.max(min, Math.min(max, x));
	  },
	
	  between: function between(n, min, max) {
	    return n >= min && n <= max;
	  },
	
	  accelerate: function accelerate(v, accel, dt) {
	    return v + accel * dt;
	  },
	
	  // a,b,t => a + t * (b - a)
	  lerp: function lerp(n, dn, dt) {
	    // linear interpolation
	    return n + dn * dt;
	  },
	
	  // easing
	  interpolate: function interpolate(a, b, percent) {
	    return a + (b - a) * percent;
	  },
	  easeIn: function easeIn(a, b, percent) {
	    return a + (b - a) * Math.pow(percent, 2);
	  },
	  easeOut: function easeOut(a, b, percent) {
	    return a + (b - a) * (1 - Math.pow(1 - percent, 2));
	  },
	  easeInOut: function easeInOut(a, b, percent) {
	    return a + (b - a) * (-Math.cos(percent * Math.PI) / 2 + 0.5);
	  },
	
	  // color
	  toColor: function toColor(r, g, b) {
	    return r << 16 | g << 8 | b;
	  }
	};
	
	window.math = math;
	
	exports.default = math;

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.testRNG = testRNG;
	/**
	 * This code is an implementation of Alea algorithm; (C) 2010 Johannes Baagøe.
	 * Alea is licensed according to the http://en.wikipedia.org/wiki/MIT_License.
	 *
	 * Original implementation in rot.js
	 */
	var RNG = {
	
		random: function random(min, max) {
			return min + this.getUniform() * (max - min);
		},
	
		randomInt: function randomInt(min, max) {
			return Math.round(this.random(min, max));
		},
	
		randomChoice: function randomChoice(choices) {
			return choices[Math.round(this.random(0, choices.length - 1))];
		},
	
		randomBool: function randomBool() {
			return this.randomChoice([true, false]);
		},
	
		/**
	  * @returns {number}
	  */
		getSeed: function getSeed() {
			return this._seed;
		},
	
		/**
	  * @param {number} seed Seed the number generator
	  */
		setSeed: function setSeed(seed) {
			seed = seed < 1 ? 1 / seed : seed;
	
			this._seed = seed;
			this._s0 = (seed >>> 0) * this._frac;
	
			seed = seed * 69069 + 1 >>> 0;
			this._s1 = seed * this._frac;
	
			seed = seed * 69069 + 1 >>> 0;
			this._s2 = seed * this._frac;
	
			this._c = 1;
			return this;
		},
	
		/**
	  * @returns {float} Pseudorandom value [0,1), uniformly distributed
	  */
		getUniform: function getUniform() {
			var t = 2091639 * this._s0 + this._c * this._frac;
			this._s0 = this._s1;
			this._s1 = this._s2;
			this._c = t | 0;
			this._s2 = t - this._c;
			return this._s2;
		},
	
		/**
	  * @param {int} lowerBound The lower end of the range to return a value from, inclusive
	  * @param {int} upperBound The upper end of the range to return a value from, inclusive
	  * @returns {int} Pseudorandom value [lowerBound, upperBound], using ROT.RNG.getUniform() to distribute the value
	  */
		getUniformInt: function getUniformInt(lowerBound, upperBound) {
			var max = Math.max(lowerBound, upperBound);
			var min = Math.min(lowerBound, upperBound);
			return Math.floor(this.getUniform() * (max - min + 1)) + min;
		},
	
		/**
	  * @param {float} [mean=0] Mean value
	  * @param {float} [stddev=1] Standard deviation. ~95% of the absolute values will be lower than 2*stddev.
	  * @returns {float} A normally distributed pseudorandom value
	  */
		getNormal: function getNormal(mean, stddev) {
			do {
				var u = 2 * this.getUniform() - 1;
				var v = 2 * this.getUniform() - 1;
				var r = u * u + v * v;
			} while (r > 1 || r == 0);
	
			var gauss = u * Math.sqrt(-2 * Math.log(r) / r);
			return (mean || 0) + gauss * (stddev || 1);
		},
	
		/**
	  * @returns {int} Pseudorandom value [1,100] inclusive, uniformly distributed
	  */
		getPercentage: function getPercentage() {
			return 1 + Math.floor(this.getUniform() * 100);
		},
	
		/**
	  * @param {object} data key=whatever, value=weight (relative probability)
	  * @returns {string} whatever
	  */
		getWeightedValue: function getWeightedValue(data) {
			var total = 0;
	
			for (var id in data) {
				total += data[id];
			}
			var random = this.getUniform() * total;
	
			var part = 0;
			for (var id in data) {
				part += data[id];
				if (random < part) {
					return id;
				}
			}
	
			// If by some floating-point annoyance we have
			// random >= total, just return the last id.
			return id;
		},
	
		/**
	  * Get RNG state. Useful for storing the state and re-setting it via setState.
	  * @returns {?} Internal state
	  */
		getState: function getState() {
			return [this._s0, this._s1, this._s2, this._c];
		},
	
		/**
	  * Set a previously retrieved state.
	  * @param {?} state
	  */
		setState: function setState(state) {
			this._s0 = state[0];
			this._s1 = state[1];
			this._s2 = state[2];
			this._c = state[3];
			return this;
		},
	
		/**
	  * Returns a cloned RNG
	  */
		clone: function clone() {
			var clone = Object.create(this);
			clone.setState(this.getState());
			return clone;
		},
	
		_s0: 0,
		_s1: 0,
		_s2: 0,
		_c: 0,
		_frac: 2.3283064365386963e-10 /* 2^-32 */
	};
	
	RNG.setSeed(Date.now());
	
	exports.default = RNG;
	function testRNG() {
		var GameRNG = RNG.clone();
		GameRNG.setSeed(801017);
	
		for (var i = 0; i < 10; i++) {
			console.log('GameRNG', i, GameRNG.getUniform());
	
			var LevelRNG = RNG.clone();
			LevelRNG.setSeed(GameRNG.getUniform());
	
			for (var j = 0; j < 10; j++) {
				console.log('  > LevelRNG', i, LevelRNG.getUniform());
	
				var LevelRng = RNG.clone();
			}
		}
	}

/***/ },
/* 197 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Iphone 4 640x960 (320x480 16x16 = 20*30)
	// Iphone 5 640x1136 (320x568 16x16 = 20*35.5 or x margin of 88)
	
	// map
	var MAP_WIDTH = exports.MAP_WIDTH = 30;
	var MAP_HEIGHT = exports.MAP_HEIGHT = 19;
	var NEAR_COORDS = exports.NEAR_COORDS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
	
	// graphics
	var TILE_WIDTH = exports.TILE_WIDTH = 16;
	var TILE_HEIGHT = exports.TILE_HEIGHT = 16;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generate = generate;
	
	var _math = __webpack_require__(195);
	
	var _math2 = _interopRequireDefault(_math);
	
	var _alea = __webpack_require__(196);
	
	var _alea2 = _interopRequireDefault(_alea);
	
	var _noise = __webpack_require__(199);
	
	var _noise2 = _interopRequireDefault(_noise);
	
	var _constants = __webpack_require__(197);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaults = {
	  // size
	  width: _constants.MAP_WIDTH,
	  height: _constants.MAP_HEIGHT,
	  // player
	  // terrain
	  box: 0.4,
	  heavyBox: 0.1,
	  // monsters
	  // magic
	  playerMinDistance: 3
	};
	
	// this RNG is used to generate seeds for each levels RNG
	var LevelsRNG = _alea2.default.clone();
	// LevelsRNG.setSeed(140108)
	
	function generate(template) {
	  console.log('generate', template);
	
	  // create a level specific RNG
	  var rng = _alea2.default.clone();
	
	  // remember this levels seed so we can restart
	  template.seed = template.seed || LevelsRNG.random(0, 801017);
	  rng.setSeed(template.seed);
	
	  // mixin defaults
	  var level = Object.assign({}, defaults, template);
	
	  // make some noise
	  var noise = new _noise2.default(256, rng);
	
	  // place boxes
	  var tiles = new Array(level.width);
	  for (var x = 0; x < level.width; x++) {
	    tiles[x] = new Array(level.height);
	    for (var y = 0; y < level.height; y++) {
	      var n = (1 + noise.get(x, y)) / 2; // scale n to 0 to 1
	      //console.log('noise',n)
	      var tile = '.';
	      if (n < level.box) tile = 'b';
	      if (n < level.heavyBox) tile = 'B';
	      tiles[x][y] = tile;
	    }
	  }
	
	  // place player
	  var player = {
	    x: rng.randomInt(0, level.width - 1),
	    y: rng.randomInt(0, level.height - 1)
	  };
	
	  console.log('> player ', player);
	  tiles[player.x][player.y] = '@';
	
	  //TODO: make sure player is not surrounded by HEAVY_BOXes
	
	  // place monsters
	  var MONSTERS = ['S', 'G', 'Z', 'E'];
	  MONSTERS.forEach(function (type) {
	    var count = level.monsters[type] || 0;
	    while (count > 0) {
	      var x = rng.randomInt(0, level.width - 1);
	      var y = rng.randomInt(0, level.height - 1);
	
	      if (_math2.default.distance(player.x, player.y, x, y) < level.playerMinDistance) {
	        console.log('skipping pos (too close to player)', x, y);
	        continue;
	      }
	
	      // TODO: don't replace monster with monster
	      if (!(tiles[x][y] === '.' || tiles[x][y] === 'b')) {
	        console.log('skipping pos (occupied)', x, y);
	        continue;
	      }
	
	      // TODO: is it working??
	      // don't trap monsters
	      // let trapped = 0
	      // for (let i=0; i < NEAR_COORDS.length; i++) {
	      //   let col = tiles[x+NEAR_COORDS[i][0]]
	      //   if (col) {
	      //     let tile = col[y+NEAR_COORDS[i][1]]
	      //     if (tile && (tile === 'B' || tile === 'b')) {
	      //       trapped += 1
	      //     }
	      //   }
	      // }
	      // if (trapped == NEAR_COORDS.length) {
	      //   console.log('skipping pos (trapped)',x,y)
	      //   continue
	      // }
	
	      tiles[x][y] = type;
	      count--;
	    }
	  });
	
	  // generate map
	  var map = "";
	  for (var y = 0; y < level.height; y++) {
	    for (var x = 0; x < level.width; x++) {
	      map = map + tiles[x][y];
	    }
	    map = map + '\n';
	  }
	
	  //console.log('map\n',map)
	
	  return map;
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _math = __webpack_require__(195);
	
	var _math2 = _interopRequireDefault(_math);
	
	var _alea = __webpack_require__(196);
	
	var _alea2 = _interopRequireDefault(_alea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Always positive modulus
	 * @param {int} n Modulus
	 * @returns {int} this modulo n
	 */
	// adapted from rot.js
	
	Number.prototype.mod = Number.prototype.mod || function (n) {
		return (this % n + n) % n;
	};
	
	/**
	 * A simple 2d implementation of simplex noise by Ondrej Zara
	 *
	 * Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
	 * Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
	 * With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
	 * Better rank ordering method by Stefan Gustavson in 2012.
	 */
	
	/**
	 * @class 2D simplex noise generator
	 * @param {int} [gradients=256] Random gradients
	 */
	var Simplex = function Simplex(gradients) {
		var rng = arguments.length <= 1 || arguments[1] === undefined ? _alea2.default : arguments[1];
	
		this._F2 = 0.5 * (Math.sqrt(3) - 1);
		this._G2 = (3 - Math.sqrt(3)) / 6;
	
		this._gradients = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]];
	
		var permutations = [];
		var count = gradients || 256;
		for (var i = 0; i < count; i++) {
			permutations.push(i);
		}
	
		permutations = _math2.default.shuffle(permutations, rng);
	
		this._perms = [];
		this._indexes = [];
	
		for (var i = 0; i < 2 * count; i++) {
			this._perms.push(permutations[i % count]);
			this._indexes.push(this._perms[i] % this._gradients.length);
		}
	};
	
	//ROT.Noise.Simplex.extend(ROT.Noise);
	
	Simplex.prototype.get = function (xin, yin) {
		var perms = this._perms;
		var indexes = this._indexes;
		var count = perms.length / 2;
		var G2 = this._G2;
	
		var n0 = 0,
		    n1 = 0,
		    n2 = 0,
		    gi; // Noise contributions from the three corners
	
		// Skew the input space to determine which simplex cell we're in
		var s = (xin + yin) * this._F2; // Hairy factor for 2D
		var i = Math.floor(xin + s);
		var j = Math.floor(yin + s);
		var t = (i + j) * G2;
		var X0 = i - t; // Unskew the cell origin back to (x,y) space
		var Y0 = j - t;
		var x0 = xin - X0; // The x,y distances from the cell origin
		var y0 = yin - Y0;
	
		// For the 2D case, the simplex shape is an equilateral triangle.
		// Determine which simplex we are in.
		var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
		if (x0 > y0) {
			i1 = 1;
			j1 = 0;
		} else {
			// lower triangle, XY order: (0,0)->(1,0)->(1,1)
			i1 = 0;
			j1 = 1;
		} // upper triangle, YX order: (0,0)->(0,1)->(1,1)
	
		// A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
		// a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
		// c = (3-sqrt(3))/6
		var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
		var y1 = y0 - j1 + G2;
		var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
		var y2 = y0 - 1 + 2 * G2;
	
		// Work out the hashed gradient indices of the three simplex corners
		var ii = i.mod(count);
		var jj = j.mod(count);
	
		// Calculate the contribution from the three corners
		var t0 = 0.5 - x0 * x0 - y0 * y0;
		if (t0 >= 0) {
			t0 *= t0;
			gi = indexes[ii + perms[jj]];
			var grad = this._gradients[gi];
			n0 = t0 * t0 * (grad[0] * x0 + grad[1] * y0);
		}
	
		var t1 = 0.5 - x1 * x1 - y1 * y1;
		if (t1 >= 0) {
			t1 *= t1;
			gi = indexes[ii + i1 + perms[jj + j1]];
			var grad = this._gradients[gi];
			n1 = t1 * t1 * (grad[0] * x1 + grad[1] * y1);
		}
	
		var t2 = 0.5 - x2 * x2 - y2 * y2;
		if (t2 >= 0) {
			t2 *= t2;
			gi = indexes[ii + 1 + perms[jj + 1]];
			var grad = this._gradients[gi];
			n2 = t2 * t2 * (grad[0] * x2 + grad[1] * y2);
		}
	
		// Add contributions from each corner to get the final noise value.
		// The result is scaled to return values in the interval [-1,1].
		return 70 * (n0 + n1 + n2);
	};
	
	exports.default = Simplex;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _map = __webpack_require__(193);
	
	var _debug = __webpack_require__(201);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	var _screenshake = __webpack_require__(202);
	
	var _screenshake2 = _interopRequireDefault(_screenshake);
	
	var _hit = __webpack_require__(203);
	
	var _hit2 = _interopRequireDefault(_hit);
	
	var _score = __webpack_require__(204);
	
	var _score2 = _interopRequireDefault(_score);
	
	var _math = __webpack_require__(195);
	
	var _math2 = _interopRequireDefault(_math);
	
	var _constants = __webpack_require__(197);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  // TODO: refactor to player.js
	  movePlayer: function movePlayer(dx, dy) {
	    var map = this.map;
	    var player = this.player;
	
	    var x = player.x + dx;
	    var y = player.y + dy;
	
	    if (!map.isWithin(x, y)) return;
	
	    if (map.isEmpty(x, y)) {
	      map.move(player, x, y);
	    } else {
	      var other = map.entityAt(x, y);
	
	      if (other.isMonster) {
	        console.log('stupidly pushing the ' + other.name);
	        this.publish('attack', other, player);
	      }
	
	      if (other.isMovable && map.tryPush(other, dx, dy)) {
	        map.move(player, x, y);
	      }
	    }
	  },
	
	  addEffect: function addEffect(effect) {
	    this.effects = this.effects || [];
	    this.effects.push(effect);
	    this.effectsRunning = this.effectsRunning || 0;
	    this.effectsRunning += 1;
	  },
	
	  waitForEffects: function waitForEffects(callback) {
	    this.waitingForEffects = this.waitingForEffects || [];
	    this.waitingForEffects.push(callback);
	  },
	
	  // --- Game loop methods
	
	  // TODO: This is only called once every loop, not for every tick!!
	  playerInput: function playerInput() {
	    if (this.modal) return this.modal.input(this.input);
	
	    var player = this.player;
	    var input = this.input;
	
	    // handle movement input
	    if (!this.player.isMoving) {
	      if (input.right) {
	        this.movePlayer(1, 0);
	      }
	      if (input.left) {
	        this.movePlayer(-1, 0);
	      }
	      if (input.up) {
	        this.movePlayer(0, -1);
	      }
	      if (input.down) {
	        this.movePlayer(0, 1);
	      }
	    }
	
	    // game state input
	    if (input.pause) {
	      this.mode.pause();
	    }
	
	    // debug stuff
	    if (input.key == 68 /* D */) {
	        this.mode.pause(_debug2.default.create());
	      }
	    if (input.key == 49 /* 1 */) {
	        this.map.monsters.forEach(function (m) {
	          return m.kill();
	        });
	      }
	    if (input.key == 50 /* 2 */) {
	        this.mode.load(this.level);
	      }
	    if (input.key == 51 /* 3 */) {
	        this.mode.load(this.level);
	      }
	    if (input.key == 57 /* 3 */) {
	        this.addEffect(_screenshake2.default.create(0.3, 16));
	      }
	
	    // clear input
	    input.clear();
	  },
	
	  update: function update(step) {
	    // modal?
	    if (this.modal) return this.modal.update(step);
	
	    // is anyone waiting to be notified when effecs are done?
	    if (this.waitingForEffects && this.effectsRunning == 0) {
	      var callback = null;
	      while (callback = this.waitingForEffects.shift()) {
	        callback();
	      }
	      this.waitingForEffects = null;
	    }
	
	    //this.debug.updateStep = step
	    this.debug.updateFrames = this.debug.updateFrames || 0;
	    this.debug.updateFrames++;
	
	    // Status
	    this.totalTimeSpent += step;
	    this.levelTimeSpent += step;
	
	    // time's up?
	    if (this.levelTimeSpent > this.levelMaxTime + this.levelTimeBonus) {
	      this.mode.die('Too slow, time is precious!');
	      return;
	    }
	
	    // handle monsters (move this )
	    for (var i = 0; i < this.map.monsters.length; i++) {
	      var monster = this.map.monsters[i];
	      if (monster.update) monster.update(step);
	    }
	  },
	
	  render: function render(dt) {
	    if (this.modal) return this.modal.render(dt);
	
	    //this.debug.renderDt = dt
	    this.debug.renderFrames = this.debug.renderFrames || 0;
	    this.debug.renderFrames++;
	
	    this.renderer.render(dt);
	  },
	
	  // --- Game events
	  // TODO: refactor to a table with bindings instead?
	  // TODO: refactor to mixin + compose (initXXX) fn instead?
	  init: function init() {
	    var _this = this;
	
	    console.log('init (game-play.js)');
	
	    this.subscribe('explosion', function (_ref) {
	      var x = _ref.x;
	      var y = _ref.y;
	
	      console.log('kaboom!', x, y);
	      // remove a random cell
	
	      var _math$randomChoice = _math2.default.randomChoice(_constants.NEAR_COORDS);
	
	      var _math$randomChoice2 = _slicedToArray(_math$randomChoice, 2);
	
	      var dx = _math$randomChoice2[0];
	      var dy = _math$randomChoice2[1];
	
	      var e = _this.map.entityAt(x + dx, y + dy);
	      if (e) {
	        if (e.isKillable) {
	          e.kill();
	        } else {
	          _this.map.remove(e);
	        }
	      }
	
	      // effects
	      _this.addEffect(_screenshake2.default.create(0.3, 16));
	    });
	
	    this.subscribe('kill', function (monster, score) {
	      console.log('kill listener', monster.isDead, monster.x, monster.y, _this.map.entityAt(monster.x, monster.y));
	      // update player score
	      _this.score += score;
	
	      // add time bonus if any
	      if (_this.levelTimeSpent - _this.lastKillTime < 1) {
	        _this.multipleKillCounter += 1;
	      } else {
	        _this.multipleKillCounter = 1;
	      }
	      _this.lastKillTime = _this.levelTimeSpent;
	
	      if (_this.multipleKillCounter > 1) {
	        var bonus = _this.multipleKillCounter * 500;
	        _this.score += bonus;
	        _this.addEffect(_score2.default.create(_this.player, bonus));
	        console.log('multi kill bonus!', _this.multipleKillCounter, bonus);
	      }
	
	      // add some bonus time
	      _this.levelTimeBonus += 10;
	
	      // effects
	      _this.addEffect(_score2.default.create(monster, score));
	
	      // check if there are any monsters left
	      var monstersAlive = 0;
	      for (var i = 0; i < _this.map.monsters.length; i++) {
	        if (!_this.map.monsters[i].isDead) monstersAlive++;
	      }
	
	      // level complete?
	      if (monstersAlive == 0) _this.waitForEffects(function () {
	        console.log('no more monsters! WIN!', _this.debug.updateFrames);
	        _this.mode.load(_this.level + 1);
	      });
	    });
	
	    this.subscribe('attack', function (attacker, target) {
	      // decide if it's a hit or miss
	      // do damage
	      console.log(attacker.name, 'hits', target.name);
	      target.hp = target.hp - 1;
	
	      // effects
	      _this.addEffect(_hit2.default.create());
	
	      // check if player is dead
	      if (target.hp === 0) {
	        _this.mode.die('Killed by a ' + attacker.name);
	      }
	    });
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _math = __webpack_require__(195);
	
	var _math2 = _interopRequireDefault(_math);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TILE_WIDTH = 16;
	var TILE_HEIGHT = 16;
	
	function box(color) {
	  var sprite = new PIXI.Graphics();
	
	  // set a fill and a line style again and draw a rectangle
	  sprite.lineStyle(1, color, 1);
	  sprite.beginFill(color, 1);
	  sprite.drawRect(1, 1, TILE_WIDTH - 2, TILE_HEIGHT - 2);
	
	  return sprite;
	  // return sprite.generateTexture(1,PIXI.SCALE_MODES.DEFAULT)
	}
	
	exports.default = {
	  create: function create() {
	    return Object.create(this);
	  },
	
	  input: function input(_input) {
	    if (_input.any) {
	      console.log('un-pausing-debug!');
	      this.game.mode.resume();
	    }
	    _input.clear();
	  },
	
	  init: function init(game) {
	    this.game = game;
	    var map = game.map;
	
	    // clear input
	    game.input.clear();
	
	    // create stage
	    this.stage = new PIXI.Container();
	    this.game.renderer.stage.addChild(this.stage);
	
	    // border
	    var border = new PIXI.Graphics();
	    border.lineStyle(2, 0xff0000, 1);
	    // sprite.beginFill(0xff0000, 1)
	    border.drawRect(1, 1, this.game.renderer.stage.width, this.game.renderer.stage.height);
	    this.stage.addChild(border);
	
	    // debug
	    // this.text = new PIXI.Text('Debug.',{font : '34px MiniSet2', fill : 0xaaaaff, align : 'left'});
	    // this.text.position.x = this.game.renderer.stage.width / 2
	    // //this.text.position.y = this.game.renderer.stage.height / 2
	    // this.text.position.y = this.game.renderer.stage.height
	    // this.text.anchor.set(0.5,0.5)
	    // this.stage.addChild(this.text)
	
	    // plot all monsters paths
	    this.addPathsToStage();
	    this.addLineOfSight();
	  },
	
	  addLineOfSight: function addLineOfSight() {
	    var _this = this;
	
	    var map = this.game.map;
	
	    var _loop = function _loop(i) {
	      var path = map.canSeePlayer(map.monsters[i]);
	      if (path) {
	        path.forEach(function (p) {
	          var b = new PIXI.Text("" + i, { font: '14px MiniSet2', fill: 0xff2222, align: 'left' });
	          b.anchor.x = 0.5;
	          b.anchor.y = 0.5;
	          b.position.x = p.x * TILE_WIDTH + TILE_WIDTH / 2;
	          b.position.y = p.y * TILE_HEIGHT + TILE_HEIGHT / 2;
	          _this.stage.addChild(b);
	        });
	      }
	    };
	
	    for (var i = 0; i < map.monsters.length; i++) {
	      _loop(i);
	    }
	  },
	
	  addPathsToStage: function addPathsToStage() {
	    var _this2 = this;
	
	    var map = this.game.map;
	
	    var _loop2 = function _loop2(i) {
	      var path = map.pathToPlayer(map.monsters[i]);
	      console.log('monster', i, 'distance', _math2.default.distance(game.player.x, game.player.y, map.monsters[i].x, map.monsters[i].y));
	
	      console.log('monster', i, 'path len', path.length);
	
	      path.forEach(function (p) {
	        var b = new PIXI.Text("" + i, { font: '14px MiniSet2', fill: 0xaaaaff, align: 'left' });
	        b.anchor.x = 0.5;
	        b.anchor.y = 0.5;
	        b.position.x = p.x * TILE_WIDTH + TILE_WIDTH / 2;
	        b.position.y = p.y * TILE_HEIGHT + TILE_HEIGHT / 2;
	        _this2.stage.addChild(b);
	      });
	    };
	
	    for (var i = 0; i < map.monsters.length; i++) {
	      _loop2(i);
	    }
	  },
	
	  render: function render(dt) {
	    if (this.stage) {
	      this.game.renderer.renderer.render(this.game.renderer.stage);
	      //this.game.renderer.renderer.render(this.stage);
	    }
	  },
	
	  remove: function remove() {
	    this.game.renderer.stage.removeChild(this.stage);
	  },
	
	  update: function update() {}
	
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _math = __webpack_require__(195);
	
	var _math2 = _interopRequireDefault(_math);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Variations
	// - http://gamedev.stackexchange.com/questions/1828/realistic-camera-screen-shake-from-explosion
	//
	// Rotate
	// Move (implemented)
	// Noise
	
	exports.default = {
	  create: function create() {
	    var duration = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var magnitude = arguments.length <= 1 || arguments[1] === undefined ? 30 : arguments[1];
	
	    var shake = Object.create(this);
	    shake.duration = duration;
	    shake.radius = magnitude;
	    shake.randomAngle = _math2.default.random(0, 360);
	    console.log('screenshake', shake.duration, shake.radius);
	    return shake;
	  },
	
	  init: function init() {
	    // stage set by renderer
	    this.originalX = this.screen.position.x;
	    this.originalY = this.screen.position.y;
	  },
	
	  render: function render(dt) {
	    this.duration -= dt;
	
	    if (this.duration <= 0) {
	      this.done = true;
	      this.screen.position.x = this.originalX;
	      this.screen.position.y = this.originalY;
	      return;
	    }
	
	    // dampening should depend on duration!
	    this.radius = this.radius * (0.9 * 60 * dt); //diminish radius each frame
	    //this.radius = this.radius * 0.9  //diminish radius each frame
	
	    this.randomAngle = this.randomAngle + (180 + _math2.default.random(-60, 60)); //pick new angle
	    var dx = Math.sin(this.randomAngle) * this.radius;
	    var dy = Math.cos(this.randomAngle) * this.radius;
	
	    this.screen.position.x = this.originalX + dx;
	    this.screen.position.y = this.originalY + dy;
	  }
	};

/***/ },
/* 203 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  create: function create() {
	    var duration = arguments.length <= 0 || arguments[0] === undefined ? 0.2 : arguments[0];
	
	    var that = Object.create(this);
	    that.duration = duration;
	    return that;
	  },
	
	  init: function init() {
	    this.timeLeft = this.duration;
	
	    this.overlay = new PIXI.Graphics();
	    this.overlay.beginFill(0xffffff, 1);
	    this.overlay.drawRect(0, 0, this.stage.width, this.stage.height);
	
	    this.stage.addChild(this.overlay);
	  },
	
	  render: function render(dt) {
	    this.timeLeft -= dt;
	
	    if (this.timeLeft <= 0) {
	      this.done = true;
	      return;
	    }
	
	    // flash white, then red
	    if (this.timeLeft < this.duration - 0.05) {
	      this.overlay.beginFill(0xff0000, 1);
	      this.overlay.drawRect(0, 0, this.stage.width, this.stage.height);
	    }
	
	    // animate opacity
	    this.overlay.alpha = Math.max(0, 0.5 - this.timeLeft / this.duration);
	  },
	
	  cleanup: function cleanup() {
	    this.stage.removeChild(this.overlay);
	  }
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(197);
	
	exports.default = {
	  create: function create(_ref, score) {
	    var x = _ref.x;
	    var y = _ref.y;
	    var duration = arguments.length <= 2 || arguments[2] === undefined ? 1.4 : arguments[2];
	
	    console.log('score effect @ ', x, y);
	
	    var that = Object.create(this);
	    that.x = x;
	    that.y = y;
	    that.duration = duration;
	    that.score = score;
	    return that;
	  },
	
	  init: function init() {
	    this.timeLeft = this.duration;
	
	    this.stats = new PIXI.Text('+' + this.score, { font: '14px MiniSet2', fill: 0xffffff, align: 'left' });
	    this.stats.position.x = this.x * _constants.TILE_WIDTH;
	    this.stats.position.y = this.y * _constants.TILE_HEIGHT;
	    this.stage.addChild(this.stats);
	  },
	
	  render: function render(dt) {
	    this.timeLeft -= dt;
	
	    if (this.timeLeft <= 0) {
	      this.done = true;
	      return;
	    }
	
	    this.stats.position.x += dt * 10;
	    this.stats.position.y -= dt * 10;
	
	    // animate opacity
	    this.stats.alpha = this.timeLeft / this.duration;
	  },
	
	  cleanup: function cleanup() {
	    this.stage.removeChild(this.stats);
	  }
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  input: {
	    clear: function clear() {
	      this.left = false;
	      this.right = false;
	      this.up = false;
	      this.down = false;
	      this.pause = false;
	      this.start = false;
	      this.any = false;
	      this.key = false;
	    }
	  }
	};

/***/ },
/* 206 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var KEY = {
	  BACKSPACE: 8,
	  TAB: 9,
	  RETURN: 13,
	  ESC: 27,
	  SPACE: 32,
	  PAGEUP: 33,
	  PAGEDOWN: 34,
	  END: 35,
	  HOME: 36,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  INSERT: 45,
	  DELETE: 46,
	  ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57,
	  A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
	  TILDA: 192
	};
	
	exports.default = {
	  init: function init() {
	    var _this = this;
	
	    console.log('Keyboard init()');
	    this.input.clear();
	
	    document.addEventListener('keydown', function (ev) {
	      return _this.onKey(ev, ev.keyCode, true);
	    }, false);
	    document.addEventListener('keyup', function (ev) {
	      return _this.onKey(ev, ev.keyCode, false);
	    }, false);
	  },
	
	  onKey: function onKey(ev, key, pressed) {
	    // console.log('onkey',key,pressed)
	    this.input.any = pressed;
	
	    if (pressed) this.input.key = key;
	    this.input.lastKey = key;
	
	    switch (key) {
	      case KEY.LEFT:
	        this.input.left = pressed;ev.preventDefault();break;
	      case KEY.RIGHT:
	        this.input.right = pressed;ev.preventDefault();break;
	      case KEY.UP:
	        this.input.up = pressed;ev.preventDefault();break;
	      case KEY.DOWN:
	        this.input.down = pressed;ev.preventDefault();break;
	      case KEY.SPACE:
	        this.input.pause = pressed;ev.preventDefault();break;
	      //default: console.log('onkey',key,pressed)
	    }
	
	    this.input.start = this.input.pause;
	  }
	};

/***/ },
/* 207 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  init: function init() {
	    console.log('Touch init()');
	    this.input.clear();
	    window.addEventListener("touchstart", handleStart.bind(this), false);
	  }
	};
	
	var handleStart = function handleStart(evt) {
	  evt.preventDefault();
	
	  var touches = evt.changedTouches;
	
	  this.input.any = true;
	
	  for (var i = 0; i < touches.length; i++) {
	    var tx = touches[i].pageX;
	    var ty = touches[i].pageY;
	
	    var zx = window.innerWidth / 2;
	    var zy = window.innerHeight / 3;
	    // var zx = canvas.width / 2
	    // var zy = canvas.height / 3
	
	    if (ty < zy) this.input.up = true;
	    if (ty > 2 * zy) this.input.down = true;
	    if (tx < zx && ty > zy && ty < 2 * zy) this.input.left = true;
	    if (tx > zx && ty > zy && ty < 2 * zy) this.input.right = true;
	  }
	};

/***/ },
/* 208 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compose = compose;
	// mix-ins
	function compose(components) {
	  var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
	  var inits = args.reduce(function (cs, c) {
	    return c.init ? cs.concat(c.init) : cs;
	  }, []);
	  var obj = Object.assign.apply(null, args);
	
	  obj.init = function () {
	    var _this = this,
	        _arguments = arguments;
	
	    inits.forEach(function (init) {
	      return init.apply(_this, _arguments);
	    });
	  };
	
	  return obj;
	}

/***/ },
/* 209 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	console.log('Loading GameLoop (index.js)');
	
	function timestamp() {
	  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
	}
	
	var makeGameloop = exports.makeGameloop = function makeGameloop(options) {
	  console.log('Creating a new gameloop', options);
	  var now = undefined,
	      dt = 0,
	      last = timestamp(),
	      slow = options.slow || 1,
	      // slow motion scaling factor
	  step = 1 / options.fps,
	      slowStep = slow * step,
	      update = options.update,
	      render = options.render,
	      playerInput = options.input,
	      fpsmeter = new FPSMeter(options.fpsmeter || { decimals: 0, graph: true, theme: 'dark', left: 'auto', right: '5px' });
	
	  function frame() {
	    fpsmeter.tickStart();
	    now = timestamp();
	
	    //TODO: should input really be seperate?
	    playerInput();
	
	    dt = dt + Math.min(1, (now - last) / 1000);
	    while (dt > slowStep) {
	      dt = dt - slowStep;
	      update(step);
	    }
	
	    // TODO: why the fuck to this make yanky animations??
	    //render(dt/slow);
	    render(step);
	
	    last = now;
	    fpsmeter.tick();
	    requestAnimationFrame(frame, options.canvas);
	  }
	
	  requestAnimationFrame(frame);
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _math = __webpack_require__(195);
	
	var _math2 = _interopRequireDefault(_math);
	
	var _entities = __webpack_require__(194);
	
	var _constants = __webpack_require__(197);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	//TODO: remove debug or move to xxx
	function timestamp() {
	  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
	}
	
	var addSpriteToMonster = function addSpriteToMonster(monster) {
	  if (monster.sprite) return;
	
	  var SPRITES = {};
	  SPRITES[_entities.ENTITY.SNAKE] = 'assets/snake_01.png';
	  SPRITES[_entities.ENTITY.ZOMBIE] = 'assets/zombie_01.png';
	  SPRITES[_entities.ENTITY.GRUE] = 'assets/grue_01.png';
	  SPRITES[_entities.ENTITY.EGG] = 'assets/egg_01.png';
	
	  monster.sprite = PIXI.Sprite.fromImage(SPRITES[monster.type]);
	
	  monster.sprite.position.x = monster.x * _constants.TILE_WIDTH;
	  monster.sprite.position.y = monster.y * _constants.TILE_HEIGHT;
	};
	
	var updateSpritePosition = function updateSpritePosition(entity, dt) {
	  var fps = 60;
	  var speed = 18 * _constants.TILE_WIDTH; // pixels per second
	
	  var tx = entity.x * _constants.TILE_WIDTH;
	  var ty = entity.y * _constants.TILE_HEIGHT;
	
	  var sx = entity.sprite.position.x;
	  var sy = entity.sprite.position.y;
	
	  var dx = tx - sx;
	  var dy = ty - sy;
	
	  // TODO: remove debug
	  entity._dx = dx;
	  entity._dy = dy;
	
	  // snap to tile coords when distance < travel per frame
	  if (Math.abs(dx) < speed / fps && Math.abs(dy) < speed / fps) {
	    if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
	      entity.moveTook = timestamp() - entity.startMove;
	    }
	    entity.sprite.position.x = tx;
	    entity.sprite.position.y = ty;
	    entity.isMoving = false;
	    return;
	  }
	
	  // let game know this entity is moving
	  entity.isMoving = true;
	
	  // distance to move == speed (pixels per second) * dt (seconds)
	  var d = speed * dt;
	
	  entity.sprite.position.x = sx == tx ? sx : sx < tx ? sx + d : sx - d;
	  entity.sprite.position.y = sy == ty ? sy : sy < ty ? sy + d : sy - d;
	};
	
	exports.default = {
	  init: function init(game) {
	    console.log('PixiRenderer init()');
	    this.game = game;
	
	    // Iphone 4 640x960 (320x480 16x16 = 20*30)
	    // Iphone 5 640x1136 (320x568 16x16 = 20*35.5 or x margin of 88)
	
	    // create pixi instance
	    PIXI.SCALE_MODES.DEFAULT = 1;
	    // this.renderer = new PIXI.autoDetectRenderer(960,640, {
	    //   //roundPixels: true,
	    //   //resolution: window.devicePixelRatio * 2
	    // })
	    this.renderer = new PIXI.autoDetectRenderer(960, 640, {
	      //this.renderer = new PIXI.WebGLRenderer (960,640,{
	      roundPixels: true,
	      resolution: window.devicePixelRatio * 2,
	      antialias: false
	    });
	
	    // this.renderer = new PIXI.autoDetectRenderer(
	    //   window.innerWidth * window.devicePixelRatio,
	    //   window.innerHeight * window.devicePixelRatio,
	    //   {
	    //     view: document.getElementById('game')
	    //   })
	
	    // debug
	    this.renderer.backgroundColor = 0x111111;
	
	    // The renderer will create a canvas element for you that you can then insert into the DOM.
	    document.body.appendChild(this.renderer.view);
	  },
	
	  loadLevel: function loadLevel(level) {
	    // load resources
	
	    // create screen
	    this.screen = new PIXI.Container();
	
	    // create stage
	    this.stage = new PIXI.Container();
	    this.screen.addChild(this.stage);
	
	    // make room for statusbar
	    this.stage.position.y = _constants.TILE_HEIGHT;
	
	    var map = this.game.map;
	    var player = map.player;
	    var things = map.things;
	    var monsters = map.monsters;
	
	    // background
	    // this.background = PIXI.extras.TilingSprite.fromImage('assets/bg_32x32_01.png',32,32)
	    // this.background.width = TILE_WIDTH * map.width
	    // this.background.height = TILE_HEIGHT * map.height
	    // this.stage.addChild(this.background)
	
	    // things
	    for (var i = 0; i < things.length; i++) {
	      var thing = things[i];
	
	      thing.sprite = thing.isMovable ? new PIXI.Sprite.fromImage('assets/box_01.png') : new PIXI.Sprite.fromImage('assets/heavy_box_01.png');
	
	      this.stage.addChild(thing.sprite);
	
	      // TODO: better handling of void/invisible things
	      if (thing.type == _entities.ENTITY.VOID) {
	        thing.sprite.visible = false;
	      }
	
	      thing.sprite.position.x = thing.x * _constants.TILE_WIDTH;
	      thing.sprite.position.y = thing.y * _constants.TILE_HEIGHT;
	    }
	
	    // monsters
	    for (var i = 0; i < monsters.length; i++) {
	      var monster = monsters[i];
	      addSpriteToMonster(monster);
	      this.stage.addChild(monster.sprite);
	    }
	
	    // player
	    // player.sprite = new PIXI.Sprite(box(0xAA22FF))
	    player.sprite = new PIXI.Sprite.fromImage('assets/player_02.png');
	    this.stage.addChild(player.sprite);
	    player.sprite.position.x = player.x * _constants.TILE_WIDTH;
	    player.sprite.position.y = player.y * _constants.TILE_HEIGHT;
	
	    // debug
	    this.debug = new PIXI.Text('console', { font: '14px MiniSet2', fill: 0xAAAAAA, align: 'left' });
	    this.debug.position.x = 30 * _constants.TILE_WIDTH + 50;
	    this.debug.position.y = 10;
	    //this.stage.addChild(this.debug)
	
	    // stats
	    this.stats = new PIXI.Text('0', { font: '14px MiniSet2', fill: 0x5b6ee1, align: 'left' });
	    this.stats.position.x = 0;
	    this.stats.position.y = 0;
	    // this.stats.position.y = 21 * TILE_HEIGHT
	    this.screen.addChild(this.stats);
	  },
	
	  render: function render(dt) {
	    // return if ready to render
	    if (!this.stage) return;
	
	    var map = this.game.map;
	    var player = map.player;
	    var things = map.things;
	    var monsters = map.monsters;
	    var effects = this.game.effects;
	
	    // update player sprite
	    updateSpritePosition(player, dt);
	
	    // update things sprites
	    for (var i = 0; i < things.length; i++) {
	      var thing = things[i];
	      if (thing.hidden) {
	        thing.sprite.visible = false;
	        continue;
	      }
	
	      updateSpritePosition(thing, dt);
	    }
	
	    // update monster sprites
	    for (var i = 0; i < monsters.length; i++) {
	      var monster = monsters[i];
	      if (monster.isDead) {
	        monster.sprite.visible = false;
	        continue;
	      }
	
	      // check if monster have an sprite (spawned?)
	      if (!monster.sprite) {
	        addSpriteToMonster(monster);
	        this.stage.addChild(monster.sprite);
	      }
	
	      updateSpritePosition(monster, dt);
	
	      // TODO: layer on effect instead
	      if (monster.isTrapped) {
	        if (!monster.sprite.filters) {
	          monster.sprite.filters = [new PIXI.filters.InvertFilter()];
	        }
	      } else {
	        monster.sprite.filters = null;
	      }
	    }
	
	    // effects
	    this.game.effectsRunning = 0;
	    if (effects) {
	      for (var i = 0; i < effects.length; i++) {
	        var effect = effects[i];
	        if (!effect.stage) {
	          effect.screen = this.screen;
	          effect.stage = this.stage;
	          effect.init();
	        }
	
	        if (!effect.done) {
	          this.game.effectsRunning += 1;
	          effect.render(dt);
	          if (effect.done && effect.cleanup) {
	            effect.cleanup();
	          }
	        }
	      }
	    }
	
	    // score
	    this.stats.text = 'Level ' + (this.game.level + 1) + '   ' + 'Score ' + this.game.score + '   ' + 'Time ' + Math.floor(this.game.levelMaxTime - this.game.levelTimeSpent + this.game.levelTimeBonus) + '   ' + 'Health ' + this.game.player.hp + '   ' + 'Lives ' + this.game.player.lives;
	
	    // debug
	    var game = player.game;
	    var sprite = player.sprite;
	
	    var _player = _objectWithoutProperties(player, ['game', 'sprite']);
	
	    this.debug.text = JSON.stringify({
	      levelTimeSpent: Math.ceil(this.game.levelTimeSpent),
	      player: _player,
	      //mode: this.game.mode,
	      //input: this.game.input,
	      debug: this.game.debug
	    }, null, ' ');
	
	    // camera
	    // this.stage.position.x = 240 - player.sprite.position.x - TILE_WIDTH
	    // this.stage.position.y = 160 - player.sprite.position.y - TILE_HEIGHT
	    // this.stage.position.x = 120 - player.sprite.position.x - TILE_WIDTH
	    // this.stage.position.y = 80 - player.sprite.position.y - TILE_HEIGHT
	
	    // this is the main render call that makes pixi draw your container and its children.
	    this.renderer.render(this.screen);
	  }
	};

/***/ },
/* 211 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  create: function create() {
	    return Object.create(this);
	  },
	
	  input: function input(_input) {
	    if (_input.pause) {
	      console.log('un-pausing!');
	      this.game.mode.resume();
	    }
	    _input.clear();
	  },
	
	  init: function init(game) {
	    this.game = game;
	
	    // clear input
	    this.game.input.any = false;
	
	    // create stage
	    this.stage = new PIXI.Container();
	    //this.game.renderer.stage.addChild(this.stage)
	
	    // // draw something
	    // let sprite = new PIXI.Graphics()
	    //
	    // // set a fill and a line style again and draw a rectangle
	    // sprite.lineStyle(1, 0xff0000, 1)
	    // sprite.beginFill(0xff0000, 1)
	    // sprite.drawRect(1, 1, 100, 100)
	    //
	    // sprite.position.x = 100
	    // sprite.position.y = 100
	    //
	    // sprite.generateTexture(1,PIXI.SCALE_MODES.DEFAULT)
	    // this.stage.addChild(sprite)
	
	    // border
	    // let border = new PIXI.Graphics()
	    // border.lineStyle(2, 0x00ff, 1)
	    // // sprite.beginFill(0xff0000, 1)
	    // border.drawRect(1, 1, this.game.renderer.stage.width, this.game.renderer.stage.height)
	    // this.stage.addChild(border)
	
	    // debug
	    this.text = new PIXI.Text('Pause', { font: '34px MiniSet2', fill: 0xaaaaff, align: 'left' });
	    this.text.position.x = this.game.renderer.stage.width / 2;
	    //this.text.position.y = this.game.renderer.stage.height / 2
	    this.text.position.y = this.game.renderer.stage.height;
	    this.text.anchor.set(0.5, 0.5);
	    this.stage.addChild(this.text);
	
	    // button?
	    // this.resume = new PIXI.Text('Resume',{font : '34px MiniSet2', fill : 0xaaaaff, align : 'left'});
	    // this.resume.position.x = this.game.renderer.stage.width / 2
	    // this.resume.position.y = (this.game.renderer.stage.height / 2) + 45
	    // this.resume.anchor.set(0.5,0.5)
	    // this.stage.addChild(this.resume)
	    //
	    // this.resume.interactive = true
	    // this.resume.click = () => this.game.mode.resume()
	  },
	
	  render: function render(dt) {
	    if (this.stage) {
	      //this.game.renderer.renderer.render(this.game.renderer.stage);
	      this.game.renderer.renderer.render(this.stage);
	    }
	  },
	
	  remove: function remove() {
	    //this.game.renderer.stage.removeChild(this.stage)
	  },
	
	  update: function update() {
	    //return null
	    var ty = this.game.renderer.stage.height / 2;
	    //this.text.position.y = this.easeInOut(this.text.position.y,ty,0.3)
	    //this.frame = this.frame ? this.frame + 1 : 0
	    //this.text.position.y = this.linearTween(this.frame,this.game.renderer.stage.height,ty,60)
	    //this.text.position.y = this.easeInQuad(this.frame,this.game.renderer.stage.height,ty,60)
	    this.text.position.y = this.easeInOut(this.text.position.y, ty, 0.3);
	  },
	
	  linearTween: function linearTween(t, b, c, d) {
	    return c * t / d + b;
	  },
	
	  easeInQuad: function easeInQuad(t, b, c, d) {
	    t /= d;
	    return c * t * t + b;
	  },
	
	  interpolate: function interpolate(a, b, percent) {
	    return a + (b - a) * percent;
	  },
	  easeIn: function easeIn(a, b, percent) {
	    return a + (b - a) * Math.pow(percent, 2);
	  },
	  easeOut: function easeOut(a, b, percent) {
	    return a + (b - a) * (1 - Math.pow(1 - percent, 2));
	  },
	  easeInOut: function easeInOut(a, b, percent) {
	    return a + (b - a) * (-Math.cos(percent * Math.PI) / 2 + 0.5);
	  }
	
	};

/***/ },
/* 212 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  create: function create() {
	    return Object.create(this);
	  },
	
	  input: function input(_input) {
	    if (_input.pause) {
	      console.log('next level!');
	      _input.clear();
	      // this.game.hideModal()
	      this.game.mode.play();
	    }
	  },
	
	  update: function update() {
	    return null;
	  },
	
	  init: function init(game) {
	    this.game = game;
	
	    // create stage
	    this.stage = new PIXI.Container();
	
	    // debug
	    this.text = new PIXI.Text('Level ' + (this.game.level + 1) + ' \n Press Start to play', { font: '34px MiniSet2', fill: 0xaaaaff, align: 'center' });
	    this.text.position.x = this.game.renderer.stage.width / 2;
	    this.text.position.y = this.game.renderer.stage.height / 2;
	    this.text.anchor.set(0.5, 0.5);
	    this.stage.addChild(this.text);
	  },
	
	  render: function render(dt) {
	    this.game.renderer.renderer.render(this.stage);
	  },
	
	  remove: function remove() {
	    // this.game.renderer.stage.removeChild(this.stage)
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  create: function create(reason) {
	    var modal = Object.create(this);
	    modal.reason = reason;
	    return modal;
	  },
	
	  input: function input(_input) {
	    if (_input.pause) {
	      _input.clear();
	      this.game.mode.finish();
	    }
	  },
	
	  update: function update() {
	    return null;
	  },
	
	  init: function init(game) {
	    this.game = game;
	
	    // create stage
	    this.stage = new PIXI.Container();
	
	    // debug
	    this.text = new PIXI.Text('Game Over', { font: '34px MiniSet2', fill: 0xaaaaff, align: 'left' });
	    this.text.position.x = this.game.renderer.stage.width / 2;
	    this.text.position.y = this.game.renderer.stage.height / 2;
	    this.text.anchor.set(0.5, 0.5);
	    this.stage.addChild(this.text);
	
	    this.text2 = new PIXI.Text(this.reason, { font: '18px MiniSet2', fill: 0xaaaaff, align: 'left' });
	    this.text2.position.x = this.game.renderer.stage.width / 2;
	    this.text2.position.y = 45 + this.game.renderer.stage.height / 2;
	    this.text2.anchor.set(0.5, 0.5);
	    this.stage.addChild(this.text2);
	  },
	
	  render: function render(dt) {
	    this.game.renderer.renderer.render(this.stage);
	  }
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var generated = [{ name: 'Generated 1', box: 0.45, heavyBox: 0, monsters: { 'S': 1, 'G': 0, 'Z': 0 } }, { name: 'Generated 2', box: 0.45, heavyBox: 0.05, monsters: { 'S': 1, 'G': 0, 'Z': 2, 'E': 0 } }, { name: 'Generated 3', box: 0.45, heavyBox: 0.1, monsters: { 'S': 1, 'G': 1, 'Z': 2, 'E': 0 } }, { name: 'Generated 4', box: 0.45, heavyBox: 0.1, monsters: { 'S': 1, 'G': 1, 'Z': 3, 'E': 0 } }, { name: 'Generated 5', box: 0.50, heavyBox: 0.1, monsters: { 'S': 2, 'G': 2, 'Z': 2, 'E': 0 } }, { name: 'Generated 6', box: 0.50, heavyBox: 0.1, monsters: { 'S': 2, 'G': 2, 'Z': 3, 'E': 1 } }, { name: 'Generated 7', box: 0.50, heavyBox: 0.1, monsters: { 'S': 2, 'G': 3, 'Z': 2, 'E': 2 } }, { name: 'Generated 8', box: 0.50, heavyBox: 0.1, monsters: { 'S': 2, 'G': 3, 'Z': 3, 'E': 3 } }, { name: 'Generated 9', box: 0.50, heavyBox: 0.1, monsters: { 'S': 2, 'G': 3, 'Z': 3, 'E': 3 } }, { name: 'Generated 10', box: 0.50, heavyBox: 0.1, monsters: { 'S': 2, 'G': 5, 'Z': 5, 'E': 10 } }, { name: 'Generated 11', box: 0.50, heavyBox: 0.1, monsters: { 'S': 2, 'G': 5, 'Z': 5, 'E': 10 } }, { name: 'Generated 12', box: 0.50, heavyBox: 0.1, monsters: { 'S': 2, 'G': 5, 'Z': 5, 'E': 10 } }, { name: 'Generated 13', box: 0.60, heavyBox: 0.15, monsters: { 'S': 2, 'G': 5, 'Z': 5, 'E': 10 } }, { name: 'Generated 14', box: 0.60, heavyBox: 0.15, monsters: { 'S': 2, 'G': 5, 'Z': 5, 'E': 10 } }, { name: 'Generated 15', box: 0.60, heavyBox: 0.15, monsters: { 'S': 2, 'G': 5, 'Z': 5, 'E': 10 } }];
	
	exports.default = [generated[0], generated[1], generated[2], generated[3], generated[4], generated[5], generated[6], generated[7], generated[8], generated[9], generated[10], generated[11], generated[12], generated[13], generated[14], {
	  name: 'Level 1',
	  // max time etc
	  map: '\nbbb..bbbbG.bbbbbbb..bbbBB,,,,,\n.......bbbbb...b......B.......\n.....b..bbbb...b....bbbbbbbbbb\nb......bB......b....bGGG......\nb...............bbb.bbbbbbbbbb\n.......................b......\n........b.......b.bbBbbb......\n.......b...........BGEB.......\n........b.....E.....b..b......\nb.............b.....@b........\nb.......b......B..............\n.......b..............b.......\n.....b..b...........b..b......\nb......b.......b......b.......\nb..............b..............\n.......b..............b.......\n.....b..b...........b..b......\nb......b.......b......b.......\nb..............b..............\n      '
	}, {
	  name: 'Level 2',
	  // max time etc
	  map: '\nbbb..bbbbbbbbbbbbb..bbbBB,,,,,\n.......b.......b......B.......\n.....b..b......b....b.bbbbbbbb\nb......bB......b....S.b.......\nb.......G.......bbbbbbbbbbbbbb\n........G..........b...b......\n........b.......b.bbbbbb......\n.......b..............b.......\n.......Zb...........b..b......\nb.............b......b........\nb.......b......B..............\n.......b..............b.......\n.....b..b...........b..b......\nb......b.......b......bG......\nbG.............b..............\n.......b.......@......b.......\n.....b..b...........b..b......\nb......b.......b......b.......\nb..............b..............\n      '
	}, {
	  name: 'Level 3',
	  // max time etc
	  map: '\nbbb..bbbbbbbbbbbbb..bbbbbbbbbb\nG.............................\nG.............................\nG.............................\nG..........bbbbb..............\nG..........b...b..............\nG..........b.@.b..............\nG..........b...b..............\nG..........bbbbb..............\nG.............................\nG.............................\nG.............................\nG.............................\nG.............................\nG.............................\nG.............................\nG.............................\nG.............................\nG.............................\n      '
	}];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(216);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(218)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./warehouse.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./warehouse.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(217)();
	// imports
	
	
	// module
	exports.push([module.id, "* { margin:0; padding:0; } /* to remove the top and left whitespace */\n\nhtml, body { width:100%; height:100%; } /* just to be sure these are full screen*/\n\ncanvas { display:block; } /* To remove the scrollbars */\n\nbody {\n  background-color: #222;\n  color: #fff;\n}\n\n/*************************/\n/*        FONTS          */\n/*************************/\n\n@font-face {\n    font-family: 'MiniSet2';\n    src: url('/assets/fonts/miniset2-webfont.eot');\n    src: url('/assets/fonts/miniset2-webfont.eot?#iefix') format('embedded-opentype'),\n         url('/assets/fonts/miniset2-webfont.woff') format('woff'),\n         url('/assets/fonts/miniset2-webfont.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n.font-pixel {\n  font-family: \"MiniSet2\", cursive;\n}\n\n/*text-renderer*/\nmain {\n  /*width: 568px;\n  height: 320px;*/\n  width: 920px;\n  height: 640px;\n\n  padding-left: 25px;\n\n  background-color: #000;\n  font-size: 22px;\n}\n\n.trapped {\n  color: red\n}\n\n.player {\n  display: inline-block;\n  color: lightblue;\n  /*transform: translateX(5px);*/\n\n}\n\n#wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n#console {\n  padding: 20px;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background-color: #422;\n}\n\ncanvas {\n  image-rendering: optimizeSpeed;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -o-crisp-edges;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: optimize-contrast;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  -ms-interpolation-mode: nearest-neighbor;\n}\n", ""]);
	
	// exports


/***/ },
/* 217 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=warehouse.js.map