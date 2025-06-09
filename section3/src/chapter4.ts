//대수타입
//여러개의 타입을 합성해서 새롭게 만들어낸 타입
//합집합 타입과 교집합 타입이 존재

//1. 합집합 - Union 타입

let a: string | number | boolean;
a = 1;
a = "hi";
a = false;

//2. 교집합 타입 - Intersection 타입
//객체타입에서 많이 쓴다.
let variable: number & string;

type Dog = {
    name: string,
    color: string
}

type Person = {
    name: string,
    language: string
}

type Intersection = Dog & Person;

let intersection: Intersection = {
    name: "",
    color: "",
    language: ""
}