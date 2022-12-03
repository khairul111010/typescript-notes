// number
// string
// boolean

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    console.log(result);
  }
}

add(5, 4, false, "Result: ");

//object types
const person: {
  name: string; //string
  age: number; //number
  hobies: string[]; //array of string
  role: [number, string]; //tuple
} = {
  name: "test name",
  age: 45,
  hobies: ["playing", "drawing"],
  role: [1, "admin"],
};

console.log(person);
