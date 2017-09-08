"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Default Patameters
var link = function link() {
	var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

	return height;
};
console.log("Default Patameters: " + link());

// Template Literals
console.log("-------Template Literals--------");
var first = "Chen";
var last = "Ken";
var name = "My name is " + first + " " + last;
console.log("Template Literals: " + name);

// Multi-line Strings
console.log("-------Multi-line Strings--------");
var name = "first line\nsecond line";
console.log("Multi-line Strings: " + name);

// function
console.log("-------function--------");
// There are several ways to declare a function.  All valid, but there are differences on how they're handled in the background.
// http://www.permadi.com/tutorial/jsFunc/index.html
// 函式會先被編譯，直到呼叫函式之後才會執行。
// 同時會有一個與函式同名的物件(object)被創造。
// The usual way to declare a function is using this syntax:
// functionName([parameters]){functionBody};
function add(a, b) {
	return "output usual way: " + a + b;
}
console.log(add(1, 2));

// We can also declare a function by assigning a variable to an unnamed function
// 可以將函式想成物件，宣告add為這個物件名稱。
// The ability to declare function in this way is useful in object oriented programming, because we can have a function be a property of an object, like this.
var myObject = new Object();
myObject.add = function (a, b) {
	return a + b;
};
// myObject now has a property/a method named "add"
// and I can use it like below
myObject.add(1, 2);
var add = function add(a, b) {
	return "output declare a function by assigning a variable: " + a + b;
};
console.log(add(1, 2));

// We can also declare a function using the "new" operator.  This is the least common way of declaring a function and is not recommended unless there is a specific reason to use it (see below for possible reasons).
// The syntax is as follows:
// varName=new Function([param1Name, param2Name,...paramNName], functionBody);
// Declaring function in this way causes the function not to be compiled, and is potentially slower than the other ways of declaring functions.
var add = new Function("a", "b", "return a+b;");
console.log(add(3, 4)); // produces 7
// 編譯器無法知道createMyFunction最後邏輯的樣子，因此沒有先將此函式編譯。
function createMyFunction(myOperator) {
	return new Function("a", "b", "return a" + myOperator + "b;");
}

var add = createMyFunction("+"); // creates "add" function
var subtract = createMyFunction("-"); // creates "subtract" function
var multiply = createMyFunction("*"); // created "multiply" function
// test the functions
alert("result of add=" + add(10, 2)); // result is 12
alert("result of substract=" + subtract(10, 2)); // result is 8
alert("result of multiply=" + multiply(10, 2)); // result is 20
alert(add);

// Destructuring Assignment
console.log("-------Destructuring Assignment--------");
var a = 1,
    b = 2,
    rest = [3, 4, 5, 6];

console.log("a: " + a);
console.log("b: " + b);
console.log("rest: " + rest);
console.log("swap a&b");
var _ref = [b, a];
a = _ref[0];
b = _ref[1];

console.log("a: " + a);
console.log("b: " + b);

function f(_ref2) {
	var _ref3 = _slicedToArray(_ref2, 2),
	    name = _ref3[0],
	    val = _ref3[1];

	console.log(name, val);
}
function g(_ref4) {
	var n = _ref4.name,
	    v = _ref4.val;

	console.log(n, v);
}
function h(_ref5) {
	var name = _ref5.name,
	    val = _ref5.val;

	console.log(name, val);
}
f(["bar", 42]);
g({ name: "foo", val: 7 });
h({ name: "bar", val: 42 });

var list = [7, 42];
var _list$ = list[0],
    a = _list$ === undefined ? 1 : _list$,
    _list$2 = list[1],
    b = _list$2 === undefined ? 2 : _list$2,
    _list$3 = list[2],
    c = _list$3 === undefined ? 3 : _list$3,
    d = list[3];

console.log("[ a = 1, b = 2, c = 3, d ] = list");
console.log("a: " + a + " b: " + b + " c: " + c + " d: " + d);

// object***************************************
var obj = { p: 23, q: true };
var p = obj.p,
    q = obj.q;

console.log("p: " + p);
console.log("q: " + q);
console.log(typeof obj === "undefined" ? "undefined" : _typeof(obj));

var x = 1;
var y = 2;
// ES5
// obj = {x:x, y:y};
// ES6
var obj2 = { x: x, y: y };
console.log("obj2: " + obj2);
console.log(obj2);
console.log("obj2 type: " + (typeof obj2 === "undefined" ? "undefined" : _typeof(obj2)));

var ooo = { 1: 1, 2: 2, a: "obj" };
console.log("ooo type: " + (typeof ooo === "undefined" ? "undefined" : _typeof(ooo)));
console.log(ooo.a);
console.log(ooo[0]);
console.log(ooo[1]);
console.log(ooo[2]);

// const
// Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content.
// const只會在目前的{}內有效，定義時必須initialize，且不能更改
var PI = 3.141593;

// scoping
// Let只會在目前的{}內有效，且重複定義時會throw Error提示
console.log("-------scoping--------");
var callbacks = [];

