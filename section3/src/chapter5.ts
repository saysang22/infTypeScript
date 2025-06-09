//타입 추론

let a = 10;

function aa(para = 'hi'){

}

//암묵적 any
let d;

//any에서 nmber 타입으로 진화
d = 10;

//string 타입으로 진화
d = "hi";

//상수이기 때문에 리터럴 타입으로 추론
const num = 10;