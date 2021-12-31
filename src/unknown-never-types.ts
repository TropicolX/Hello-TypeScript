let userInput: unknown; // use this instead of any type
let username: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
	username = userInput;
}

// never type never returns any value. An example below
function generateError(message: string, code: number): never {
    throw {message, errorCode: code}
    // while (true) {}
}

generateError("An error occured", 500)
