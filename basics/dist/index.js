"use strict";
// number
// string
// boolean
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        console.log(result);
    }
}
add(5, 4, false, "Result: ");
//object types
const person = {
    name: "test name",
    age: 45,
    hobies: ["playing", "drawing"],
    role: [1, "admin"],
};
console.log(person);
//enum types
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
console.log(Role.READ_ONLY);
function union(_first, _second) {
    if (typeof _first === "number" && typeof _second === "number") {
        console.log(_first + _second);
    }
    else if (typeof _first === "string" && typeof _second === "string") {
        console.log(_first + _second);
    }
    else {
        console.log("Put identical input types");
    }
}
union(1, 1);
union("Hello", " World");
function unionWithCombineType(_first, _second) {
    if (typeof _first === "number" && typeof _second === "number") {
        console.log(_first + _second);
    }
    else if (typeof _first === "string" && typeof _second === "string") {
        console.log(_first + _second);
    }
    else {
        console.log("Put identical input types");
    }
}
unionWithCombineType(1, 1);
unionWithCombineType("Hello", " World");
