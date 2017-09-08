// basic syntax of arrow function:
// 1. (param1, param2, …, paramN) => { statements }
// 2. (param1, param2, …, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }

// Parentheses are optional when there's only one parameter name:
// 3. (singleParam) => { statements }
// 4. singleParam => { statements }

// A function with no parameters should be written with a pair of parentheses.
// 5. () => { statements }

// advanced syntax:
// Parenthesize the body of function to return an object literal expression:
// 1. params => ({foo: bar})

// Rest parameters and default parameters are supported:
// 2. (param1, param2, ...rest) => { statements }
// 3. (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Destructuring within the parameter list is also supported:
// 4. let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;


var evens = [2,4,6,8,10]
// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

document.getElementById('array_expression_odd').innerHTML = odds;
document.getElementById('array_expression_num').innerHTML = nums;
document.getElementById('array_expression_pair').innerHTML = pairs;
console.log(pairs);

var fives = [];
// Statement bodies
// (param1, param2, …, paramN) => { statements }
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});
document.getElementById('array_statement').innerHTML = fives;


// Lexical this
var obj = {
  i: 10,
  // As stated previously, arrow function expressions are best suited for non-method functions.
  // Let's see what happens when we try to use them as methods:
  b: () => console.log(this.i, this),
  // Arrow functions do not define ("bind") their own this.
  c: function() {
    console.log(this.i, this);
  }
}
obj.b(); // prints undefined, Object {...}
obj.c(); // prints 10, Object {...}
