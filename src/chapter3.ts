//object
//객체리터럴 타입
let user : {
    id? : number,
    name : string
} = {
    id: 1,
    name: "김민서"
};

user = {
    name : "홍길동"
}

//읽기 전용
let config : {
    readonly apiKey : string;
} = {
    apiKey : "MY API KEY"
}

