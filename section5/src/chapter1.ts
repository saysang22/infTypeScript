//인터페이스의 확장

interface Animal {
    name: string,
    age: number
}

interface Dog extends Animal{
    isBark: boolean
}

const dog: Dog = {
    name: "",
    age: 1,
    isBark: true
}

interface Cat {
    isScratch: boolean
}

interface Chicken {
    isFly: boolean
}