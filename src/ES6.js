
// Default Patameters
var link = function(height = 50) {
	return height
};
console.log("Default Patameters: " + link());

// Template Literals
console.log("-------Template Literals--------");
var first = "Chen";
var last = "Ken";
var name = `My name is ${first} ${last}`;
console.log("Template Literals: " + name);

// Multi-line Strings
console.log("-------Multi-line Strings--------");
var name = `first line
second line`;
console.log("Multi-line Strings: " + name);

// function
console.log("-------function--------");
// There are several ways to declare a function.  All valid, but there are differences on how they're handled in the background.
// http://www.permadi.com/tutorial/jsFunc/index.html
// 函式會先被編譯，直到呼叫函式之後才會執行。
// 同時會有一個與函式同名的物件(object)被創造。
// The usual way to declare a function is using this syntax:
// functionName([parameters]){functionBody};
function add(a, b) 
{                     
  return "output usual way: " + a + b;
}                     
console.log(add(1,2));

// We can also declare a function by assigning a variable to an unnamed function
// 可以將函式想成物件，宣告add為這個物件名稱。
// The ability to declare function in this way is useful in object oriented programming, because we can have a function be a property of an object, like this.
	var myObject=new Object();
	myObject.add=function(a,b){return a+b};  
	// myObject now has a property/a method named "add"
	// and I can use it like below
	myObject.add(1, 2);
var add = function(a, b) 
{                     
  return "output declare a function by assigning a variable: " + a + b;
}                     
console.log(add(1,2));

// We can also declare a function using the "new" operator.  This is the least common way of declaring a function and is not recommended unless there is a specific reason to use it (see below for possible reasons).
// The syntax is as follows:
// varName=new Function([param1Name, param2Name,...paramNName], functionBody);
// Declaring function in this way causes the function not to be compiled, and is potentially slower than the other ways of declaring functions.
var add=new Function("a", "b", "return a+b;");
console.log(add(3,4));        // produces 7
	// 編譯器無法知道createMyFunction最後邏輯的樣子，因此沒有先將此函式編譯。
	function createMyFunction(myOperator)
	{
	  return new Function("a", "b", "return a" + myOperator + "b;");
	}

	var add=createMyFunction("+");                // creates "add" function
	var subtract=createMyFunction("-");           // creates "subtract" function
	var multiply=createMyFunction("*");           // created "multiply" function
	// test the functions
	console.log("result of add="+add(10,2));            // result is 12
	console.log("result of substract="+subtract(10,2)); // result is 8
	console.log("result of multiply="+multiply(10,2));  // result is 20
	console.log(add);



// Destructuring Assignment
console.log("-------Destructuring Assignment--------");
var [a, b, ...rest] = [1,2,3,4,5,6];
console.log("a: " + a);
console.log("b: " + b);
console.log(`rest: ${rest}`);
console.log("swap a&b");
[a, b] = [b, a]
console.log("a: " + a);
console.log("b: " + b);

function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })

var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
console.log("[ a = 1, b = 2, c = 3, d ] = list")
console.log(`a: ${a} b: ${b} c: ${c} d: ${d}`)


	// object***************************************
	var obj = {p:23, q: true};
	var {p, q} = obj;
	console.log(`p: ${p}`);
	console.log(`q: ${q}`);
	console.log(typeof obj);

	var x = 1;
	var y = 2;
	// ES5
	// obj = {x:x, y:y};
	// ES6
	var obj2 = { x, y };
	console.log(`obj2: ${obj2}`);
	console.log(obj2);
	console.log("obj2 type: " + typeof obj2);
	

	var ooo = {1:1, 2:2, a:"obj"};
	console.log("ooo type: " + typeof ooo);
	console.log(ooo.a);
	console.log(ooo[0]);
	console.log(ooo[1]);
	console.log(ooo[2]);

// const
// Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content.
// const只會在目前的{}內有效，定義時必須initialize，且不能更改
const PI = 3.141593

// scoping
// Let只會在目前的{}內有效，且重複定義時會throw Error提示
console.log("-------scoping--------");
let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
    console.log(`callbacks[${i}]=${callbacks[i]()}`);
}

// Module
// cannot run in the browser
// import {port, getAccounts} from './module'
// console.log(port);

// Classes
console.log("-------Classes--------");
class Shape {
	constructor (id, x , y) {
		this.id = id;
		this.move(x, y);
		console.log("father");
	}
	move(x, y) {
		this.x = x;
		this.y = y;
	}
	show() {
		console.log(`id: ${this.id}, x: ${this.x}, y: ${this.y}`);
	}
	static ping() {
		return "ping";
	}
}

// Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
// use "new" to declare as an object
var ball = new Shape("hello", 2, 5);
ball.show();
ball.move(5, 10);
ball.show();

class SpecialShap extends Shape {
	constructor(id, x, y, height, weight) {
		// The super keyword is used to call functions on an object's parent.
		super(id, x, y);
		this.height = height;
		this.weight = weight;
	}
	show() {
		super.show();
		console.log(`child: ${this.height}`);
	}
	get area() {
		return this.height * this.weight;
	}
	static pingpong() {
		return super.ping() + " pong";
	}
}
var s_ball = new SpecialShap("ken", 4, 6, 88, 99);
console.log(s_ball.area);
s_ball.show();
console.log(s_ball.height);
console.log(typeof s_ball);
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
var promise = new Promise(function(resolve, reject) {
  // 執行非同步的 setTimeout
  setTimeout(function(){
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

promise.then(function(successMessage) {
  // 當 Promise 物件狀態變成功後執行這個函數
  
  console.log('Yay! ' + successMessage);
});

var promise = new Promise(function(resolve, reject) {
  throw 'Uh-oh!';
});
// Promise.prototype.catch(onRejected)
// Promise 物件生成後，可以用 catch() 方法來綁定當 rejected 狀態時，要執行的函數。
promise.catch(function(e) {
  console.log(e);
});
// Chaining 串接
// then() 和 catch() 方法執行後都會返回一個新的 Promise 物件，讓你可以使用 chaning 的語法。
// 而後面的 then() 會接收前一個 then() 的 return value 當作參數。
// 如果 return value 的型態不是 Promise，會先執行 Promise.resolve()。
var hello = new Promise(function(resolve, reject) {
  resolve('Hello');
});

hello.then(function(str) {
  return str + ' World';

}).then(function(str) {
  return str;

}).then(function(str) {
  console.log(str);
});

// Promise.all(iterable)
var p1 = Promise.resolve(3);

var p2 = 1337;

var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'foo');
}); 

Promise.all([p1, p2, p3]).then(function(values) { 
  console.log(values);
});
// Promise.race(iterable)

// Promise.resolve(value)

// Promise.reject(reason)



