// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 
// 타입을 상황에 따라 좁히는 방법을 이야기


type Person = {
    name: string,
    age: number
}

function func(val: number | string | Date | null | Person) {
    if(typeof val === 'number') {
        console.log(val.toFixed());
    } else if(typeof val === 'string') {
        console.log(val.toUpperCase);
    } else if(val instanceof Date) {
        console.log(val.getTime());
    } else if(val && 'age' in val) {
        console.log(`${val.name}은 ${val.age}살 입니다.`)
    }
}