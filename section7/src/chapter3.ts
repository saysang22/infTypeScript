//제네릭 인터페이스

interface KeyPair<K, V> {
    key: K,
    value: V
}

let keyPair : KeyPair<string, number> = {
    key: '',
    value: 0
}

let keyPair2 : KeyPair<boolean, string[]> = {
    key: true,
    value: ['1']
}

//인덱스 시그니처
interface NumberMap {
    [key: string] : number
}

let numberMap1 : NumberMap = {
    key: 1,
    val: 2
}

interface Map<V> {
    [key: string] : V;
}

let stringMap: Map<string> = {
    key: ''
}

let booleanMap: Map<boolean> = {
    boo : true
}

let numberMap : Map<number> = {
    num : 1
}

//제네릭 타입 별칭
type Map2<V> = {
    [key: string] : V;
}

let stringMap2 : Map2<string> = {
    pro: 'hello'
}

//제네릭 인터페이스의 활용 예시
// -> 유저 관리 프로그램
// -> 유저구분 : 학생 유저 / 개발자 유저 

interface Student {
    type: 'student',
    school: string
}

interface Developer {
    type: 'developer',
    skill: string
}

interface User<T> {
    name: string,
    profile: T
}

function goToSchool(user: User<Student>) {
    if(user.profile.type !== 'student') {
        console.log('잘 못 오셨습니다.');
        return;
    }

    const school = user.profile.school
    console.log(`${school}로 등교 완료`)
}



const developerUser: User<Developer> = {
    name: '김민서',
    profile: {
        type: 'developer',
        skill: 'React'
    }
}

const studentUser: User<Student> = {
    name: '홍길동',
    profile: {
        type: 'student',
        school: '구미1대학',
    }
}

goToSchool(studentUser)