const x: number = 14;
console.log(x);

// lista com typescript
const listTest: number[] = [1, 2, 3]

const user: {name: string; age: number} = {
    name: "Maikon"
    , age: 24
    ,
}


let a:any = 0


let id: string | number = "20"


// type alias 

type myIdType = number | string | boolean

console.log(x)
console.log(listTest)
console.log(user)

// enum
enum Size{
    p = "pequeno"
    , m = "medio"
    , g = "grande"
}

const camisa = {
    name: "Camisa gola v"
    , size: Size.g
    ,
}

// literal types
let teste: "algumvalor" | null
teste = null
teste = "algumvalor"

function sum(a: number, b: number): number{
    return a + b
}

console.log(sum(10, 10))

function sumString(a: string, b: string): string{
    return a + b
}

function noReturn(a: string, b: string): void{
    console.log(`Ola ${a} ${b}`)
}

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1:1, n2:2}))


function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));



//narrowing
//checagem de tipos

function doSomething(info: number | boolean) {
    if(typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

//generics

function showArrayItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"]

showArrayItems(a1)
showArrayItems(a2)



class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }   
}