var _loop = function _loop(i) {
	callbacks[i] = function () {
		return i * 2;
	};
	console.log("callbacks[" + i + "]=" + callbacks[i]());
};

for (var i = 0; i <= 2; i++) {
	_loop(i);
}

// Module
// cannot run in the browser
// import {port, getAccounts} from './module'
// console.log(port);

// Classes
console.log("-------Classes--------");

var Shape = function () {
	function Shape(id, x, y) {
		_classCallCheck(this, Shape);

		this.id = id;
		this.move(x, y);
		console.log("father");
	}

	_createClass(Shape, [{
		key: "move",
		value: function move(x, y) {
			this.x = x;
			this.y = y;
		}
	}, {
		key: "show",
		value: function show() {
			console.log("id: " + this.id + ", x: " + this.x + ", y: " + this.y);
		}
	}], [{
		key: "ping",
		value: function ping() {
			return "ping";
		}
	}]);

	return Shape;
}();

// Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
// use "new" to declare as an object


var ball = new Shape("hello", 2, 5);
ball.show();
ball.move(5, 10);
ball.show();

var SpecialShap = function (_Shape) {
	_inherits(SpecialShap, _Shape);

	function SpecialShap(id, x, y, height, weight) {
		_classCallCheck(this, SpecialShap);

		var _this = _possibleConstructorReturn(this, (SpecialShap.__proto__ || Object.getPrototypeOf(SpecialShap)).call(this, id, x, y));
		// The super keyword is used to call functions on an object's parent.


		_this.height = height;
		_this.weight = weight;
		return _this;
	}

	_createClass(SpecialShap, [{
		key: "show",
		value: function show() {
			_get(SpecialShap.prototype.__proto__ || Object.getPrototypeOf(SpecialShap.prototype), "show", this).call(this);
			console.log("child: " + this.height);
		}
	}, {
		key: "area",
		get: function get() {
			return this.height * this.weight;
		}
	}], [{
		key: "pingpong",
		value: function pingpong() {
			return _get(SpecialShap.__proto__ || Object.getPrototypeOf(SpecialShap), "ping", this).call(this) + " pong";
		}
	}]);

	return SpecialShap;
}(Shape);

var s_ball = new SpecialShap("ken", 4, 6, 88, 99);
console.log(s_ball.area);
s_ball.show();
console.log(s_ball.height);
console.log(typeof s_ball === "undefined" ? "undefined" : _typeof(s_ball));
// Static method calls are made directly on the class and are not callable on instances of the class
console.log(SpecialShap.pingpong());
// console.log(s_ball.pingpong());


// Promises
console.log("-------Promises--------");
// Promise 是一種非同步 (asynchronous) 編程的解決方案，所謂的 Promise，簡單來說它是一個等待非同步操作完成的物件，當事件完成時，Promise 根據操作結果是成功、或者失敗，做相對應的處理動作。
// 一個 Promise 物件 (只) 會處於下面三種狀態之一：
// pending - 初始狀態 (進行中)
// fulfilled - 事件已完成
// rejected - 事件已失敗

// Promise 狀態的改變只有兩種可能：
// 從 pending 變成 fulfilled
// 從 pending 變成 rejected
var promise = new Promise(function (resolve, reject) {
	// 執行非同步的 setTimeout
	setTimeout(function () {
		// 250ms 過後，將 Promise 物件狀態改為成功
		resolve('Success!');
	}, 2500);
});

// Promise 物件生成後，可以用 then() 方法來綁定當 fulfilled 或 rejected 狀態時，分別要執行的函數。
// promise.then(function(value) {
//   // 當狀態是 fulfilled (成功) 時，執行這個函數
//   // value 是透過 resolve() 傳進來的參數

// }, function(error) {
//   // 當狀態是 rejected (失敗) 時，執行這個函數
//   // error 是透過 reject() 傳進來的參數

// });

promise.then(function (successMessage) {
	// 當 Promise 物件狀態變成功後執行這個函數

	console.log('Yay! ' + successMessage);
});

var promise = new Promise(function (resolve, reject) {
	throw 'Uh-oh!';
});
// Promise.prototype.catch(onRejected)
// Promise 物件生成後，可以用 catch() 方法來綁定當 rejected 狀態時，要執行的函數。
promise.catch(function (e) {
	console.log(e);
});
// Chaining 串接
// then() 和 catch() 方法執行後都會返回一個新的 Promise 物件，讓你可以使用 chaning 的語法。
// 而後面的 then() 會接收前一個 then() 的 return value 當作參數。
// 如果 return value 的型態不是 Promise，會先執行 Promise.resolve()。
var hello = new Promise(function (resolve, reject) {
	resolve('Hello');
});

hello.then(function (str) {
	return str + ' World';
}).then(function (str) {
	return str;
}).then(function (str) {
	console.log(str);
});

// Promise.all(iterable)
var p1 = Promise.resolve(3);

var p2 = 1337;

var p3 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 1000, 'foo');
});

Promise.all([p1, p2, p3]).then(function (values) {
	console.log(values);
});
// Promise.race(iterable)

// Promise.resolve(value)

// Promise.reject(reason)