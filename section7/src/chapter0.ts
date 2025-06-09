//제네릭(포괄적인, 모든 타입 범용 함수)

//제네릭 함수
//<T>타입 변수
//상황에 따라 타입을 결정
//함수의 인수에 따라서 반환값의 타입을 가변적으로 정할 수 있음
function func<T>(val: T): T {
    return val;
}

let num = func(10);

let bool = func(true);

let str = func("string");