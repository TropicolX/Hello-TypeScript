// FUNCTION TYPES

function add(n1: number, n2: number) {
	return n1 + n2;
}

// returns nothing / type void
function printResult(num: number): void {
	console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    const result = n1 + n2;
    cb(result)
}

printResult(add(5, 12));

let randomFunc = Function; // not strict on the kind of function passed
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result)
})