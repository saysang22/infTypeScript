//기본 타입간의 호환성

type Animal = {
    name : string,
    color : string
}

type Dog = {
    name : string,
    color : string,
    breed : string
}

let ani: Animal = {
    name : "기린",
    color : "yellow"
}

let d: Dog = {
    name : "돌돌이",
    color : "brown",
    breed : "진도" 
}

ani = d;

type Book = {
    name : string,
    price : number
}

type ProgammingBook = {
    name : string,
    price : number,
    skill : string
}

let book : Book;
let programmingBook : ProgammingBook = {
    name : "한 입 크기로 잘라먹는 리액트",
    price : 33000,
    skill : "react.js"
}

book = programmingBook;

//초과 프로퍼티 검사
let book2: Book = {
    name : "한 입 크기로 잘라먹는 리액트",
    price : 33000,
    // skill : "react.js"
}

let book3: Book = programmingBook;

console.log(book3);