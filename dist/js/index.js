"use strict";
const x = 14;
console.log(x);
// lista com typescript
const listTest = [1, 2, 3];
const user = {
    name: "Maikon",
    age: 24,
};
let a = 0;
let id = "20";
console.log(x);
console.log(listTest);
console.log(user);
// enum
var Size;
(function (Size) {
    Size["p"] = "pequeno";
    Size["m"] = "medio";
    Size["g"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola v",
    size: Size.g,
};
// literal types
let teste;
teste = null;
teste = "algumvalor";
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10));
function sumString(a, b) {
    return a + b;
}
function noReturn(a, b) {
    console.log(`Ola ${a} ${b}`);
}
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
//narrowing
//checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
//generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
