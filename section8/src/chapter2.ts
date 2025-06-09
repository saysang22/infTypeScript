//keyof 연산자

interface Person {
    name: string,
    age: number,
    // boo: boolean
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: '김민서',
    age: 38,
}

// console.log(getPropertyKey(person, "name"));

function test(pe: Person,test: keyof Person) {
    return pe[test];
}

console.log(test(person, 'name'));