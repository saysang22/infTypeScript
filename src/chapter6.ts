//any(모두, 누구나, 모든 타입)
//특정 변수의 타입을 우리가 확실히 모를 때
//최대한 사용 안하는게 좋음
let anyVar : any = 10;
anyVar = "hello";
anyVar = false;

let num : number = 10;
num = anyVar;

//unknown
//any보다 안전하기 때문에 any보다 nuknown을 쓰면 좋다.
let nuknownVar : unknown;

nuknownVar = "";
nuknownVar = 1;
nuknownVar = () => {};
nuknownVar = undefined;

//any와는 다르게 값을 할당 할 수 없다.
// num = nuknownVar;

//타입을 정제하면 담을 수 있다.
if(typeof nuknownVar === "number") {
    num = nuknownVar;
}