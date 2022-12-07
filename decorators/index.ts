// @Logger
class Person {
    @Logger
    public name: string = "John"

    @Logger
    sayHi() {
        console.log("hi");
    }
}

// function Logger(age: number) {
     function Logger (target: any, key: string) {
        // console.log({ age });
        console.log({ target, key });
        console.log({ target: Object.getOwnPropertyNames(target) });
        console.log({ target: Object.getOwnPropertyDescriptors(target) });
        console.log({ target: Object.getOwnPropertySymbols(target) });
        // console.log({ target: Object.getOwnPropertyNames(target) });
    }
// }

