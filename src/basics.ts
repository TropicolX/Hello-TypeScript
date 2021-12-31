// CORE DATA TYPES
function addition(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;
	if (showResult) console.log(phrase + result);
	else return result;
}

// let isOpen: boolean;
// isOpen = false;
let number1 = 5;
const number2 = 2.8;
const printOutcome = true;
const resultPhrase = "Result is: ";

addition(number1, number2, printOutcome, resultPhrase);
