console.log("*Introduction to JS*\n");
console.log("---");
console.log("This is printed using `console.log`, see `app.js` for more.");

function init() {
	
}

// # Functions
//
// So there are 3 types of functions in JS:
// * named
// * anonymous
// * immediately invoked expressions

function multiply(a, b) {
// ^^^^^  ---+--  --+-  |
//  |        |      |   +-------------{  opening bracket denoting start of the
//  |        |      |                    function body definition.
//  |        |      |
//  |        |      +-----------------{  list of arguments to the function.
//  |        |
//  |        +------------------------{  name of the function.
//  |   
//  +---------------------------------{  function declaration, in other words
//                                       letting the interpretter know that we
//                                       want to define a function.   
//
	var result = a * b;

	console.log("called multiply with (" + a +", " + b + "), result: " + result);

	return result;
}
