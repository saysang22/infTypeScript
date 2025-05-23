//void
//void -> 공허(아무것도 없음을 의미하는 타입)

function func1(): string {
    return "hello";

}

function func2() : void {
    console.log("hello")
}

//void로 설정하면 undefined외에는 아무것도 담을 수 없다. 
let a : void;
// a = 1;
// a = "hello";
// a = null;
a = undefined;

//never
//never -> 존재하지 않는, 모순
//불가능한 타입
//무한 루프 때문에 반환을 할 수가 없고, 정상적으로 종료가 될수가 없을 때
function func3() : never {
    while(true) {

    }
}

//실행되면 프로그램이 바로 중지 되기 때문에 never가 가장 적합
function func4() : never {
    throw new Error();
}

let b : never;
// b = 1;
// b = "";
// b = undefined;
// b = null;