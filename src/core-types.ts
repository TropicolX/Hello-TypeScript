// CORE TYPES

// Number
const numOfPeople = 5; // inferring a type
let population: number; // explicitly assigning a type
population = 10;
let numOfPets: 2; // explicitly assining a literal type

// String
const firstName = "Oluwabusayo";
let middleName: string;
middleName = "Alex";

// Boolean
const isHuman = true;
let likesOnions: boolean;
likesOnions = false;

// Array
const myHobbies = ["Dancing", "Reading"];
let myList: any[];
myList = [5, "Random", { now: Date.now() }];
let myOtherList: (string | number)[];
myOtherList = [24, "Karat", "Magic"];

// Tuple
// fixed length, strict element type
const funnyArray: [number, object] = [69, { fourTwenty: "420" }];
let whiskyRole: [string, number];
whiskyRole = ["Whisky's role is: ", 0];

// Object
// inferring an object type
const cat = {
	name: "Milo",
	age: 1,
	favoriteFoods: ["Fish", "Milk"],
	role: [1, "Regular Pet"], // regular array
};

// explicitly assigning an object type
const dog: {
	name: string;
	age: number;
	favoriteFoods: string[];
	role: [number, string];
} = {
	name: "Whisky",
	age: 3,
	favoriteFoods: ["Beef", "Chicken"],
	role: [0, "Emotional Support Pet"], // tuple
};

// Enum
// Auto enumerated global constant identifiers
// automatically assigns the labels to numbers
// 0, 1, 2...
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

// can also be assigned custom values
enum PetRole {
	RP = "Regular Pet",
	ESP = "Emotional Support Pet",
	PP = 6,
	QP,
}

// Any
let myBabe: any;
myBabe = "Alexandra";
let myBabes: any[];
myBabes = ["Tola", 99, { name: "Busola", age: 18 }];


// LOGIC
const person = {
	name: "Alexander",
	age: 18,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN,
};

// person.role.push("admin"); // Typescript can't catch push error in tuples
// person.role[1] = 10;

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// hobby.map() !! ERROR !!
}

if (person.role === Role.AUTHOR) {
	console.log("Is Admin");
}
