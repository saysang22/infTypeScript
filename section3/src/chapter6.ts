//타입 단언
type Person = {
    name : string,
    age : number
}

let person = {} as Person

person.name = "김민서";
person.age = 38;

type Dog = {
    name: string,
    color: string
}

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
}as Dog;

//타입 단언의 규칙
//값 as 단언 <- 단언식
// A as B
//A가 B의 슈퍼타입이거나
//A가 B의 서브타입이어야 함
let num1 = 10 as never;

//const 단언

let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow",
} as const

//Non Null 단언
//어떤 값이 null이나 undefined가 아니라고 타입스크립트에게 알려주는 역할

type Post = {
    title: string,
    author?: string
};

let post : Post = {
    title: "게시글1",
}

//자바스크립트에서 제공하는 옵셔널 체이닝
//? -> null이거나 undefined일 경우에 값 전체가 undefined로 만들어주는 연산자
//! -> ull이나 undefined가 아니라고 믿게 해줌
const len: number = post.author!.length;