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

//enum types
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

console.log(Role.READ_ONLY);

function union(_first: number | string, _second: number | string) {
  if (typeof _first === "number" && typeof _second === "number") {
    console.log(_first + _second);
  } else if (typeof _first === "string" && typeof _second === "string") {
    console.log(_first + _second);
  } else {
    console.log("Put identical input types");
  }
}

union(1, 1);
union("Hello", " World");
