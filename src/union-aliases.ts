// UNION TYPES AND LITERAL TYPES

type Combinable = number | string; // Union Type
type ConversionDescriptor = "as-number" | "as-text"; // Union type jof literals

function combine(
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescriptor
) {
	let result: Combinable;
	if (
		(typeof input1 === "number" && typeof input2 === "number") ||
		resultConversion === "as-number"
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
