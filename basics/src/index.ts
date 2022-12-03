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

//union types
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

//type alias
type combinaion = number | string;
function unionWithCombineType(_first: combinaion, _second: combinaion) {
  if (typeof _first === "number" && typeof _second === "number") {
    console.log(_first + _second);
  } else if (typeof _first === "string" && typeof _second === "string") {
    console.log(_first + _second);
  } else {
    console.log("Put identical input types");
  }
}
unionWithCombineType(1, 1);
unionWithCombineType("Hello", " World");

//using callbacks
function addWithCallback(
  _first: number,
  _second: number,
  cb: (result: number) => void
) {
  const res = _first + _second;
  cb(res);
}
addWithCallback(10, 20, (res) => {
  console.log(res);
});

//unknown types
// this is better than any because it checks whether it has a type or not
let input: unknown;
input = "hi";
if (typeof input === "string") {
  console.log("ok");
} else {
  console.log("not OK");
}
