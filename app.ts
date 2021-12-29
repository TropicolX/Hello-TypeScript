// EXPLICITLY ASSIGNING A TYPE
// const person: { name: string; age: number } = {
// 	name: "Maximilian",
// 	age: 30,
// };
 
// INFERRED 
const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: "Alexander",
	age: 18,
	hobbies: ["Sports", "Cooking"],
	role: [2, "author"],
};

let favoriteActivities: string[];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
	// hobby.map() !! ERROR !!
}
